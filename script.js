// ─────────────────────────────────────────
// MENU DATA (unchanged, but alt text will be added dynamically)
// ─────────────────────────────────────────
const MENU = [
    {
        name: 'Custom Cakes', cat: 'pastry', tag: 'On Request',
        desc: 'Beautifully crafted custom cakes for any occasion. Available on request — limited slots apply.',
        img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80',
        alt: 'Elegant custom cake with floral decorations'
    },
    {
        name: 'Meat Pies', cat: 'pastry', tag: 'Pastry',
        desc: 'Golden flaky pastry filled with savory spiced meat. A classic Nigerian snack done right.',
        img: 'https://images.unsplash.com/photo-1613478223719-2ab802602347?w=500&q=80',
        alt: 'Golden brown meat pie on a rustic plate'
    },
    {
        name: 'Sausage Rolls', cat: 'pastry', tag: 'Pastry',
        desc: 'Crispy buttery rolls wrapped around seasoned sausage. Great for parties and snacking.',
        img: 'https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=500&q=80',
        alt: 'Freshly baked sausage rolls'
    },
    {
        name: 'Doughnuts', cat: 'pastry', tag: 'Pastry',
        desc: 'Soft fluffy doughnuts glazed or sugar-coated. Made fresh daily in various flavors.',
        img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80',
        alt: 'Glazed doughnuts with sprinkles'
    },
    {
        name: 'Chin Chin', cat: 'pastry', tag: 'Snack',
        desc: 'Crunchy golden fried dough snack — perfectly sweetened and addictive. A crowd favorite.',
        img: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500&q=80',
        alt: 'Bowl of crunchy chin chin snack'
    },
    {
        name: 'Cupcakes', cat: 'dessert', tag: 'Dessert',
        desc: 'Moist beautifully decorated cupcakes for every taste — perfect for gifts and celebrations.',
        img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=80',
        alt: 'Assorted decorated cupcakes'
    },
    {
        name: 'Parfait Cups', cat: 'dessert', tag: 'Dessert',
        desc: 'Creamy layered parfaits with fresh fruits, granola, and indulgent cream. A dessert to remember.',
        img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
        alt: 'Layered parfait with berries and granola'
    },
    {
        name: 'Small Chops', cat: 'catering', tag: 'Catering',
        desc: 'Assorted finger foods for events — spring rolls, samosas, puff puff & more.',
        img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80',
        alt: 'Variety of small chops on a platter'
    },
    {
        name: 'Jollof Rice', cat: 'catering', tag: 'Catering',
        desc: 'Rich flavorful Nigerian Jollof rice cooked to perfection — the heart of any Nigerian party.',
        img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80',
        alt: 'Nigerian jollof rice with plantains'
    },
    {
        name: 'Fried Chicken', cat: 'catering', tag: 'Catering',
        desc: 'Crispy well-seasoned fried chicken — juicy on the inside, perfectly golden on the outside.',
        img: 'https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=500&q=80',
        alt: 'Crispy fried chicken pieces'
    },
    {
        name: 'Spaghetti', cat: 'catering', tag: 'Catering',
        desc: 'Hearty well-seasoned Nigerian-style spaghetti — a filling favourite for all ages.',
        img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=80',
        alt: 'Nigerian-style spaghetti with vegetables'
    },
    {
        name: 'Food Trays', cat: 'catering', tag: 'Catering',
        desc: 'Custom food trays for events — complete balanced meals packaged with care and style.',
        img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80',
        alt: 'Catering food trays with various dishes'
    },
];

