let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__menu");
burger.addEventListener("click", function () {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
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
