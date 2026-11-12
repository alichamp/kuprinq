const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email");
const emailResult = document.getElementById("email-result");

const gmailRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,62}[a-zA-Z0-9])?@gmail\.com$/;

emailForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (gmailRegex.test(email)) {
        emailResult.textContent = "Gmail введён правильно!";
        emailResult.style.color = "lightgreen";
    } else {
        emailResult.textContent = "Неправильный Gmail!";
        emailResult.style.color = "red";
    }
});

const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

let num = 0;
let animation = false;

const test = () => {
    num++;

    const maxPosition = parent.clientWidth - child.offsetWidth;

    if (num >= maxPosition) {
        num = maxPosition;
        child.style.left = `${num}px`;
        animation = false;
        return;
    }

    child.style.left = `${num}px`;

    requestAnimationFrame(test);
};

document.querySelector('#start').addEventListener('click', () => {
    if (!animation && num < parent.clientWidth - child.offsetWidth) {
        animation = true;
        requestAnimationFrame(test);
    }
});

document.querySelector('#reset').addEventListener('click', () => {
    num = 0;
    animation = false;
    child.style.left = '0px';
});