// ─────────────────────────────────────────
// RENDER MENU with alt tags and lazy loading
// ─────────────────────────────────────────
function renderMenu(filter) {
    const items = filter === 'all' ? MENU : MENU.filter(i => i.cat === filter);
    const grid = document.getElementById('menuGrid');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
    <div class="menu-card">
      <img src="${item.img}" alt="${item.alt || item.name}" loading="lazy">
      <div class="menu-card-body">
        <div class="menu-card-name">${escapeHtml(item.name)}</div>
        <div class="menu-card-desc">${escapeHtml(item.desc)}</div>
        <span class="menu-card-tag">${escapeHtml(item.tag)}</span>
      </div>
    </div>
  `).join('');
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function filterMenu(cat, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderMenu(cat);
}

// ─────────────────────────────────────────
// NAVIGATION (fixed: uses CSS class, responsive, close button)
// ─────────────────────────────────────────
function initNav() {
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('navLinks');
    const closeNavBtn = document.getElementById('closeNavBtn');
    
    if (!toggleBtn || !navLinks) return;
    
    function openNav() {
        navLinks.classList.add('nav-open');
        document.body.style.overflow = 'hidden';
    }
    
    function closeNav() {
        navLinks.classList.remove('nav-open');
        document.body.style.overflow = '';
    }
    
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navLinks.classList.contains('nav-open')) closeNav();
        else openNav();
    });
    
    if (closeNavBtn) closeNavBtn.addEventListener('click', closeNav);
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('nav-open')) closeNav();
    });
    
    // Close on window resize if desktop (optional: auto-close on >768px)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('nav-open')) {
            closeNav();
        }
    });
}

// ─────────────────────────────────────────
// AI CHAT (FULLY FIXED: no API key, keyword-based + WhatsApp fallback)
// Features: chat history limit, clear chat, typing indicator timeout, offline-ready
// ─────────────────────────────────────────
let chatOpen = false;
let chatBusy = false;
let chatHistory = []; // stores user + assistant messages (max 10 pairs)
let typingTimeout = null;

// Business info & responses
const BUSINESS_INFO = {
    brand: "Lisa Cakes & More",
    whatsapp: "+2347085950959",
    whatsappLink: "https://wa.me/2347085950959",
    motto: "Fresh • Delicious • Reliable",
    cakeSlots: "limited slots — book early via WhatsApp"
};

// Simple keyword-based response system (no API needed, works offline)
function getBotReply(userMessage) {
    const msg = userMessage.toLowerCase();
    
    // Greetings
    if (msg.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
        return `Hello! 👋 Welcome to ${BUSINESS_INFO.brand}. How can I help you today? You can ask about our cakes, pastries, catering, or get our WhatsApp number. 🎂`;
    }
    
    // WhatsApp / contact
    if (msg.match(/whatsapp|contact|phone|number|reach|customer care|support/)) {
        return `You can reach us on WhatsApp: <strong>${BUSINESS_INFO.whatsapp}</strong><br>👉 <a href="${BUSINESS_INFO.whatsappLink}" target="_blank" style="color:#d4a373;">Tap to chat on WhatsApp</a> 📱`;
    }
    
    // Pricing
    if (msg.match(/price|how much|cost|rate|quote|pricing|naira|₦/)) {
        return `Prices depend on quantity, size, and customization. 🍰 For an exact quote, please message us on WhatsApp: <strong>${BUSINESS_INFO.whatsapp}</strong> 🙏`;
    }
    
    // Custom cakes
    if (msg.match(/custom cake|birthday cake|wedding cake|celebration cake|special cake/)) {
        return `🎂 Our custom cakes are beautifully crafted but have <strong>${BUSINESS_INFO.cakeSlots}</strong>. To order or inquire, please WhatsApp us: ${BUSINESS_INFO.whatsapp}`;
    }
    
    // Catering / events
    if (msg.match(/catering|event|party|small chops|jollof|fried chicken|spaghetti|food tray/)) {
        return `We provide full event catering! 🍽️ From Small Chops to Jollof Rice and more. For a personalized quote, contact us on WhatsApp: ${BUSINESS_INFO.whatsapp}`;
    }
    
    // Pastries / menu items
    if (msg.match(/meat pie|sausage roll|doughnut|chin chin|cupcake|parfait/)) {
        return `All our pastries and desserts are made fresh daily! 😋 To place an order, please send a message via WhatsApp: ${BUSINESS_INFO.whatsapp}`;
    }
    
    // Ordering
    if (msg.match(/order|buy|purchase|delivery|pickup|how to order/)) {
        return `Ordering is easy! 🛍️ Simply send us a message on WhatsApp (${BUSINESS_INFO.whatsapp}) with your items, quantity, and delivery date. We'll get back to you ASAP.`;
    }
    
    // Thanks / goodbye
    if (msg.match(/thank|thanks|grateful|appreciate|bye|goodbye/)) {
        return `You're welcome! 💕 Feel free to reach out anytime. ${BUSINESS_INFO.brand} — ${BUSINESS_INFO.motto}`;
    }
    
    // Default fallback
    return `Thank you for your interest! 🙏 For specific orders or inquiries, please WhatsApp us at <strong>${BUSINESS_INFO.whatsapp}</strong>. We're happy to help! 🎂`;
}

