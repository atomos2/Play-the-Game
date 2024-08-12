function choice1(option) {
    if (option === 1) {
        document.getElementById('story-text').innerText = "You chose the path with roses 🌹. You hear a songbird singing 🎶. What do you do?";
        document.getElementById('choices').innerHTML = `
            <button onclick="question1(1)">Follow the songbird 🐦</button>
            <button onclick="question1(2)">Pick a rose 🌹</button>
        `;
    } else {
        document.getElementById('story-text').innerText = "You chose the path with tulips 🌷. You see a butterfly fluttering by 🦋. What do you do?";
        document.getElementById('choices').innerHTML = `
            <button onclick="question2(1)">Follow the butterfly 🦋</button>
            <button onclick="question2(2)">Smell the tulips 🌷</button>
        `;
    }
}

function question1(choice) {
    if (choice === 1) {
        document.getElementById('story-text').innerText = "You follow the songbird and find a hidden bench under a tree. What do you do?";
        document.getElementById('choices').innerHTML = `
            <button onclick="finalChoiceWithLetter()">Sit on the bench 🌳</button>
            <button onclick="finalChoice(2)">Look around the tree 🌲</button>
        `;
    } else {
        document.getElementById('story-text').innerText = "You pick a rose and it opens up to reveal a small note. What do you do?";
        document.getElementById('choices').innerHTML = `
            <button onclick="finalChoice(3)">Read the note 📜</button>
            <button onclick="finalChoice(4)">Keep the rose 🌹</button>
        `;
    }
}

function question2(choice) {
    if (choice === 1) {
        document.getElementById('story-text').innerText = "You follow the butterfly and it leads you to a hidden garden with a small pond. What do you do?";
        document.getElementById('choices').innerHTML = `
            <button onclick="finalChoice(5)">Sit by the pond 🏞️</button>
            <button onclick="finalChoice(6)">Dip your toes in the water 💧</button>
        `;
    } else {
        document.getElementById('story-text').innerText = "You smell the tulips and feel a gentle breeze. A small box appears nearby. What do you do?";
        document.getElementById('choices').innerHTML = `
            <button onclick="finalChoice(7)">Open the box 🎁</button>
            <button onclick="finalChoice(8)">Sit among the tulips 🌷</button>
        `;
    }
}

function finalChoiceWithLetter() {
    document.getElementById('story-text').innerText = "You sit on the bench, and suddenly a letter appears before you. What do you do?";
    document.getElementById('choices').innerHTML = `
        <button onclick="revealMessage()">Open the letter ✉️</button>
    `;
}

function revealMessage() {
    document.getElementById('story-text').classList.add('hidden');
    document.getElementById('choices').classList.add('hidden');
    document.getElementById('final-message').innerText = "You open the letter and read, 'I love you more than words can say ❤️.'";
    document.getElementById('final-message').classList.remove('hidden');
}

function finalChoice(option) {
    document.getElementById('story-text').classList.add('hidden');
    document.getElementById('choices').classList.add('hidden');

    let finalMessage = '';

    switch(option) {
        case 2:
            finalMessage = "As you look around the tree, you find a heart-shaped carving with the words, 'I love you ❤️.'";
            break;
        case 3:
            finalMessage = "You read the note and it says, 'I love you more than words can say ❤️.'";
            break;
        case 4:
            finalMessage = "You keep the rose close to your heart and feel a warm sensation. The rose whispers, 'I love you ❤️.'";
            break;
        case 5:
            finalMessage = "You sit by the pond and watch the reflections. The water forms the words, 'I love you ❤️.'";
            break;
        case 6:
            finalMessage = "As you dip your toes in the water, you feel a gentle caress, and the words, 'I love you ❤️,' appear on the surface.";
            break;
        case 7:
            finalMessage = "You open the box and find a beautiful locket inside. When you open it, a note says, 'I love you ❤️.'";
            break;
        case 8:
            finalMessage = "You sit among the tulips, and a breeze carries the scent of love. A soft voice says, 'I love you ❤️.'";
            break;
    }

    document.getElementById('final-message').innerText = finalMessage;
    document.getElementById('final-message').classList.remove('hidden');
}
