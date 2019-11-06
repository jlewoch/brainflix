const express = require('express');
const router = express.Router();
const videoServices = require('../services/videoService');
const videos = require('../videos');

router
  .route('/')
  .get((req, res) => {
    res.status(200).json(videoServices.getVideoSuggestions());
  })
  .post(function(req, res) {
    if (req.body.title && req.body.description) {
      let newObj = videoServices.videoObj(
        req.body.title,
        req.body.description,
        req.body.tags
      );
      videos.push(newObj);
      res.status(200).json(newObj);
    } else {
      res
        .status(400)
        .json(
          'Required Fields were not Included in request include name and comment'
        );
    }
  });

router
  .route('/:videoId')
  .get((req, res) =>
    videoServices.videoIdFunc(req.params.videoId)
      ? res.status(200).json(videoServices.videoIdFunc(req.params.videoId))
      : res.status(404).send('Page Not Found')
  )
  .put((req, res) => {
    if (
      req.body.title &&
      req.body.description &&
      videoServices.videoIdFunc(req.params.videoId)
    ) {
      videoServices.videoIdFunc(req.params.videoId).title = req.body.title;
      videoServices.videoIdFunc(req.params.videoId).description =
        req.body.description;
      videoServices.videoIdFunc(req.params.videoId).updated = Date.now();
      res.status(200).json(videoServices.videoIdFunc(req.params.videoId));
    } else {
      res
        .status(400)
        .json(
          'Required Fields were not Included in request include title and description or item does not exist'
        );
    }
  })
  .delete(function(req, res) {
    videos = videos.filter(item => item.id !== parseInt(req.params.videoId));
    res.status(200).json(videos);
  });

router.route('/:videoId/comments').post(function(req, res) {
  if (req.body.name && req.body.comment) {
    let newComment = videoServices.commentObj(
      req.params.videoId,
      req.body.name,
      req.body.comment
    );
    videoServices.videoIdFunc(req.params.videoId).comments.push(newComment);
    res
      .status(200)
      .json(videoServices.videoIdFunc(req.params.videoId).comments);
  } else {
    res
      .status(400)
      .json(
        'Required Fields were not Included in request include name and comment'
      );
  }
});
router
  .route('/:videoId/comments/:commentId')
  .put((req, res) => {
    if (req.body.comment && videoServices.videoIdFunc(req.params.videoId)) {
      videoServices
        .videoIdFunc(req.params.videoId)
        .comments.find(
          item => item.id === parseInt(req.params.commentId)
        ).comment = req.body.comment;
      videoServices
        .videoIdFunc(req.params.videoId)
        .comments.find(
          item => item.id === parseInt(req.params.commentId)
        ).updated = Date.now();
      res
        .status(200)
        .json(videoServices.videoIdFunc(req.params.videoId).comments);
    } else {
      res
        .status(400)
        .json(
          'Required Fields were not Included in request include name and comment or item does not exist'
        );
    }
  })
  .delete(function(req, res) {
    videos[
      videos.indexOf(videoServices.videoIdFunc(req.params.videoId))
    ].comments = videos[
      videos.indexOf(videoServices.videoIdFunc(req.params.videoId))
    ].comments.filter(item => item.id !== parseInt(req.params.commentId));
    res
      .status(200)
      .json(videoServices.videoIdFunc(req.params.videoId).comments);
  });
module.exports = router;
