import { Client, Message } from "whatsapp-web.js";

// Jadwal mata kuliah per hari
const jadwalMataKuliah: Record<string, string[]> = {
  senin: [
    "08:00 - TI-5511: Digital Forensic (Praktikum) - Dosen: Mahmuda Saputra, S,fiom., M.Korr - Semester: V - Kelas A - LAB 01",
    "10:30 - TI-3232: Analisis Perancangan Sistem Informasi (Teori) - Dosen: Husna Gemasih, S.Inf., M.Cs - Semester: III - Kelas A - LAB 02",
    "13:00 - UGP-104: Bahasa Inggris 1 - Dosen: Amru Bin AS, S.Pd., M.Pd - Semester: I - Kelas A - R 05",
    "15:00 - TI-5522: Komunikasi Data - Dosen: Rayuwati, S.Kom., M.Korr - Semester: V - Kelas A - LAB 02",
  ],
  selasa: [
    "08:00 - TI-5542: Pemrograman Berorientasi Objek Lanjutan (Praktikum) - Dosen: Hendri Syahputra, S.T., M.T - Semester: V - Kelas A - LAB 01",
    "10:30 - TI-3211: Statistik Penelitian (Praktikum) - Dosen: Ridha Yuniara, S.Pd., M.Pd - Semester: III - Kelas A - LAB 02",
    "13:00 - TI-3293: Kecerdasan Buatan - Dosen: Drs. Amna, MIT - Semester: III - Kelas A - LAB 01",
  ],
  rabu: [
    "08:00 - TI-3241: Analisis Perancangan Sistem Informasi (Praktikum) - Dosen: Husna Gemasih, S.Inf., M.Cs - Semester: III - Kelas A - LAB 01",
    "10:30 - TI-1031: Algoritma dan Pemrograman (Praktikum) - Dosen: Rahmadi Asri, S.Inf., M.Kom - Semester: I - Kelas A - LAB 01",
    "13:00 - TI-3282: Pemrograman Web Lanjutan (Praktikum) - Dosen: Hendri Syahputra, S.T., M.T - Semester: III - Kelas A - LAB 01",
  ],
  kamis: [
    "08:00 - TI-1062: Struktur Basis Data (Praktikum) - Dosen: Ratna Dewi, S.Kom., M.Kom - Semester: I - Kelas A - LAB 01",
    "10:30 - TI-7753: Teknologi Open Source - Dosen: Drs. Amna, MIT - Semester: VII - Kelas A - LAB 01",
    "13:00 - TI-7763: Teori Bahasa dan Otomata - Dosen: Drs. Amna, MIT - Semester: VII - Kelas A - LAB 01",
  ],
  jumat: ["Libur! Tidak ada mata kuliah hari ini. 🏖️"],
  sabtu: [
    "08:00 - TI-1022: Logika Informatika - Dosen: Rayuwati, S.Kom., M.Kom - Semester: I - Kelas D - R 06",
    "10:30 - TI-3202: Statistik Penelitian (Teori) - Dosen: Ridha Yuniara, S.Pd., M.Pd - Semester: III - Kelas D - LAB 01",
    "13:00 - TI-3252: Interaksi Manusia dengan Komputer (Teori) - Dosen: Ira Zulfa, S.T., M.Cs - Semester: III - Kelas D - LAB 01",
  ],
  minggu: ["Libur! Tidak ada mata kuliah hari ini. 🏖️"],
};

export const mkhariini = (client: Client, message: Message): void => {
  const hari = new Date()
    .toLocaleDateString("id-ID", { weekday: "long" })
    .toLowerCase();

  // Get today's date in dd-mm-yyyy format
  const tanggal = new Date().toLocaleDateString("id-ID");

  const jadwalHariIni = jadwalMataKuliah[hari] || [
    "Tidak ada jadwal tersedia.",
  ];

  const responseMessage = `
📅 *Mata Kuliah Hari Ini (${hari.charAt(0).toUpperCase() + hari.slice(1)})*:
Tanggal: ${tanggal}
${jadwalHariIni.map((jadwal) => `- ${jadwal}`).join("\n")}
  `;
  client.sendMessage(message.from, responseMessage);
};
