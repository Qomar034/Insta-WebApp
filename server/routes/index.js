const { Post, Story, Comment } = require('../models')
const router = require('express').Router()

router.get('/Post', async ( req, res, next ) => {
    try {
        let posts = await Post.findAll()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/Story', async ( req, res, next ) => {
    try {
        let stories = await Story.findAll()
        res.status(200).json(stories)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/Comment', async ( req, res, next ) => {
    try {
        let comments = await Comment.findAll()
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router