import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => (
  <VideoList />
);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = state => {
  return {
    'videos': state.videoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: () => 
      dispatch(changeVideo())
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);


// var VideoListContainer = () => (
//   <VideoList />
// );

// //TODO: define a VideoListContainer component which will hook up your action
// // dispatchers with your VideoList component props.

// const mapStateToProps = state => {
//   return {
//     'videos': state.videoList
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     handleVideoListEntryTitleClick: () => 
//       dispatch(changeVideo())
//   };
// };

// connect(mapStateToProps, mapDispatchToProps)(VideoListContainer)
  
// export default VideoListContainer;
