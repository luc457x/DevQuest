const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
    character.addEventListener("mouseenter", () => {
        /* The "if" statement below is used when viewing the page on a smartphone or tablet,
        ensuring that when a new character is selected, the view smoothly scrolls to the top of the page. */
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
        removeCharacterSelection();
        character.classList.add("selected");
        changeImageCharacterSelected(character);
        changeNameCharacterSelected(character);
        changeInfoCharacterSelected(character);
    })
})

function changeInfoCharacterSelected(character) {
    const infoCharacter = document.getElementById("character-description");
    infoCharacter.innerText = character.getAttribute("data-description");
}

function changeNameCharacterSelected(character) {
    const nomecharacter = document.getElementById("character-name");
    nomecharacter.innerText = character.getAttribute("data-name");
}

function changeImageCharacterSelected(character) {
    const imageCharacterBig = document.querySelector(".selected-character-big");
    const idcharacter = character.attributes.id.value;
    imageCharacterBig.src = `./src/img/x-men/card-${idcharacter}.png`;
}

function removeCharacterSelection() {
    const characterselected = document.querySelector(".selected");
    characterselected.classList.remove("selected");
}