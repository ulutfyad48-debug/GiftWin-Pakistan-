// =====================================================================
// MONTHLY LUCKY DRAW SETTINGS
// Change ONLY the settings in this file every month.
// You do NOT need to edit index.html â€” ever, for normal monthly updates.
// =====================================================================

const LUCKY_DRAW_CONFIG = {

    // ---------------------------------------------------------------
    // 1. MONTH NAME
    // Shown in the hero section and inside the WhatsApp message.
    // Example: "September 2026" -> "October 2026"
    // ---------------------------------------------------------------
    monthName: "September 2026",

    // ---------------------------------------------------------------
    // 2. REGISTRATION STATUS
    // true  = form is shown, people can register
    // false = form is hidden, a "closed" message is shown instead
    // ---------------------------------------------------------------
    registrationOpen: true,

    // ---------------------------------------------------------------
    // 3. DRAW DATE
    // Shown as the "Draw / Gift Dispatch Date" on the page.
    // Just type it exactly how you want it displayed.
    // ---------------------------------------------------------------
    drawDate: "1 October 2026",

    // ---------------------------------------------------------------
    // 4. TITLE & SUBTITLE (Urdu, shown in the hero section)
    // ---------------------------------------------------------------
    title: "Ù…Ø§ÛØ§Ù†Û Ù„Ú©ÛŒ ÚˆØ±Ø§",
    subtitle: "Ø§Ø³ Ù…Ø§Û Ú©ÛŒ Ø±Ø¬Ø³Ù¹Ø±ÛŒØ´Ù† Ø´Ø±ÙˆØ¹ ÛÙˆ Ú†Ú©ÛŒ ÛÛ’!",

    // ---------------------------------------------------------------
    // 5. REWARDS
    // Add, remove, or rename as many rewards as you like.
    // The website automatically creates one card per reward â€” you are
    // not limited to any fixed number.
    //
    // For each reward:
    //   name        -> Urdu or English name shown on the card (required)
    //   image       -> path to an image, e.g. "assets/laptop.jpg"
    //                  Leave as "" to show a default gift icon instead.
    //   description -> short line shown under the name (optional, can be "")
    // ---------------------------------------------------------------
    rewards: [
        { name: "Laptop",          image: "", description: "Special Monthly Reward" },
        { name: "Mobile Charger",  image: "", description: "Special Monthly Reward" },
        { name: "Mobile Cable",    image: "", description: "Special Monthly Reward" },
        { name: "Keyboard",        image: "", description: "Special Monthly Reward" },
        { name: "Mouse",           image: "", description: "Special Monthly Reward" }
    ],

    // ---------------------------------------------------------------
    // 6. WHATSAPP NUMBER
    // Country code + number, no "+", no spaces, no leading zero.
    // This is where the completed registration message will be sent.
    // ---------------------------------------------------------------
    whatsappNumber: "923125540048"
};