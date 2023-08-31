const drinkButton = document.getElementById('drinkButton');
const reminder = document.querySelector('.reminder');

let startTime;
let timerInterval;

drinkButton.addEventListener('click', () => {
if (!startTime) {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000); // Atualiza a cada segundo (1000ms)
    reminder.innerHTML = '<p>Beba água...</p>';
    drinkButton.textContent = 'Parei de beber';
} else {
    clearInterval(timerInterval);
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Tempo em segundos
    reminder.innerHTML = `<p>Tempo que você bebeu: ${elapsedTime} segundos</p>`;
    startTime = null;
    drinkButton.textContent = 'Já bebi água';
}
});

function updateTimer() {
const currentTime = Date.now();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Tempo em segundos
reminder.innerHTML = `<p>Beba água... Tempo: ${elapsedTime} segundos</p>`;
}
