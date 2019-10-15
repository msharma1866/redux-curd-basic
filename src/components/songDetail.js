import React from 'react'
import { connect } from 'react-redux'


const SongDetail = (props) => {
  console.log(props);
  if (!props.song) {
    return (<div>
      select song
    </div>);
  }
  return (
    <div>
      Song Detail here:
      <p>Song Title: {props.song.title}</p>
      <br />
      <p>Duration: {props.song.duration}</p>
    </div>
  );
}

const mapToStateProps = (state) => {
  return {
    song: state.selectedSong
  }
}
export default connect(mapToStateProps)(SongDetail);