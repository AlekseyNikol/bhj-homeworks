const chatWidgetSideText = document.querySelector('.chat-widget__side-text');
console.log(chatWidgetSideText);

chatWidgetSideText.onclick = function () {
   const chatWidget = document.querySelector('.chat-widget');
   chatWidget.classList.add('chat-widget_active');
};

const chatWidgetInput = document.getElementById('chat-widget__input');
