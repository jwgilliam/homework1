const albumCollection = [
  {
    cover: 'https://upload.wikimedia.org/wikipedia/en/b/bb/PetSoundsCover.jpg',
    artist: "The Beach Boys",
    name: "Pet Sounds",
    genre: "Progressive Pop",
    singles: ["Caroline, No", "Sloop John B", "Wouldn't it Be Nice / God Only Knows"],
    rating: 10

  },

  {
    artist: "Gorillaz",
    name: "Demon Days",
    genre: "Alternative Rock",
    singles: ["Feel Good Inc.", "Dare", "Dirty Harry", "Kids with Guns / El Manana"],
    rating: 9

  },

  {
    artist: "",
    name: "",
    genre: "",
    singles: [""],
    rating: 7

  },

  {
    artist: "",
    name: "",
    genre: "",
    singles: [""],
    rating: 7

  }
]

export const useAlbums = () => {
  return albumCollection
}