document.getElementById("submit-answer").addEventListener("click", function() {
  const userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();
  const correctAnswer = "mannie"; // Updated correct answer

  const feedbackBox = document.getElementById("feedback-box");
  const correctSound = document.getElementById("correct-sound");
  const incorrectSound = document.getElementById("incorrect-sound");

  // Check if the answer is correct
  if (userAnswer === correctAnswer.toLowerCase()) {
    feedbackBox.textContent = "Correct! Yes, it's Mannie, the one I love the most!";
    feedbackBox.className = "correct-answer";
    correctSound.play();  // Play correct sound effect

    // Additional animation or effects could be added here.
  } else {
    feedbackBox.textContent = "Try again!";
    feedbackBox.className = "incorrect-answer";
    incorrectSound.play();  // Play incorrect sound effect
  }
});
