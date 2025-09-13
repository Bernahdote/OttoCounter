const artistId = "1Xyo4u8uXC1ZmMpatF05PJ"; // Change to Ottomania
fetchTopTracks(artistId);

async function fetchTopTracks(id) {
  const token = await getToken(); // from backend
  const res = await fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`, {
    headers: { 'Authorization': 'Bearer ' + token }
  });
  const data = await res.json();

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  data.tracks.forEach(track => {
    resultsDiv.innerHTML += `
      <p>${track.name}</p>
      <img src="${track.album.images[0].url}" alt="${track.name}" width="150">
    `;
  });
}