const buttons = document.querySelectorAll('.js-button');
const modals = document.querySelectorAll('.js-modal');

buttons.forEach((btn, index) => {
	btn.addEventListener('click', ()=> {
		modals[index].classList.add('modal-active')
	})
})

const closeModal = (modal) => {
	modal.classList.remove('modal-active')
}

modals.forEach(modal => {
	const modalBackground = modal.querySelector('.js-modal-bg');
	const modalButton = modal.querySelector('.js-modal-button');

	modalBackground.addEventListener('click', () => closeModal(modal))
	modalButton.addEventListener('click', () => closeModal(modal))
})