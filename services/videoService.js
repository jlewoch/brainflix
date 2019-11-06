const videos = require('../videos');

let autoId = arr => {
    let id = arr.map(item => parseInt(item.id));
    return Math.max(...id) + 1;
  };
  let videoIdFunc = id => {
    return videos.find(item => item.id === parseInt(id));
  };
  let getVideoSuggestions = () => {
    return videos.map(item => {
      return {
        id: item.id,
        title: item.title,
        chanel: item.channel,
        views: item.views,
        duration: item.duration,
        image: item.image
      };
    });
  };
  function commentObj(vidId, name, comment) {
    return {
      id: autoId(videoIdFunc(vidId).comments),
      name: name,
      comment: comment,
      timestamp: Date.now()
    };
  }
  let images = [
    "https://i.imgur.com/dHGoSYp.jpeg",
    "https://i.imgur.com/3WPEmCJ.jpeg",
    "https://i.imgur.com/93GdUxA.jpeg",
    "https://i.imgur.com/GLwQ7gZ.jpeg",
    "https://i.imgur.com/stKmNFm.jpeg",
    "https://i.imgur.com/ou4JcP6.jpeg",
    "https://i.imgur.com/z4Zx3Hl.jpeg",
    "https://i.imgur.com/RRrX32W.jpeg"
  ];
  function videoObj(title, description, tags) {
  
    return {
      id: autoId(videos),
      title: title,
      tags: tags,
      description: description,
      channel: "The Force",
      views: "37828",
      duration: "12:45",
      image: images[Math.floor(Math.random() * 8)],
      video: "http://127.0.0.1:8080/fish.mp4",
      thumbsUp: Math.floor(Math.random() * 10000),
      thumbsDown: Math.floor(Math.random() * 5000),
      subscriberCount: Math.floor(Math.random() * 1000000),
      comments: [
        {
          name: "Nigel",
          comment: "Never gonna give you up...",
          id: 0,
          timestamp: 1530744338878
        },
        {
          name: "Ian",
          comment: "You could make $5000 a day too!",
          id: 1,
          timestamp: 1530744338878
        },
        {
          name: "Jake",
          comment: "nice and easy",
          id: 2,
          timestamp: 1530744338878
        }
      ]
    };
  }
  
  module.exports = {
    autoId,
    videoIdFunc,
    getVideoSuggestions,
    commentObj,
    videoObj
  }