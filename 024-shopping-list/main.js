const inputField = document.querySelector('.form-input');
const submitButton = document.querySelector('.button');
const itemsContainer = document.querySelector('.item-list');

function updateList(item) {
	const list = document.createElement('li');
	const itemName = document.createElement('span');
	const deleteButton = document.createElement('button');

	itemName.textContent = item;
	list.appendChild(itemName);

	deleteButton.textContent = 'Delete';
	list.appendChild(deleteButton);

	itemsContainer.appendChild(list);

	deleteButton.addEventListener('click', (event) => {
		event.preventDefault();

		itemsContainer.removeChild(list);
	});
}

function addItem(event) {
	event.preventDefault();

	// dont push if it ''
	if (inputField.value !== '') {
		updateList(inputField.value);
	}

	inputField.value = ''; // reset input field
	inputField.focus();
}

submitButton.addEventListener('click', addItem);
