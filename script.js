let count = 0;

// Находим элементы
const button = document.getElementById('click-button');
const counterDisplay = document.getElementById('counter');

// Добавляем обработчик события 'click' на кнопку
button.addEventListener('click', function() {
    count++; // Увеличиваем счётчик
    counterDisplay.textContent = count; // Обновляем текст в элементе с id 'counter'
});

// Элементы формы
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const submitBtn = document.getElementById('submit-btn');

// Регулярное выражение для валидации email
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Валидация email в реальном времени
emailInput.addEventListener('input', function() {
    const emailValue = emailInput.value;

    if (!emailPattern.test(emailValue)) {
        // Если email некорректен, показываем сообщение об ошибке и блокируем кнопку
        errorMessage.style.display = 'inline';
        submitBtn.disabled = true;
    } else {
        // Если email корректен, скрываем сообщение и разблокируем кнопку
        errorMessage.style.display = 'none';
        submitBtn.disabled = false;
    }
});

// Таймер для отсчета времени с момента загрузки страницы
let secondsElapsed = 0;
const timerDisplay = document.getElementById('timer');

// Функция для обновления таймера каждую секунду
setInterval(function() {
    secondsElapsed++;
    timerDisplay.textContent = secondsElapsed;
}, 1000);
