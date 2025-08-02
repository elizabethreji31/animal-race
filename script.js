const animals = [
  { id: "turtle", name: "Turtle", emoji: "🐢" },
  { id: "rabbit", name: "Rabbit", emoji: "🐇" },
  { id: "snail", name: "Snail", emoji: "🐌" }
];

function startRace() {
  const winnerDiv = document.getElementById("winner");
  winnerDiv.textContent = "Racing...";

  animals.forEach(animal => {
    const el = document.getElementById(animal.id);

    // Reset position and remove flip
    el.style.left = "0%";
    el.classList.remove("right-facing");

    // Force reflow to restart CSS transition
    void el.offsetWidth;

    // Flip emoji to face right
    el.classList.add("right-facing");

    // Move to a random distance between 10% and 90%
    const distance = Math.random() * 80 + 10; // %
    el.style.left = `${distance}%`;
  });

  // After 3.5 seconds, pick a random winner and show a weird reason
  setTimeout(() => {
    const winner = animals[Math.floor(Math.random() * animals.length)];
    const weirdReasons = [
      "It tripped but landed on the finish line.",
      "It bribed the referee (we don’t ask how).",
      "It believed in itself more.",
      "Everyone else got distracted.",
      "The moon was in its favor.",
      "Because... destiny."
    ];
    const reason = weirdReasons[Math.floor(Math.random() * weirdReasons.length)];

    winnerDiv.innerHTML = `🏆 Winner: ${winner.emoji} <strong>${winner.name}</strong>!<br><em>${reason}</em>`;
  }, 3500);
}
