import { enemyList } from "./data.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  //when the page loads...
  buildEnemyCards();
  addListeners();
}

function addListeners() {
  //add a submit listener to the form
  let form = document.querySelector("#enemyForm");
  form.addEventListener("submit", addUserToList); // captures click and <enter><return>

  //add delete listeners for cards
  let section = document.querySelector(".enemies");
}

function buildEnemyCards() {
  if (!enemyList) return;
  let section = document.querySelector("#enemies");
  //called when page loads AND after any update to the enemyList
  section.innerHTML = enemyList
    .map((enemy) => {
      return `<div class="enemy" data-ref="${enemy.uuid}">
        <h3>${enemy.name}</h3>
        <p>${enemy.reason}</p>
        <button class="btnDelete">Forgive Them</button>
      </div>`;
    })
    .join("");
}

function addUserToList(ev) {
  //save the form data in the list
  //remember to generate a uuid for each enemy
  //rebuild the list of enemies cards
  ev.preventDefault();
  let name = document.getElementById("enemy").value;
  let reason = document.getElementById("reason").value;
  let uuid = crypto.randomUUID();
  if (!name || !reason) {
    // tell the user why nothing happens
    return; // leave the function because name or reason was empty
  }
  const newEnemy = {
    uuid,
    name,
    reason,
  };
  enemyList.push(newEnemy);
  buildEnemyCards();
}

function removeFromList() {
  //find the uuid in the card whose button was clicked
  //remove from the enemyList
  //rebuild the list of enemies cards
}
