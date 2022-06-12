const popupProfile = document.querySelector(".popup_profile"); //Редактирование профиля
const popupOpenEditWindow = document.querySelector(".profile__button-edit"); //Открытие попапа редактирования профиля
const popupCloseEditWindow = popupProfile.querySelector(".popup__button-close"); //Закрытие попапа редактирования профиля
const popupName = popupProfile.querySelector(".popup__input_type_name"); //Форма имени
const popupDescription = popupProfile.querySelector(".popup__input_type_description"); //Форма описания 
const profileName = document.querySelector(".profile__name"); //Имя на странице 
const profileDescription = document.querySelector(".profile__description"); //Описание на странице

const popupCards = document.querySelector(".popup_cards"); //Добавление карточек
const popupAddOpenBnt = document.querySelector(".profile__button-add"); //Открытие попапа добавления карточек
const contentForm =  popupCards.querySelector(".popup__content") //Форма попапа для добавления карточек
const createBnt = popupCards.querySelector(".popup__button_type_create"); //Кнопка публикации новой карточки
const popupAddCloseBnt = popupCards.querySelector(".popup__button-close"); //Закрытия попапа добавления карточек

const popupFullScreen = document.querySelector(".popup_img") //Открытие фотографии
const popupOpenFullScreen = document.querySelector(".item__foto"); //Кнопка открытия фотографии
const popupCloseFullScreen = popupFullScreen.querySelector(".popup__button-close"); //Кнопка закрытия попапа фотографии

const popupFoto = popupFullScreen.querySelector(".popup__foto"); //Фотография попапа
const popupFotoName = popupFullScreen.querySelector(".popup__foto-name"); //Текст фотографии

const cardsTemplate = document.querySelector(".cards-template"); //Блок Template
const photoItem = document.querySelector(".photo__item"); //Контейнер списка

const popupInputTitle = contentForm.querySelector(".popup__input_type_title");
const popupInputLink = contentForm.querySelector(".popup__input_type_link");

const popups = document.querySelectorAll(".popup") //Попапы

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; //Картиночки яндекс

addCards(initialCards);

function renderElements(item) {
  const newCards = cardsTemplate.content.cloneNode(true); //Для клонирования элемента
  const itemPhoto = newCards.querySelector(".item__foto");
  const itemName = newCards.querySelector(".item__name");
  itemName.textContent = item.name; //Название места из массива
  itemPhoto.src = item.link; //Берем ссылку из массива
  itemPhoto.alt = item.name; //Alt 
  setEventListeners(newCards);
  return newCards;
}

function addElements(evt) {
  evt.preventDefault(); //При отправлении формы страница не перезагружается
  const newCardText = popupInputTitle.value; //Название карточки
  const newCardLink = popupInputLink.value; //Ссылка на карточку
  const newCards = renderElements({ name: newCardText, link: newCardLink});
  photoItem.prepend(newCards); //Добавление на страницу
  contentForm.reset();
  toggleModal(popupCards);
  createBnt.setAttribute("disabled", "disabled");
  createBnt.classList.add("popup__button_disabled"); //Блокируем кнопки
}

function delitCard(evt) {
  const card = evt.target.closest(".item");
  card.remove();
} //Удаление

function likeToggle(evt) {  
  evt.target.classList.toggle("item__like_black");
} //Лайк

contentForm.addEventListener("submit", addElements); 

function addCards(cards) {
  const newCards = cards.map(renderElements);
  photoItem.prepend(...newCards);
} //Добавление карточек

function setEventListeners(card) {
  const itemOpenFoto = card.querySelector(".item__foto");
  const itemLike = card.querySelector(".item__like");
  const itemDelete = card.querySelector(".item__delete");
  itemOpenFoto.addEventListener("click", openPopupFull); //Открытие
  itemLike.addEventListener("click", likeToggle); //Лайк
  itemDelete.addEventListener("click", delitCard); //Удаление
}

function openPopupFull(evt) {
  toggleModal(popupFullScreen);
  popupFoto.src = evt.target.src; //Наша картинка
  popupFotoName.textContent = evt.target.alt; //Подпись к картинке
  popupFoto.alt = evt.target.alt; //Alt к картинке
}

//Редактирование профиля
function popupProfileEdit() {
  toggleModal(popupProfile);
  popupName.value=profileName.textContent;
  popupDescription.value=profileDescription.textContent;
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent=popupName.value;
  profileDescription.textContent=popupDescription.value;
  toggleModal(popupProfile);
}
popupProfile.addEventListener("submit", formSubmitHandler);

function toggleModal(modal) {
  modal.classList.toggle("popup_open");
    if (modal.classList.contains("popup_open")) { //Если попап открыт
      document.addEventListener("keydown", escClose); //То мы добавляем обработчик
    } else {  //Если нет
      document.removeEventListener("keydown", escClose); //Тогда удаляем
    }
}//Открытие и закрытие попапов

popupOpenEditWindow.addEventListener("click", () => popupProfileEdit(popupProfile));
popupCloseEditWindow.addEventListener("click", () => toggleModal(popupProfile));
popupAddOpenBnt.addEventListener("click", () => toggleModal(popupCards));
popupAddCloseBnt.addEventListener("click", () => toggleModal(popupCards));
popupCloseFullScreen.addEventListener("click", () => toggleModal(popupFullScreen));
 
function escClose(evt) {
  if (evt.key === "Escape") {
    const popupАctive = document.querySelector(".popup_open");
    toggleModal(popupАctive);
  }
} //Закрытие попапов при нажатии на esc

function overlayClose(evt) {
  if (evt.target === evt.currentTarget) {
    toggleModal(evt.target);
  }
}//Закрытие попапов при клике на оверлей

popupProfile.addEventListener("click", overlayClose);
popupCards.addEventListener("click", overlayClose);
popupFullScreen.addEventListener("click", overlayClose);