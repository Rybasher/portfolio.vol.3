let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__menu");
let body = document.querySelector('body');
burger.addEventListener("click", function () {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	body.classList.toggle('lock')
})

const cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
	const card = cards[i];
	card.addEventListener('mousemove', rotate);
	card.addEventListener('mouseout', stopRotate)
}

function rotate(e) {
	const cardItem = this.querySelector('.card-item');
	const halfHeight = cardItem.offsetHeight / 2;

	cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 7 + 'deg) rotateY(' + (e.offsetX - halfHeight) / 7 + 'deg)';
}
function stopRotate() {
	const cardItem = this.querySelector('.card-item');
	cardItem.style.transform = 'rotate(0)';
}
let header = document.querySelector('.header');

window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 52 || document.documentElement.scrollTop > 52) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");

	}
}

let acc = document.getElementsByClassName("accordion");
let arrow = document.querySelector('.arrow');
for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");


		for (let j = 0; j < acc.length; j++) {
			if (acc[j] != this) {
				acc[j].classList.remove("active");
				acc[j].nextElementSibling.style.maxHeight = null;
			}
		}
		let panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

let theme_items = [
	'body',
	'.header',
	'.section__main',
	'.section__works',
	'.section__faq',
]

let theme_switcher = document.querySelector('.box');

theme_switcher.addEventListener("change", function () {
	this.classList.toggle('active');
	for (let i of theme_items) {
		document.querySelector(i).classList.toggle('dark');
	}
	for (let j of document.querySelectorAll('.container__header')) {
		j.classList.toggle('dark');

	}
})
let mask = document.querySelector('.mask');

window.addEventListener('load', function () {
	mask.classList.add('hide');
	setTimeout(() => {
		mask.remove();
	}, 1200)
});

const anchors = document.querySelectorAll('.header__link[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

let links = document.querySelectorAll('.header__link');

for (let link of links) {
	link.addEventListener('click', function () {
		burger.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('lock');

	})
}