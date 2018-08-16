import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers({
  'currentVideo': currentVideo, 
  'videoList': videoList
});


//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;


// var videoListReducer = (state = {'videoList': []}, action) => {
//   //TODO: define a reducer for the videoList field of our state.
//   switch (action.type) {
//     case 'CHANGE_VIDEO_LIST':
//       return state.videoList.concat(action.videos);
//     default:
//       return state.videoList;
//   }
// };