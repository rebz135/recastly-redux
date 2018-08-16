import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
var SearchContainer = () => (
  <Search />
);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
var mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    handleSearchInputChange: () => 
      dispatch(handleSearchChange())
  };
};

export default connect(mapDispatchToProps)(SearchContainer);



// var VideoListContainer = () => (
//   <VideoList />
// );

// //TODO: define a VideoListContainer component which will hook up your action
// // dispatchers with your VideoList component props.

// const mapStateToProps = state => {
//   return {
//     'videos': state.VideoList
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     handleVideoListEntryTitleClick: () => 
//       dispatch(changeVideo())
//   };
// };
  
// export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);