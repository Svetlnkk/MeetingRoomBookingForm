const form = document.getElementById("booking-form");
const clearButton = document.getElementById("clear-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedTower = document.getElementById("tower-select").value;
  const selectedFloor = document.getElementById("floor-select").value;
  const selectedRoom = document.getElementById("room-select").value;
  const selectedDate = document.getElementById("date-picker").value;
  const selectedTime = document.getElementById("time-picker").value;
  const comment = document.getElementById("comment-input").value;

  const formData = {
    tower: selectedTower,
    floor: selectedFloor,
    room: selectedRoom,
    date: selectedDate,
    time: selectedTime,
    comment: comment,
  };

  console.log(JSON.stringify(formData));
});

clearButton.addEventListener("click", () => {
  form.reset();
});