// =====================================================================
// MONTHLY LUCKY DRAW SETTINGS
// Change ONLY the settings in this file every month.
// You do NOT need to edit index.html — ever, for normal monthly updates.
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
    title: "ماہانہ لکی ڈرا",
    subtitle: "اس ماہ کی رجسٹریشن شروع ہو چکی ہے!",

    // ---------------------------------------------------------------
    // 5. REWARDS
    // Add, remove, or rename as many rewards as you like.
    // The website automatically creates one card per reward — you are
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
    whatsappNumber: "923125540048",

    // ---------------------------------------------------------------
    // 7. FALLBACK CITY LIST
    // This website is fully static (no backend), so it tries to load
    // the live city list from the PostEx API first. If that request
    // fails for any reason (no internet, CORS block, API downtime),
    // it automatically switches to this list instead, so the form
    // never breaks. Edit this list any time to keep it up to date.
    // ---------------------------------------------------------------
    fallbackCities: [
        "Peshawar", "Islamabad", "Rawalpindi", "Lahore", "Karachi",
        "Multan", "Faisalabad", "Sialkot", "Gujranwala", "Hyderabad",
        "Quetta", "Bahawalpur", "Sargodha", "Sukkur", "Abbottabad"
    ]
};

// =====================================================================
// POSTEX API SETTINGS — do not need to change monthly
// =====================================================================

// -----------------------------------------------------------------------
// IMPORTANT SECURITY NOTE (please read):
// This is a static, browser-only website with no backend server.
// Any value placed here in JavaScript can technically be viewed by any
// visitor (e.g. via "View Page Source" or browser dev tools).
// For a fully secure, hidden API token, you would need a backend/serverless
// proxy to hold the token instead. Since this project must stay static (no
// server, no Node.js, no database, as requested), the token below should be
// treated as visible to the public. Only use a token here that you are
// comfortable being publicly viewable, and rotate it periodically.
// -----------------------------------------------------------------------
const POSTEX_API_TOKEN = "YmU3Nzg4Y2Y1YzAzNDc3YzgxMzdlMzA0Yjc1MGNjMDk6Y2IzM2ViZTI2NGE4NDVhNTlmYzczOGY3Njg2OTA4Y2Y=";

const POSTEX_API_URL = "https://api.postex.pk/services/integration/api/order/v2/get-operational-city?operationalCityType=Delivery";
