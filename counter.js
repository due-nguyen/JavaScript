// COUNTER APP
let counter = 0;

function count() {
	counter = counter + 1;
	document.querySelector('h1').innerHTML = counter;

	if (counter % 10 === 0) {
		alert(`The count is now ${counter}`);
	}
}

document.querySelector('button').onclick = count;
