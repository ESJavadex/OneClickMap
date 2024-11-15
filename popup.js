document.getElementById("search").addEventListener("click", () => {
  const address = document.getElementById("address").value;
  if (address) {
    const mapIframe = document.getElementById("map");
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
    mapIframe.src = googleMapsUrl;
  } else {
    alert("Please enter an address.");
  }
});
