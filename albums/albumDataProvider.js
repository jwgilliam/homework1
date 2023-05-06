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
    cover: 'https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG',
    artist: "Gorillaz",
    name: "Demon Days",
    genre: "Alternative Rock",
    singles: ["Feel Good Inc.", "Dare", "Dirty Harry", "Kids with Guns / El Manana"],
    rating: 9

  },

  {
    cover: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Cover_contra.jpg',
    artist: "Vampire Weekend",
    name: "Contra",
    genre: "Alternative",
    singles: ["Horchata", "Cousins", "Giving Up the Gun", "Holiday", "White Sky", "Run"],
    rating: 7

  },

  {
    cover: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Hot_Rats_%28Frank_Zappa_album_-_cover_art%29.jpg',
    artist: "Frank Zappa",
    name: "Hot Rats",
    genre: "Prog Rock",
    singles: ["Peaches en Regalia"],
    rating: 7

  }
]

export const useAlbums = () => {
  return albumCollection
}