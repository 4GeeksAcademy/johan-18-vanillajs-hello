import "./style.css";

window.onload = function () {
  const who = [
    "A lonely merchant",
    "My neighbor",
    "A weird clown",
    "The mailman",
    "My dog",
    "An old pirate",
    "A confused police officer",
    "A ninja turtle"
  ];

  const action = [
    "kicked",
    "destroyed",
    "stole",
    "broke",
    "painted",
    "hid",
    "pushed",
    "crushed"
  ];

  const what = [
    "my car",
    "my homework",
    "my laptop",
    "my backpack",
    "my phone",
    "my shoes",
    "my project",
    "my bicycle"
  ];

  const when = [
    "near the toilet",
    "before the class",
    "during my lunch",
    "while I was sleeping",
    "in the parking lot",
    "inside the kitchen",
    "next to the elevator",
    "when I was exercising"
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

    return {
      firstLine: `${randomWho} ${randomAction} ${randomWhat}`,
      secondLine: `${randomWhen}`
    };
  }

  const excuse = generateExcuse();

  document.querySelector("#intro").innerHTML =
    "OMG! you will not believe me but...";
  document.querySelector("#excuse-line-1").innerHTML = excuse.firstLine;
  document.querySelector("#excuse-line-2").innerHTML = excuse.secondLine;
};