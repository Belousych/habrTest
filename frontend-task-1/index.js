(function () {
  const app = document.getElementById("app");
  const timersElement = document.getElementById("timers");
  const timeInputElement = document.getElementById("time-input");
  const addTimerButtonElement = document.getElementById("add-timer");

  const createTimer = (duration) => {
    let currentTime = duration;
    const timerElement = document.createElement("li");
    timerElement.className = "timer";

    const timeElement = document.createElement("span");
    timeElement.className = "time";
    timeElement.textContent = currentTime;

    const removeButton = document.createElement("button");
    removeButton.className = "button button_remove";
    removeButton.textContent = "Удалить";

    timerElement.appendChild(timeElement);
    timerElement.appendChild(removeButton);
    timersElement.appendChild(timerElement);

    const removeTimer = () => {
      clearInterval(timerId);
      timerElement.remove();
    };

    const timerId = setInterval(() => {
      currentTime--;
      timeElement.textContent = currentTime;
      if (currentTime === 0) {
        removeTimer();
      }
    }, 1000);

    removeButton.addEventListener("click", () => {
      removeTimer();
    });
  };

  addTimerButtonElement.addEventListener("click", () => {
    const duration = timeInputElement.value;
    if (duration > 0) {
      createTimer(duration);
      timeInputElement.value = "";
    } else {
      alert("Введите корректное время");
    }
  });
})();
