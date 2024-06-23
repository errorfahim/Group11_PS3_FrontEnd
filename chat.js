document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    const adminResponses = [
        "Hello! How can I assist you today?",
        "Sure, I can help with that.",
        "Please provide more details.",
        "I understand. Let me check that for you.",
        "Thank you for your patience.",
        "Is there anything else I can assist you with?",
        "Our vaccination center is open from 8:00 AM to 6:00 PM.",
        "Please visit our website for more information.",
        "You can book an appointment online.",
        "Have a great day!"
    ];

    const getRandomResponse = () => {
        return adminResponses[Math.floor(Math.random() * adminResponses.length)];
    };

    const addMessage = (text, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            chatInput.value = '';

            setTimeout(() => {
                const adminMessage = getRandomResponse();
                addMessage(adminMessage, 'admin');
            }, 1000);
        }
    });
});
