const AlbumComponent = (album) => {
  return `
    <div class="albums">
      <img class="albumCover" src="${album.cover}" />
      <div class="albumArtist">Artist: ${album.artist}</div>
      <div class="albumName">Title: ${album.name}</div>
      <div class="albumGenre">Genre: ${album.genre}</div>
      <div class="albumSingles">Singles: ${album.singles.join(", ")}</div>
      <div class="albumRating">Rating: ${album.rating}</div>

    </div>
    `
}

export default AlbumComponent;