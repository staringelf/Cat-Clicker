const model = {
	currentCat: null,
	
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
	
	init: function () {
		model.currentCat = model.cats[0];
		listView.init();
		catView.init();
	},
	
	
	getCats: function () {
		return model.cats;
	},
	
	getCurrentCat: function () {
		return model.currentCat;
	},
	
	setCurrentCat: function (cat) {
		model.currentCat = cat;
	},
	
	displayCat: function () {
		catView.render();
	},
	
	incrementClicks: function () {
		model.currentCat.clicks++;
		catView.render();
	},
	
};

const listView = {
	
	init:function () {
		this.catsUl = document.createElement('ul');
		this.render();
	},
	
	render: function () {
		
		var cat, i, cats;
		
		cats = octopus.getCats();
		
		for(i = 0; i < cats.length; i++){
			const catLi = document.createElement('li');
			cat = cats[i];
			catLi.innerHTML = `<button class="cat-button">${cat.name}</button>`;
			catLi.classList.add('cats-nav__item');
			catLi.addEventListener('click', function (cat) {
				console.log(cat);
			});
			this.catsUl.appendChild(catLi);
			console.log(cat);
		}
		console.log(cat);
		document.querySelector('.cat-buttons').appendChild(this.catsUl);
	}
};

const catView = {
	init: function () {
		this.catName = document.querySelector('.cat__name');
		this.catPhoto = document.querySelector('.cat__photo');
		this.catClicks = document.querySelector('.cat__clicks');
		this.catImage = document.querySelector('.cat__img');
		this.catPhoto.addEventListener('click', () => {
			octopus.incrementClicks();
		})
		this.render();
	},
	
	render: function () {
		
		const currentCat = octopus.getCurrentCat();
		this.catName.textContent = currentCat.name;
		this.catClicks.textContent = currentCat.clicks;
		this.catImage.src = `Images/${currentCat.src}`;
	}
}


octopus.init();