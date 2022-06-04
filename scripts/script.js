const popupOpenEditWindow = document.querySelector('.profile__edit-button_popup');
const popup = document.querySelector('.popup');
const popupCloseEditWindow = document.querySelector('.popup__close');
const popupName = document.querySelector('.popup__name');
const popupProfession = document.querySelector('.popup__profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupSubmitForm = document.querySelector('.popup__form')

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;
  handlePopupVisability();
}

function handlePopupVisability() {
  popup.classList.toggle('popup_active');
}

popupSubmitForm.addEventListener('submit', formSubmitHandler); 

popupOpenEditWindow.addEventListener('click', function() {
  popup.classList.add('popup_active');
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;
})

popupCloseEditWindow.addEventListener('click', function() {
  popup.classList.remove('popup_active');
})

/* Я не стану рисковать дополнительно перед последней проверкой, правильно ли я поняла, что лучше сделать вот так или это полный бред?)

opupOpenEditWindow.addEventListener('click', function() {
  handlePopupVisability();
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;
})

popupCloseEditWindow.addEventListener('click', handlePopupVisability); 

function handlePopupVisability() {
  popup.classList.toggle('popup_active');
  popup.classList.contains('popup_active');
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;
}

popupOpenEditWindow.addEventListener('click', handlePopupVisability);

*/