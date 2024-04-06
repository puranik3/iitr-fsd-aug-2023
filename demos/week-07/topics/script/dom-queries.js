/**
 * Get message element by id
 * Get elements with class x (getElementsByClassName)
 * Get elements with class x (querySelectorAll)
 * Get first element with class name x (querySelector)
 * Get first element with class name x that lies within a section (2 approaches - using CSS selector, and searching in a DOM subtree)
 */
const messageEl = document.getElementById(`message`);
console.log(messageEl);
console.dir(messageEl);

const xEls = document.getElementsByClassName("x");
console.log(xEls);
console.log(xEls[0]);
console.log(xEls[1]);
console.log(xEls[2]);
console.log(xEls.length);

const xEls2 = document.querySelectorAll(".x");
console.log(xEls2);
console.log(xEls2[0]);
console.log(xEls2[1]);
console.log(xEls2[2]);
console.log(xEls2.length);

const firstXEl = document.querySelector(".x");
console.log(firstXEl);

const sectionEl = document.querySelector("section");
const xWithinSection = sectionEl.querySelector(".x");
console.log(xWithinSection);