const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render('home')
});

router.get('/tweets/new', secure.check, tweets.create)
router.post('/tweets', secure.check, tweets.doCreate)
router.get('/tweets', tweets.list)
router.post('/tweets/:id/delete', tweet.delete)

module.exports = router;