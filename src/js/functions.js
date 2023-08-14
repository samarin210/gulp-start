// Модальное окно
/*
import GraphModal from 'graph-modal';
const modal = new GraphModal();
*/

//Маска телефона

/*
import '../../node_modules/inputmask/dist/inputmask.js';


let selectors = document.querySelector('.phone')
let im = new Inputmask('+7 (999) 999-99-99')
im.mask(selectors)

/*

// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Форма обратной связи

/*

window.addEventListener('DOMContentLoaded', function () {
	let modalForms = document.querySelectorAll('.modal__form')

	modalForms.forEach(function (form) {
		form.addEventListener('submit', function (event) {
			event.preventDefault()

			let th = this
			let xhr = new XMLHttpRequest()

			xhr.open('POST', 'mail.php')
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					th.querySelector('.modal-success').classList.add('visible')

					setTimeout(function () {
						th.querySelector('.modal-success').classList.remove('visible')
						th.reset()
					}, 5000)
				}
			}

			xhr.send(new URLSearchParams(new FormData(th)).toString())
		})
	})
})
*/


//валидация полей
/*

import JustValidate from 'just-validate'

const validate = new JustValidate('.form')

validate
	.addField('.form__name', [
		{
			rule: 'required',
			errorMessage: 'Введите имя!',
		},
		{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Минимум 2 символа',
		},
	])

	*/


