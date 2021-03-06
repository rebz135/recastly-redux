import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  let options = {
    key: YOUTUBE_API_KEY,
    query: q
  }

  return _.debounce((dispatch) => {
    let callback = (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    };
    
    searchYouTube(options, callback);
  }, 200);
};
export default handleVideoSearch;

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


  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   data: {
  //     part: 'snippet',
  //     key: YOUTUBE_API_KEY,
  //     q: q,
  //     type: 'video',
  //     videoEmbeddable: 'true'
  //   },
  //   success: (data) => {
  //     changeVideoList(data.items);
  //     changeVideo(data.items[0]);
  //   },
  //   error: (data) => {
  //     console.log('Failed to get data', data);
  //   } 
  // });