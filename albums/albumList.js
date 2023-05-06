import { useAlbums } from "./albumDataProvider.js";
import AlbumComponent from "./album.js";

const contentElement = document.querySelector("#albumList")
const albumListComponent = () => {
  const albums = useAlbums()

  contentElement.innerHTML +=
    `
    ${albums.map(
      (currentAlbum) => {
        return AlbumComponent(currentAlbum)
      }

    ).join("")
    }
    `
}

export default albumListComponent