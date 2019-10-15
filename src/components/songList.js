import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong, myFavSong } from '../actions'

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>);
    })
  }

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
        <button className="ui button primary" onClick={() => this.props.myFavSong(this.props.songs[2])}>Fav Song</button>
      </div>
    );
  }
}

// this is contacting provider to get the list of songs from store and pass
// it on to the Songlist component
const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs
  };
}

// connect funtion to get the data from store
// connect is used to get the action creator. selectSong action creator will go as a props to the Songlist component
export default connect(mapStateToProps, { selectSong, myFavSong })(SongList);