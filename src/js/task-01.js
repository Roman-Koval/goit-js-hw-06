const categoried = document.querySelector('ul').children.length;
console.log(`Number of categories: ${categoried}`);
const ulEl = document.querySelectorAll('.item');
ulEl.forEach((elem) => {
    let title = elem.firstElementChild.textContent;
    let quantity = elem.lastElementChild.children.length;
    console.log(`Category: ${title}`, `Elements: ${quantity}`)
    });



