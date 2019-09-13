const router = require('express').Router();
const verify = require('./verifyToken');


router.get('/', verify, (req, res) => {
    res.json({post: {title: 'my first Post', description: 'random data that shd not be access without auth token'}})
});

module.exports = router;
