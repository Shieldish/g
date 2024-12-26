// JavaScript (giveaway.js)

let keyword = ""; // The keyword to enter the giveaway
const entries = []; // Array to store valid entries

// Set the keyword
function setKeyword() {
  const keywordInput = document.getElementById("keyword");
  keyword = keywordInput.value.trim();
  if (!keyword) {
    alert("Please set a valid keyword!");
    return;
  }
  alert(`Keyword set to: ${keyword}`);
}

// Add an entry
function addEntry() {
  const entryInput = document.getElementById("entry-input");
  const entryValue = entryInput.value.trim();

  if (entryValue === keyword) {
    const userId = `User${entries.length + 1}`;
    entries.push(userId); // Add user ID to entries
    document.getElementById("entries").innerHTML += `<div class="entry">${userId}</div>`;
    entryInput.value = ""; // Clear input
  } else {
    alert("Invalid keyword! Try again.");
  }
}

// Pick winners
function pickWinners() {
  const winnerCount = parseInt(document.getElementById("winner-count").value, 10);

  if (winnerCount <= 0 || winnerCount > entries.length) {
    alert("Invalid number of winners!");
    return;
  }

  const winners = [];
  while (winners.length < winnerCount) {
    const randomIndex = Math.floor(Math.random() * entries.length);
    const selected = entries[randomIndex];
    if (!winners.includes(selected)) {
      winners.push(selected);
    }
  }

  // Display winners
  const winnersContainer = document.getElementById("winners");
  winnersContainer.innerHTML = winners
    .map((winner) => `<div class="winner">${winner}</div>`)
    .join("");

  alert(`Winners: ${winners.join(", ")}`);
}
