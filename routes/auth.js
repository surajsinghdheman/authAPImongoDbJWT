const router = require('express').Router();
const User = require('../model/User');
const {registerValidation, loginValidation} = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register
router.post('/register', async (req, res) => {

    //Validation
    const {error} = await registerValidation(req.body);
    if (error) return res.status('400').send(error.details[0].message);

    //checking if user already exist
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status('400').send("Email already registered");

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);


    //Create New User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedpassword
    });
    console.log(user);
    try {
        const saveUser = await user.save();
        res.send(user._id);
    } catch (err) {
        res.status(400).send(err);
    }
});

//Login
router.post('/login', async (req, res) => {
    //Validation
    const {error} = await loginValidation(req.body);
    if (error) return res.status('400').send(error.details[0].message);

    //checking if user already exist
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status('400').send("Email or Password invalid");

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status('400').send("Email or password invalid");

    //Create and assign JWT
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: '1m' }); //Expiry 1m - 1 minute// 1d - 1 day

    res.header('auth-token', token).send('logged in');

});

module.exports = router;
