// KNOCKSSTUDIOS CORE LOGIC
let userCoins = 2000; // Default for New Operators
let dailyAds = 7;

function checkIn() {
    userCoins += 25;
    alert("DAILY_CHECK_IN_SUCCESS: +25 COINS");
    updateUI();
}

function watchAd() {
    if (dailyAds > 0) {
        userCoins += 15;
        dailyAds--;
        alert("AD_VIEW_COMPLETE: +15 COINS");
        updateUI();
    } else {
        alert("MAX_ADS_REACHED: TRY AGAIN IN 24H");
    }
}

function processRender() {
    if (userCoins >= 1000) {
        userCoins -= 1000;
        alert("COINS_DEDUCTED: RENDER_INITIATED_9K");
        // Trigger Engine Render Here
        updateUI();
    } else {
        alert("INSUFFICIENT_FUNDS: WATCH ADS OR SUBSCRIBE");
    }
}

function updateUI() {
    document.getElementById('coin-balance').innerText = userCoins.toLocaleString();
}
