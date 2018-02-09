const express = require('express');
const router = express.Router();

const Post = require('../models/posts');

// GET users
router.get('/', (req, res, next) => {
    Post.find()
        .populate({
            model: 'User', // le model que je souhaite populate
            select: 'username', // le champ que je souhaite récupéré
            path: 'user_id' // ce qui fait reference au document souhaité
        })
        .then(posts => {
            return res.status(200).json({ message: 'GET all posts', posts: posts });
        })
        .catch(err=> next(err));
});

router.get('/:user_id', (req, res, next) => {
    Post.find({ user_id: req.params.user_id })
        .then(posts => {
            return res.status(200).json({ message: 'GET posts by user_id', posts: posts})
        })
        .catch(err => next(err));
});

router.post('/', (req, res, next) => {
    let post = new Post({
        title:req.body.title,
        user_id:req.body.user_id
    });
    post.save().then((post)=>{
        return res.status(200).json({message: 'Post successfully created: ' , post:post});
    }).catch((err)=>{next(err)});
});

module.exports = router;
