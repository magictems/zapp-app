// // Background Animation - Floating Hearts
// const floatingBackground = document.querySelector(".floating-background");

// function createFloatingHeart() {
//   const heart = document.createElement("div");
//   heart.classList.add("floating-heart");
//   heart.style.left = Math.random() * 100 + "vw";
//   heart.style.animationDuration = Math.random() * 3 + 3 + "s";
//   floatingBackground.appendChild(heart);

//   setTimeout(() => heart.remove(), 5000);
// }

// setInterval(createFloatingHeart, 100);

// const loveMessages = [
//   "I’ve been thinking about you a lot, and I just wanted to take a moment to say how much I love you. I feel so lucky to have you in my life. You bring so much joy and warmth, and I can’t help but smile every time I think of you.",
//   "I love the simple things we do together, the quiet talks, the shared smiles. These are the moments that remind me of you always.",
//   "Sometimes, I don’t need words to express how much I care. Just being with you is all I need to feel completely content and happy.",
//   "I miss the little things, ❤️ the way we laugh together, the way you look at me, the simple comfort of just being near you. Can’t wait to see you again.",
//   "I wish I could steal a kiss from you right now, just to feel that spark, that warmth, that makes everything else fade away.",
//   "Your touch lingers in my mind, and all I want is to be closer to you, to feel your hands on me, and that gentle kiss that makes everything else melt away.",
//   "You have no idea how much I crave your touch. I just want to be close to you and feel every moment, every kiss, like it's our first.",
// ];

// const dynamicLoveMessage = document.getElementById("dynamic-love-message");
// const randomLoveMessage =
//   loveMessages[Math.floor(Math.random() * loveMessages.length)];
// dynamicLoveMessage.innerHTML = `
//   <strong style="font-size: 0.9em; color: #e63946;">MY LOVE 😍❤️</strong>
//   <p>${randomLoveMessage}</p>
//   <strong style="font-size: 0.7em; color: black; display: block;  text-align: center; margin-top: 10px;">I LOVE YOU SO CALLUM ❤️</strong>
// `;

// const envelopeContainer = document.querySelector(".envelope-container");
// const actionButton = document.querySelector(".action-button");

// actionButton.addEventListener("click", () => {
//   envelopeContainer.classList.toggle("envelope-flap");
// });
const floatingBackground = document.querySelector(".floating-background");

function createFloatingRose() {
  const rose = document.createElement("div");
  rose.classList.add("floating-rose");
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = Math.random() * 3 + 3 + "s";
  floatingBackground.appendChild(rose);

  setTimeout(() => rose.remove(), 5000);
}

setInterval(createFloatingRose, 300);

const loveMessages = [
  "I’ve been thinking about you a lot, and I just wanted to take a moment to say how much I love you. I feel so lucky to have you in my life. You bring so much joy and warmth, and I can’t help but smile every time I think of you.",
  "I love the simple things we do together, the quiet talks, the shared smiles.💜 These are the moments that remind me of you always.",
  "Sometimes, I don’t need words to express how much I care. Just being with you is all I need to feel completely content and happy.",
  "I miss the little things, ❤️ the way we laugh together, the way you look at me, the simple comfort of just being near you. Can’t wait to see you again💜.",
  "I wish I could steal a kiss from you right now, just to feel that spark, that warmth, that makes everything else fade away.",
  "Your touch lingers in my mind, and all I want is to be closer to you,💜 to feel your hands on me, and that gentle kiss that makes everything else melt away.",
  "You have no idea how much I crave your touch. I just want to be close to you and feel every moment, every kiss, like it's our first.",
  "There’s a softness in the way I feel for you, one that doesn’t need grand gestures or loud words. It’s just calm and steady, like a quiet stream. I care about you, and I hope you feel it too.",
  "You have this way of staying in my thoughts, even when I’m not trying. 💜 I guess that’s what caring feels like, gentle, steady, and always present. Just wanted you to know you’re loved 💜.",
  "My dearest love, words cannot express the depth of my feelings for you. You are the light that brightens my darkest days, and the reason I look forward to every tomorrow. Each moment with you feels like a treasure, and I am endlessly grateful for your love.",
  "To the one who holds my heart, I want you to know that my love for you knows no bounds. You inspire me, support me, and fill my life with joy. Every day I spend with you is a beautiful chapter in our love story, and I can't wait for the many more to come.",
  "My sweet darling, you are my greatest gift and my constant source of happiness. Your kindness, your laughter, and your love have made my life infinitely better. With you by my side, I feel like I can conquer anything. I love you now and forever.",
  "I don’t say this enough, but you are my greatest gift. With you, life feels lighter, brighter, and more meaningful. Your strength inspires me, your kindness moves me, and your love completes me. Thank you for being my peace, my protector, and my partner in everything. I’m so grateful for the moments we’ve shared and the ones we’ve yet to create.",
  "Beloved, there is no one else in this world who could ever take your place in my heart. You are my everything, my partner, my confidant, my love. I promise to cherish and adore you with every fiber of my being for all the days of my life.",
  "My love, when I look into your eyes, I see the most beautiful soul I have ever known. You have brought so much love and light into my life, and I am eternally thankful for you. I am so lucky to call you mine.",
];

const envelopeContainer = document.querySelector(".envelope-container");
const actionButton = document.querySelector(".action-button");
const dynamicLoveMessage = document.getElementById("dynamic-love-message");

function showRandomLoveMessage() {
  const randomLoveMessage =
    loveMessages[Math.floor(Math.random() * loveMessages.length)];
  dynamicLoveMessage.innerHTML = `
    <strong style="font-size: 0.9em; color: #e63946;">HEY PAPPY 😍❤️</strong>
    <p>${randomLoveMessage}</p>
    <strong style="font-size: 0.7em; color: black; display: block; text-align: center; margin-top: 10px;">I LOVE YOU SO BABY ❤️</strong>
  `;
  dynamicLoveMessage.style.display = "block";
}

actionButton.addEventListener("click", () => {
  envelopeContainer.classList.toggle("envelope-flap");

  showRandomLoveMessage();
});
