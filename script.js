const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    
    const artistContainer = document.getElementById('result-artist');
    artistContainer.innerHTML = '';

    if (result.length > 0) {
        const searchTerm = searchInput.value.toLowerCase(); 

        const filteredResults = result.filter(artist => 
            artist.name.toLowerCase().includes(searchTerm)
        );

        filteredResults.forEach(artist => {
            const artistDiv = document.createElement('div');
            artistDiv.classList.add('artist-card__searched');

            const artistName = document.createElement('h2');
            artistName.classList.add('artist-name__searched');

            const artistImg = document.createElement('img');
            artistImg.classList.add('artist-img__searched');

            artistName.innerText = artist.name;
            artistImg.src = artist.urlImg;

            artistDiv.appendChild(artistImg);
            artistDiv.appendChild(artistName);
            artistContainer.appendChild(artistDiv);
        });

        artistContainer.classList.remove('hidden');
    } else {
        artistContainer.classList.add('hidden');
    }
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.add('hidden');
        return;
    }
    
    requestApi(searchTerm);
});