document.addEventListener('DOMContentLoaded', () => {
console.log('JavaScript loaded');

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAllClick);
});

  const form = document.querySelector("#new-album-form");
  form.addEventListener("submit", (event)=>{
    event.preventDefault();

  const title = event.target.title.value;
  const artist = event.target.artist.value;
  const year = event.target.year.value;
  const genre = event.target.genre.value;


  const newAlbum = document.createElement("div");
  const newAlbumTitle = document.createElement("div");
  const newAlbumArtist = document.createElement("div");
  const newAlbumYear = document.createElement("div");
  const newAlbumGenre = document.createElement("div");

  newAlbumTitle.textContent = title;
  newAlbumArtist.textContent = artist;
  newAlbumYear.textContent = year;
  newAlbumGenre.textContent = genre;

  newAlbum.appendChild(newAlbumTitle);
  newAlbum.appendChild(newAlbumArtist);
  newAlbum.appendChild(newAlbumYear);
  newAlbum.appendChild(newAlbumGenre);

  newAlbumTitle.classList.add("album-title");
  newAlbumArtist.classList.add("album-artist");
  newAlbumYear.classList.add("album-year");
  newAlbumGenre.classList.add("album-genre");

  newAlbum.classList.add("new-item");

  const albumCollection = document.querySelector("#album-collection");
  albumCollection.appendChild(newAlbum);


  form.reset();

});

const handleDeleteAllClick = function (event) {
  const albumCollection = document.querySelector('#album-collection');
  albumCollection.innerHTML = '';
};

});
