const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // This serves your HTML file

// --- LOGIN ENDPOINT ---
app.post('/api/login', (req, res) => {
    const { operatorId, encryptionKey } = req.body;
    
    // Replace this with your actual DB check
    if (operatorId === "ADMIN" && encryptionKey === "V_SENTINEL_2026") {
        console.log(`[ACCESS GRANTED]: ${operatorId}`);
        res.status(200).json({ status: "AUTHORIZED", token: "KS-ALPHA-99" });
    } else {
        console.log(`[ACCESS DENIED]: ${operatorId}`);
        res.status(401).json({ status: "UNAUTHORIZED", error: "Invalid Credentials" });
    }
});

// --- SIGN UP ENDPOINT ---
app.post('/api/signup', (req, res) => {
    const { fullName, email } = req.body;
    console.log(`[NEW RECRUIT REQUEST]: ${fullName} (${email})`);
    
    // Logic to save to your database goes here
    res.status(201).json({ status: "REQUEST_SENT", message: "Clearance Pending" });
});

app.listen(PORT, () => {
    console.log(`KNOCKSSTUDIOS Server running on http://localhost:${PORT}`);
});
