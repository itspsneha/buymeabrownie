document.getElementById('buyButton').addEventListener('click', () => {
    const messages = [
        "🎉 Brownie points unlocked!",
        "🍫 You're the sweetest!",
        "😂 Calories don't count if we're in this together!",
        "🤗 Virtual brownie hug coming your way!",
        "😍 Chocolate happiness activated!"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').innerText = messages[randomIndex];
});
