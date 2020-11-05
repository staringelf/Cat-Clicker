const model = {
	currentCat: null,
	
	adminVisibilty: false,
	
	cats: [
		{
			name: 'Dorothy',
			src: 'Images/dorothy.jpg',
			clicks: 0,
		},
		
		{
			name: 'Sheena',
			src: 'Images/sheena.jpg',
			clicks: 0,
		},
		
		{
			name: 'Alexandra',
			src: 'Images/alexandra.jpg',
			clicks: 0,
		},
		
		{
			name: 'Slavy',
			src: 'Images/slavy.jpg',
			clicks: 0,
		},
		
		{
			name: 'Eva',
			src: 'Images/eva.jpg',
			clicks: 0,
		}
	]
};

const octopus = {
	
	init: function () {
		model.currentCat = model.cats[0];
		listView.init();
		catView.init();
		adminView.init();
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
	
	getAdminVisibility: function () {
		return model.adminVisibility;
	},
	
	showAdminPanel: function () {
		model.adminVisibility = true;
		adminView.render();
	},
	
	hideAdminPanel: function () {
		model.adminVisibility = false;
		adminView.render();
	},
	
	updateCatData: function (cat) {
		model.currentCat.name = cat.name;
		model.currentCat.src = cat.src;
		model.currentCat.clicks = cat.clicks;
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
			catLi.querySelector('button').addEventListener('click', function (catCopy) {
				return function(){
					octopus.setCurrentCat(catCopy);
					octopus.displayCat();
				}
			}(cat));
			this.catsUl.appendChild(catLi);
		}
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
		this.catImage.src = currentCat.src;
	}
}

const adminView = {
	init: function () {
		var i, self;
		self = this;
		
		this.adminButton = document.querySelector('#admin');
		this.adminForm = document.querySelector('.form');
		this.cancelButton = document.querySelector('#cancel');
		this.inputFields = this.adminForm.querySelectorAll('.input-field');
		this.adminButton.addEventListener('click', function () {
			octopus.showAdminPanel();
		});
		
		this.adminForm.addEventListener('submit', function (e) {
			e.preventDefault();
			if(self.inputFields[2].value < 0 ) {
				self.inputFields[2].value = '';
				return;
			}
			self.inputFields[2].value = adminView.inputFields[2].value || 0;
			
			octopus.updateCatData({
				name: adminView.inputFields[0].value,
				src: adminView.inputFields[1].value,
				clicks: parseInt(adminView.inputFields[2].value),
			});
			self.adminForm.reset();
			octopus.hideAdminPanel();
		});
		this.cancelButton.addEventListener('click', function (e) {
			e.preventDefault();
			octopus.hideAdminPanel();
		});
		this.render();
	},
	
	render: function () {
		var visibility = octopus.getAdminVisibility();
		if(visibility){
			this.adminForm.classList.remove('invisible');
		} else{
			this.adminForm.classList.add('invisible');
		}
	}
	
	
}


octopus.init();