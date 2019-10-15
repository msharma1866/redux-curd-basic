export const selectSong = (song) => {
  return {
    type: 'SELECTED_SONG',
    payload: song
  };
};

export const myFavSong = (song) => {
  return {
    type: 'FAV_SONG',
    payload: song
  }
}