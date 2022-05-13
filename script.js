const popupOpenBtn = document.querySelector('.profile__edit-button_popup');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close');

popupOpenBtn.addEventListener('click', function() {
   
    popup.classList.toggle('popup__active')
})

popupCloseBtn.addEventListener('click', function() {
   
    popup.classList.toggle('popup__active')
})

document.querySelector('.popup__name').value = document.querySelector('.profile__name').textContent;
document.querySelector('.popup__profession').value = document.querySelector('.profile__profession').textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = document.querySelector('.popup__name').value;
  document.querySelector('.profile__profession').textContent = document.querySelector('.popup__profession').value;
  closeEditForm();
}

function closeEditForm() {
  popup.classList.toggle('popup__active')
}

document.getElementById('submit').addEventListener('click', formSubmitHandler);