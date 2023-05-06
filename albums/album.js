const AlbumComponent = (album) => {
  return `
    <div class="albums">
      <img src="${album.cover}" />
      <div class="albumArtist">${album.artist}</div>
      <div class="albumName">${game.name}</div>
      <div class="albumGenre">${game.genre}</div>
      <div class="albumSingles">${album.singles.join(", ")}</div>
      <div class="albumRating">${album.rating}</div>

    </div>
    `
}

export default AlbumComponent;