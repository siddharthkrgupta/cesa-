const fs = require("fs");
const path = require("path");
const admin = require("firebase-admin");

const keyPath = path.join(__dirname, "firebase-key.json");

// Decode the base64 string and save the key as a file, if it doesn't exist yet
if (!fs.existsSync(keyPath)) {
  const base64 = process.env.FIREBASE_KEY_BASE64;
  if (!base64) {
    console.error("❌ FIREBASE_KEY_BASE64 env variable is missing");
    process.exit(1);
  }
  const buffer = Buffer.from(base64, "base64");
  fs.writeFileSync(keyPath, buffer);
}

admin.initializeApp({
  credential: admin.credential.cert(require(keyPath)),
});

module.exports = admin;
