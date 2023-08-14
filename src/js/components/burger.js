const burger = document?.querySelector('.burger')
const nav = document?.querySelector('.nav')
const navItems = nav?.querySelectorAll('a')
const body = document.body

burger?.addEventListener('click', () => {
	body.classList.toggle('disable-scroll')
	burger?.classList.toggle('burger--active')
	nav.classList.toggle('nav--visible')
})

navItems.forEach(el => {
	el.addEventListener('click', () => {
		body.classList.remove('disable-scroll')
		burger?.classList.remove('burger--active')
		nav.classList.remove('nav--visible')
	})
})
