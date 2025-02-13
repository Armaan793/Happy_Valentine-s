document.getElementById("submit-answer").addEventListener("click", function() {
  const userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();
  const correctAnswer = "smoking";

  const feedbackBox = document.getElementById("feedback-box");
  const correctSound = document.getElementById("correct-sound");
  const incorrectSound = document.getElementById("incorrect-sound");

  // Check if the answer is correct
  if (userAnswer === correctAnswer.toLowerCase()) {
    feedbackBox.textContent = "Correct! Yes, although it used to be the case, but not anymore. Since the day you stepped into my life, I've yet to say anything BAD about smoking!";
    feedbackBox.className = "correct-answer";
    correctSound.play();  // Play correct sound effect

    // Additional animation or effects could be added here.
  } else {
    feedbackBox.textContent = "Try again!";
    feedbackBox.className = "incorrect-answer";
    incorrectSound.play();  // Play incorrect sound effect
  }
});
