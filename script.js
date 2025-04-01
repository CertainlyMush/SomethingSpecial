const messages = [
    "Are you sure?",
    "Really sure??",
    "Let's give it a try, just think about it!",
    "We'll make a great match, honestly",
    "Pookie pleaseeee",
    "If u say no, I'll be really sad :(",
    "Oke fine, I'll stop...",
    "JK, WE'RE ENTWINED NOW!"
    "GIVE ME A CHANCE!!!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
