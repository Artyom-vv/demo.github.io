const burger = document.querySelector(".burger")

burger.addEventListener("click", function () {
	let element = document.querySelector(".nav")
	element.classList.toggle("open")
	burger.classList.toggle("active")
});

let languages = function () {
	let languagesItem = document.querySelectorAll('.languages__item');

	languagesItem.forEach(item => {
		item.addEventListener('click', languageChoose);
	});

	function languageChoose() {
		let text = this.innerText,
			select = this.closest('.languages'),
			currentText = select.querySelector('.languages__title');
			currentText.innerText = text;
	}

};

languages();

// let lastChild = function () {
// 	let child = document.querySelectorAll('.footer-column-inner');
// 	let childLast;
	
// 	console.log(child.length);
// 	for (let index = 0; index < child.length; index++) {
// 		if (index === child.length -1) {
// 			childLast = child[index];
// 			childLast.classList.add('lastchild')
// 		}
// 		console.log(index);
// 		console.log(childLast);
// 	}
// };

// lastChild();