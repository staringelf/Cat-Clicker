const catNames = document.querySelectorAll('.cat-name');
const cat = document.querySelector('.cat');

const displayCatName = document.querySelector('.cat__name');
const displayCatImg = document.querySelector('.cat__img');
const displayCatClicks = document.querySelector('.cat__clicks');

let clicks = 0;

function Cat(name, img) {
	this.name = name;
	this.img = img;
}

catNames.forEach(catName => catName.addEventListener('click', function () {
	const cat = new Cat(catName.textContent, `${catName.textContent}.jpg`);
	console.log(cat);
	[displayCatName.textContent, displayCatImg.src] = [cat.name, cat.img];
	clicks = 0;
	displayCatClicks.textContent = clicks;
}))

displayCatImg.addEventListener('click', function  () {
	displayCatClicks.textContent = ++clicks;
})


/*const cats = document.querySelectorAll('.cat_image');
const catNames = ['eva', 'dorothy'];

let score = [0, 0];

cats.forEach(function (cat, index){
	cat.parentNode.querySelector('.cat__name').textContent = catNames[index];
	
	cat.addEventListener('click', function () {
	const scoreBoard = cat.parentNode.querySelector('.scoreboard');
	scoreBoard.textContent = ++score[index];
	})
})
*/