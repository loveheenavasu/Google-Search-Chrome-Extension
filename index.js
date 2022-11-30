const button = document.getElementById("button");

button.addEventListener("click", function (e) {
  const input = document.getElementById("search-bar").value;
  if (input) {
    chrome.tabs.create({
      url: `https://www.google.com/search?q=${input}`,
    });
  } else {
    e.preventDefault();
    return;
  }
});
