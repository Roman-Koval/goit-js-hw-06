function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const addEl = document.querySelector('[data-create]');
const deleteEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls').firstElementChild;

let amount = 0;
let size = 30;


inputEl.addEventListener('input', (e) => {
	
	amount = e.currentTarget.value;
	return amount;
})


addEl.addEventListener('click', (e) => {
	
	
	for (let i = 0; i < amount; i += 1) {
		
		const divEl = document.createElement('div');
		divEl.style.backgroundColor = getRandomHexColor();
		
		
		divEl.style.width = `${size}px`;
		divEl.style.height = `${size}px`;
		size += 10;

		divEl.style.margin = '20px';
		
		boxesEl.append(divEl);
	}
})

deleteEl.addEventListener('click', () => {
	for (let i = 0; i < amount; i += 1) {
		if(boxesEl.hasChildNodes())
		boxesEl.removeChild(boxesEl.firstChild);
	}
	inputEl.value = "";
}) 
