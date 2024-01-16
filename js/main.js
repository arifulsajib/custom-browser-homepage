const googleForm = document.getElementById("google-form");
const searchBtn = document.getElementById("search-btn");

const googleSearch = () => {
  const searchText = document.getElementById("search-input").value;
  var cleanQuery = searchText.replace(" ", "+", searchText);
  var url = "http://www.google.com/search?q=" + cleanQuery;

  window.location.href = url;
};

searchBtn.addEventListener("click", () => {
  googleSearch();
});

googleForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
