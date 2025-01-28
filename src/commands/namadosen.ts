import { Client, Message } from "whatsapp-web.js";

// Daftar nama dosen
const daftarDosen: string[] = [
  "Mahmuda Saputra, S.Kom., M.Korr",
  "Husna Gemasih, S.Inf., M.Cs",
  "Amru Bin AS, S.Pd., M.Pd",
  "Rayuwati, S.Kom., M.Kom",
  "Ira Zulfa, S.T., M.Cs",
  "Hendri Syahputra, S.T., M.T",
  "Richasanty Septima, S.Si., M.Mat",
  "Ridha Yuniara, S.Pd., M.Pd",
  "Drs. Amna, MIT",
  "Rahmadi Asri, S.Inf., M.Kom",
  "Muhammad Ihsan, S.T., M.T",
  "Lenawati Asry, S.Ag., M.A",
  "Aramida, S.H., M.H",
  "Ratna Dewi, S.Kom., M.Kom",
];

export const namadosen = (client: Client, message: Message): void => {
  // Format daftar nama dosen menjadi string
  const daftarDosenMessage = `
👨‍🏫 *Daftar Nama Dosen*:
${daftarDosen.map((dosen, index) => `${index + 1}. ${dosen}`).join("\n")}
  `;

  // Kirim pesan ke pengguna
  client.sendMessage(message.from, daftarDosenMessage);
};
