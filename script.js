// Assignment 1: Blacksmith — The Tiny Forge


// PLAN: 
//  1.If the current heat is greater than or equal to 30, then subtract 30 from the heat, increase the number of swords by one, and show a message of success.
//  2. Else, if the current heat is less than 30, then display a message of failure and do not make any changes to the given numbers.


// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.
const forge = document.getElementById("forge")
const heatValue = document.getElementById("heat-value")
const swordCount = document.getElementById("sword-count")
const forgeStatus = document.getElementById("forge-status")
const forgeImage = document.getElementById("forge-image")
const actionMessage = document.getElementById("action-message")
// 2. Create the two state variables: heat and swords made.

let heat = 20
let swordsMade = 0

// 3. Write getForgeStatus(heatValue). Return the correct status string.
function getForgeStatus(heatValue) {
    if (heatValue < 30) {
        return "Too Cold"
    } else if (heatValue < 70) {
        return "Ready to Forge"
    } else {
        return "Roaring Fire"
    }
}

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
function updateForge() {
    heatValue.textContent = heat;
    swordCount.textContent = swordsMade;

    const statusText = getForgeStatus(heat);
    forgeStatus.textContent = statusText;

    forge.classList.remove("is-cold", "is-ready", "roaring-fire");

    if (statusText === "Too Cold") {
        forge.classList.add("is-cold");
        forgeImage.src = "assets/forge-cold.svg"
        forgeImage.alt = "A stone forge with dark coals and no flames"
    } else if (statusText === "Ready to Forge") {
        forge.classList.add("is-ready");
        forgeImage.src = "assets/forge-ready.svg"
        forgeImage.alt = "A stone forge with a small orange fire"
    } else {
        forge.classList.add("roaring-fire");
        forgeImage.src = "assets/forge-roaring.svg"
        forgeImage.alt = "A stone forge with tall bright flames and sparks"
    }
    updateForge()
}


// 5. Write resetForge(). Restore the state, message, and display.
function resetForge() {
    heat = 20;
    swordsMade = 0;
    actionMessage.textContent = "Welcome to the forge. Add heat to begin.";
    updateForge();
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount) {
    heat += amount;
    if (heat > 100) {
        heat = 100;
    }

    actionMessage.textContent = `You added ${amount} heat to the forge.`;
    updateForge();
}


// 7. Write makeSword(). Handle both success and insufficient heat.

function makeSword() {
    if (heat >= 30) {
        heat = heat - 30;
        swordsMade = swordsMade + 1;
        actionMessage.textContent = "Success! You crafted a sword.";
    } else {
        actionMessage.textContent = "Not enough heat to make a sword! Add more heat.";
    }
    updateForge();
}

// 8. Call resetForge() once to start the game.
resetForge();
// Use the tests in ASSIGNMENT.md to check your work.