function toggleChat() {
    chatOpen ? closeChat() : openChat();
}

function openChat() {
    chatOpen = true;
    const panel = document.getElementById('chatPanel');
    if (panel) panel.classList.add('open');
    setTimeout(() => {
        const input = document.getElementById('cInput');
        if (input) input.focus();
    }, 320);
}

function closeChat() {
    chatOpen = false;
    const panel = document.getElementById('chatPanel');
    if (panel) panel.classList.remove('open');
}

function clearChatHistory() {
    const msgs = document.getElementById('chatMsgs');
    if (msgs) msgs.innerHTML = '';
    chatHistory = [];
    // Add welcome message again
    addMsg('bot', `Hi there! 👋 I'm ${BUSINESS_INFO.brand} assistant. Ask me about our menu, custom cakes, catering, or get our WhatsApp contact. 🎂`);
}

function cResize(el) {
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 80) + 'px';
}

function cKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        cSend();
    }
}

function cChip(text) {
    const input = document.getElementById('cInput');
    if (input) input.value = text;
    if (!chatOpen) openChat();
    cSend();
}

function cScroll() {
    const msgs = document.getElementById('chatMsgs');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
}

function addMsg(role, html) {
    const msgs = document.getElementById('chatMsgs');
    if (!msgs) return;
    const row = document.createElement('div');
    row.className = 'cm' + (role === 'user' ? ' u' : '');
    const av = document.createElement('div');
    av.className = 'cav ' + (role === 'user' ? 'u' : 'b');
    av.textContent = role === 'user' ? '👤' : '🎂';
    const bub = document.createElement('div');
    bub.className = 'cb ' + (role === 'user' ? 'u' : 'b');
    bub.innerHTML = html;
    if (role === 'user') {
        row.appendChild(bub);
        row.appendChild(av);
    } else {
        row.appendChild(av);
        row.appendChild(bub);
    }
    msgs.appendChild(row);
    cScroll();
}

function showTyping() {
    removeTyping(); // remove existing first
    const msgs = document.getElementById('chatMsgs');
    if (!msgs) return;
    const row = document.createElement('div');
    row.className = 'cm';
    row.id = 'typingIndicator';
    const av = document.createElement('div');
    av.className = 'cav b';
    av.textContent = '🎂';
    const bub = document.createElement('div');
    bub.className = 'cb b tdots';
    bub.innerHTML = '<span></span><span></span><span></span>';
    row.appendChild(av);
    row.appendChild(bub);
    msgs.appendChild(row);
    cScroll();
}

function removeTyping() {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
}

