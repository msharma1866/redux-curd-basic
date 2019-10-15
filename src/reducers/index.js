import { combineReducers } from 'redux'

const songListReducer = () => {
  return [
    { title: 'All star', duration: '4:08' },
    { title: 'Back street boys', duration: '2:01' },
    { title: 'Gully Boy', duration: '4:50' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECTED_SONG')
    return action.payload;
  return selectedSong;
}

const favSong = (song = null, action) => {
  if (action.type === 'FAV_SONG') {
    return action.payload;
  }
  return song;
}

// combine reducers to form the state
// store
export default combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer,
  favSong: favSong
});