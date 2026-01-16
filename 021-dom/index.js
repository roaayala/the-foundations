// SELECT ELEMENT
// const container = document.querySelector('#container');

// const display = container.firstElementChild; // grab the first element within #container
// console.log(display);

// const controls = container.querySelector('.controls');
// const displayTwo = controls.previousElementSibling;
// console.log(displayTwo);

// ELEMENT CREATION
// const div = document.createElement('div');

// APPEND ELEMENT
// container.appendChild(div); // append element as the last child of parent
// container.insertBefore(div, div); // insert new element into parent before a node as reference

// REMOVE ELEMENT
// container.removeChild(div)

// ALTERING ELEMENT
// add inline style
// div.style.color = 'blue';
// div.style.cssText = 'color: blue; background: white';
// add several style rules
// div.setAttribute('style', 'color: blue; background: white');
// access style property
// div.style.backgroundColor;
// div.style['background-color'];
// div.style['backgroundColor'];

// EDITING ATTRIBUTES
// div.setAttribute('id', 'theDiv'); // set attribute
// div.getAttribute('id'); // get attribute
// div.removeAttribute('id'); // remove attribute

// WORKING WITH CLASSES
// div.classList.add('new'); // add class
// div.classList.remove('new'); // remove class
// div.classList.toggle('new'); // if there's already give class then remove if, else add it

// ADDING TEXT CONTENT
//  div.textContent = 'HELLO'; // text inside the element
// div.innerHTML = '<span>HELLO</span>'; // render the html inside targeted element

// BIT OF DOM
// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is content!';

// container.appendChild(content);

// EXERCISE
const container = document.querySelector('#container');

function createNewElement(element) {
	return document.createElement(`${element}`);
}

//  text
const text = createNewElement('p');
text.textContent = `Hey i'm red`;
text.style.color = 'red';

container.appendChild(text);

// blue h3
const h3 = createNewElement('h3');
h3.textContent = `I'm blue H3`;
h3.style.color = 'blue';

container.appendChild(h3);

// div
const div = createNewElement('div');
div.style.border = 'solid black';
div.style.backgroundColor = 'pink';

container.appendChild(div);

// h1 inside div
const h1 = createNewElement('h1');
h1.textContent = `I'm in a div`;

div.appendChild(h1);

// p inside div
const innerText = createNewElement('p');
innerText.textContent = 'MEE TOO';

div.appendChild(innerText);
