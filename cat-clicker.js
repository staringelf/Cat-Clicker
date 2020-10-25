const model = {
	cats: [
		{
			name: 'Dorothy',
			src: 'dorothy.jpg',
			clicks: 0,
		},
		
		{
			name: 'Sheena',
			src: 'sheena.jpg',
			clicks: 0,
		},
		
		{
			name: 'Alexandra',
			src: 'alexandra.jpg',
			clicks: 0,
		},
		
		{
			name: 'Slavy',
			src: 'slavy.jpg',
			clicks: 0,
		},
		
		{
			name: 'Eva',
			src: 'eva.jpg',
			clicks: 0,
		}
	]
};

const octopus = {
	
	getCats: function () {
		return model.cats;
	},
	
	displayCat: function (cat) {
		viewDisplay.render(cat);
	},
	
	incrementClicks: function (cat) {
		cat.clicks++;
		viewDisplay.render(cat);
	},
	
	init: function () {
		viewButtons.init();
	}
	
};

const viewButtons = {
	init: function () {
		const catsUl = document.createElement('ul');
		octopus.getCats().forEach(cat => {
			const catLi = document.createElement('li');
			catLi.innerHTML = `<button class="cat-button">${cat.name}</button>`;
			catLi.classList.add('cats-nav__item');
			catLi.addEventListener('click', () => {
				octopus.displayCat(cat);
			});
			catsUl.appendChild(catLi);
		})
		document.querySelector('.cat-buttons').appendChild(catsUl);
	},
}

const viewDisplay = {
	render: function (cat) {
		const catDisplay = document.querySelector('.cat-display');
		const catContainer = catDisplay.querySelector('.cat-container');
		catContainer.innerHTML = `<h3 class="cat__name">${cat.name}</h3>
								  <p class="cat__clicks">${cat.clicks}</p>`;
		const catFigure = document.createElement('figure');
		catFigure.classList.add('cat__photo');
		catFigure.addEventListener('click', () => {
			octopus.incrementClicks(cat);
		});
		catFigure.innerHTML = `<img class="cat__img" src="Images/${cat.src}" alt="">`
		catContainer.appendChild(catFigure);
		catDisplay.style.display = 'block';
	},
	
	
}

octopus.init();