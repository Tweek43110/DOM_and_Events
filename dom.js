/* The section below covers basic DOM manipulation */

//selects container is to append elements
const container = document.querySelector('#container');

//creates new content in a div element
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

//pushes above content into view
container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.style.color = "red";
paragraph.classList.add('para');
paragraph.textContent = "Hey I'm red!";

container.appendChild(paragraph);

const heading3 = document.createElement('h3');
heading3.style.color = "blue";
heading3.classList.add('heading_3');
heading3.textContent = "I'm a blue h3!";

container.appendChild(heading3);

//Creates a new element that is not already there
const div = document.createElement('div');
//Sets styling for above div
div.style.backgroundColor = "pink";
div.style.border = "1px solid black";
//sets a class for the selected element, needs both arguments
div.setAttribute('id', 'special');
container.appendChild(div);

//selects the new id to append to
const special = document.querySelector('#special');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
special.appendChild(h1);

const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO!";
//Adds element within selected element
special.appendChild(paragraph2);

/* The rest of this document will cover events */