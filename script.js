// MENU DATA (CLEAN + VERIFIED)
const menu = [
  {
    name: "Meat Pie",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423"
  },
  {
    name: "Cupcakes",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3"
  },
  {
    name: "Parfait",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777"
  }
];

// RENDER MENU
const grid = document.getElementById("menuGrid");

menu.forEach(item => {
  grid.innerHTML += `
    <div class="card">
      <img src="${item.img}">
      <h4>${item.name}</h4>
    </div>
  `;
});

// SIMPLE AI CHAT (NO ERRORS)
function botReply(text) {
  text = text.toLowerCase();

  if (text.includes("price")) {
    return "Prices depend on order. Chat us on WhatsApp: 07085950959";
  }

  if (text.includes("cake")) {
    return "Custom cakes available 🎂. Limited slots!";
  }

  if (text.includes("menu")) {
    return "We sell cakes, pastries, and catering food.";
  }

  return "Ask about menu, prices, or cakes 😊";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value;
  if (!userText) return;

  chatBox.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  const reply = botReply(userText);
  chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;

  input.value = "";
}