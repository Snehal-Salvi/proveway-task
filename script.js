document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card"); // Select all card elements
  const radioButtons = document.querySelectorAll('input[name="offer"]'); // Select all radio buttons

  cards.forEach((card) => {
    // Loop through each card
    card.addEventListener("click", (event) => {
      // Add a click event listener to each card

      // If the click is inside the card content or a dropdown, do nothing
      if (
        event.target.closest(".card-content") ||
        event.target.closest(".dropdown")
      ) {
        return;
      }

      // Close the content of all cards except the clicked one
      cards.forEach((c) => {
        if (c !== card) {
          c.querySelector(".card-content").classList.remove("show");
        }
      });

      // Uncheck all radio buttons
      radioButtons.forEach((radio) => (radio.checked = false));

      // Toggle the visibility of the content for the clicked card
      const content = card.querySelector(".card-content");
      content.classList.toggle("show");

      // Check the radio button of the clicked card
      const radioButton = card.querySelector('input[name="offer"]');
      radioButton.checked = true;
    });
  });
});