async function cSend() {
    if (chatBusy) return;
    const inp = document.getElementById('cInput');
    if (!inp) return;
    const text = inp.value.trim();
    if (!text) return;
    
    inp.value = '';
    inp.style.height = 'auto';
    if (!chatOpen) openChat();
    
    addMsg('user', escapeHtml(text));
    chatHistory.push({ role: 'user', content: text });
    
    chatBusy = true;
    showTyping();
    
    // Clear any existing timeout
    if (typingTimeout) clearTimeout(typingTimeout);
    
    // Simulate realistic delay (300-800ms) then respond
    typingTimeout = setTimeout(() => {
        try {
            const reply = getBotReply(text);
            chatHistory.push({ role: 'assistant', content: reply });
            
            // Keep only last 10 exchanges (20 messages)
            if (chatHistory.length > 20) {
                chatHistory = chatHistory.slice(-20);
            }
            
            removeTyping();
            addMsg('bot', reply);
            chatBusy = false;
        } catch (err) {
            removeTyping();
            addMsg('bot', `Sorry, something went wrong. Please contact us on WhatsApp: ${BUSINESS_INFO.whatsapp} 💬`);
            chatBusy = false;
        }
        typingTimeout = null;
    }, 300 + Math.random() * 400);
}

// Expose functions globally (for inline onclick attributes)
window.renderMenu = renderMenu;
window.filterMenu = filterMenu;
window.toggleChat = toggleChat;
window.cSend = cSend;
window.cResize = cResize;
window.cKey = cKey;
window.cChip = cChip;
window.clearChatHistory = clearChatHistory;

// ─────────────────────────────────────────
// INITIALIZE EVERYTHING on DOM load
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Render menu
    renderMenu('all');
    
    // Setup navigation
    initNav();
    
    // Setup chat clear button listener
    const clearBtn = document.getElementById('clearChatBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearChatHistory);
    }
    
    // Add welcome message to chat if chat panel exists
    const chatMsgs = document.getElementById('chatMsgs');
    if (chatMsgs && chatMsgs.children.length === 0) {
        addMsg('bot', `Hi there! 👋 I'm ${BUSINESS_INFO.brand} assistant. Ask me about our menu, custom cakes, catering, or get our WhatsApp contact. 🎂`);
    }
    
    // Optional: Add CSS classes for responsive nav if not already present in stylesheet
    // This ensures mobile nav works even if CSS missing
    const style = document.createElement('style');
    style.textContent = `
        .menu-toggle { display: none; background: none; border: none; font-size: 28px; cursor: pointer; color: var(--brown); }
        @media (max-width: 768px) {
            .menu-toggle { display: block; }
            .nav-links { display: none; }
            .nav-links.nav-open { display: flex !important; flex-direction: column; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: var(--cream); padding: 80px 24px 24px; z-index: 200; gap: 24px; overflow-y: auto; }
            .nav-links.nav-open a { font-size: 1.4rem; padding: 12px 0; border-bottom: 1px solid var(--border); }
            .close-nav-btn { position: absolute; top: 20px; right: 24px; background: none; border: none; font-size: 32px; cursor: pointer; color: var(--brown); }
        }
        @media (min-width: 769px) {
            .close-nav-btn { display: none; }
            .nav-links { display: flex !important; }
        }
        .cm .cb a { color: var(--gold); text-decoration: underline; }
        .cm .cb a:hover { opacity: 0.8; }
    `;
    document.head.appendChild(style);
    
    // Ensure close button exists in nav if not already in HTML (but HTML likely has it; safe)
    const navLinksDiv = document.getElementById('navLinks');
    if (navLinksDiv && !navLinksDiv.querySelector('.close-nav-btn')) {
        const closeSpan = document.createElement('button');
        closeSpan.className = 'close-nav-btn';
        closeSpan.innerHTML = '✕';
        closeSpan.setAttribute('aria-label', 'Close menu');
        closeSpan.onclick = () => {
            document.getElementById('navLinks')?.classList.remove('nav-open');
            document.body.style.overflow = '';
        };
        navLinksDiv.insertBefore(closeSpan, navLinksDiv.firstChild);
    }
});