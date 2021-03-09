const widget = document.querySelector(`.chat-widget`);
const messages = document.querySelector(`.chat-widget__messages`);
const textMessageClient = document.querySelector(`.chat-widget__input`);
const textMessage = [
  `Вы не вовремя!`,
  `Вы нам надоели!`,
  `Зачем вам помощь, раз вы и так знаете ответ!`,
  `Погода хорошая!`,
  `Меня зовут Вася!`
]
let time = new Date();
let timeHours = time.getHours() > 9 ? `${time.getHours()}` : `0${time.getHours()}`;
let id;
let timeMin = time.getMinutes() > 9 ? `${time.getMinutes()}` : `0${time.getMinutes()}`;
widget.addEventListener(`click`, () => {
  widget.classList.add(`chat-widget_active`);
   id = setTimeout(() => {
    messages.innerHTML += `
      <div class="message ">
      <div class="message__time">${timeHours}:${timeMin}</div>
      <div class="message__text">
        Может уже напишешь чё ?
      </div>
    </div>
      `
  }, 30000);
});
document.addEventListener(`keydown`, (e) => {
  
  if (e.key === `Enter`) {
    if (textMessageClient.value !== ``) {
      messages.innerHTML += `
    <div class="message message_client">
    <div class="message__time">${timeHours}:${timeMin}</div>
    <div class="message__text">
      ${textMessageClient.value}
    </div>
  </div>
    `;
      textMessageClient.value = ``;
      setTimeout(() => {
        messages.innerHTML += `
      <div class="message ">
      <div class="message__time">${timeHours}:${timeMin}</div>
      <div class="message__text">
        ${textMessage[Math.floor(Math.random() * textMessage.length)]}
      </div>
    </div>
      `
      }, 1000);
    }
  }
  messages.scrollIntoView(false);
  
  clearTimeout(id);
});