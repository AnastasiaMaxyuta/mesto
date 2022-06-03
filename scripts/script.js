const popupOpenEditWindow = document.querySelector('.profile__edit-button_popup');
const popup = document.querySelector('.popup');
const popupCloseEditWindow = document.querySelector('.popup__close');
const popupName = document.querySelector('.popup__name');
const popupProfession = document.querySelector('.popup__profession');
const popupSubmit = document.querySelector('.popup__submit');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;
  handlePopupVisability();
}

function handlePopupVisability() {
  popup.classList.toggle('popup_active');
}

popupSubmit.addEventListener('click', formSubmitHandler);
popupSubmit.addEventListener('submit', formSubmitHandler); 

popupOpenEditWindow.addEventListener('click', function() {
  popup.classList.add('popup_active');
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;
})

popupCloseEditWindow.addEventListener('click', function() {
  popup.classList.remove('popup_active');
})