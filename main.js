const searchButton = document.getElementById('searchbutton');
const searchInput = document.getElementById('searchbox');

searchButton.addEventListener('click', function() {
const query = searchInput.value; // Get the search query from the input field
const url = `https://example.com/search?q=${query}`; // Construct the URL for the search API endpoint with the query parameter
window.location.href = url;
ter
});

document.getElementById("printButton").addEventListener("click", function() {
	window.print();
});
window.alert("welcom to zero drug adicors")
