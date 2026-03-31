let currentEmoji = '';

async function loadNewQuestion() {
    const response = await fetch('/next-question');
    const data = await response.json();
    
    currentEmoji = data.emoji;
    document.getElementById('emoji-display').innerText = data.emoji;
    
    const container = document.getElementById('options-container');
    container.innerHTML = data.options.map(opt => `
        <label>
            <input type="radio" name="emoji-guess" value="${opt}" required> ${opt}
        </label>
    `).join('');
}

document.getElementById('guess-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const selected = document.querySelector('input[name="emoji-guess"]:checked').value;

    const response = await fetch('/guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guess: selected, emojiChar: currentEmoji })
    });

    const result = await response.json();
    const feedback = document.getElementById('feedback');
    
    if (result.correct) {
        feedback.innerText = " Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "❌ Wrong! Try again.";
        feedback.style.color = "red";
    }

    document.getElementById('score').innerText = result.score;
    setTimeout(loadNewQuestion, 1500); // Wait a bit 
});

loadNewQuestion(); // Start the game