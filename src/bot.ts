import { Client, LocalAuth } from "whatsapp-web.js";
import * as qrcode from "qrcode-terminal";
import { handleCommand } from "./utils/commandHandler";

// Inisialisasi client
const client = new Client({
  restartOnAuthFail: true,
  webVersionCache: {
    type: "remote",
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2410.1.html",
  },
  puppeteer: {
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--single-process",
      "--disable-gpu",
    ],
  },
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
  console.log("Scan QR Code di atas menggunakan WhatsApp!");
});

client.on("ready", () => {
  console.log("Bot telah berhasil terhubung!");
});

client.on("message", (message) => {
  handleCommand(client, message);
});

client.initialize();
