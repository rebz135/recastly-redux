import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos; 
  } else {
    return state;
  }
};

export default videoListReducer;


// var currentVideoReducer = (state, action) => {
//   //TODO: define a reducer for the currentVideo field of our state.
//   switch (action.type) {
//   case 'CHANGE_VIDEO':
//     return Object.assign({}, state, action.video);
//   default:
//     return null;
//   }
// };

// state = sampleData