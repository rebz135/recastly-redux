var searchYouTube = ({key, query, max = 5}, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: key,
      q: query,
      max: max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    timeout: 2000,
    success: (data) => {
      if (callback) {
        callback(data);
      }
    },
    error: ({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    }
  });
};

// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };


export default searchYouTube;
