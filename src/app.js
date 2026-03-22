import "./style.css";

window.onload = function () {
  const who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "My neighbor",
    "A weird clown"
  ];

  const action = [
    "ate",
    "peed on",
    "crushed",
    "broke",
    "stole",
    "destroyed"
  ];

  const what = [
    "my homework",
    "my phone",
    "the car",
    "my laptop",
    "my backpack",
    "my shoes"
  ];

  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "in the parking lot"
  ];

  function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function generateExcuse() {
    const randomWho = getRandomItem(who);
    const randomAction = getRandomItem(action);
    const randomWhat = getRandomItem(what);
    const randomWhen = getRandomItem(when);

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  }

  const excuseElement = document.querySelector("#excuse");

  if (excuseElement) {
    excuseElement.innerHTML = generateExcuse();
  }
};