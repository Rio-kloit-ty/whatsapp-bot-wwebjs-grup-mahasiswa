# Panduan Instalasi Bot WhatsApp dengan WWeb.js untuk Redmi

Panduan ini akan membantu Anda menginstal dan menjalankan bot WhatsApp menggunakan pustaka [WWeb.js](https://wwebjs.dev/). Cocok untuk digunakan di perangkat berbasis Redmi atau server Linux seperti Arch Linux.

---

## Prasyarat

1. **Node.js** versi 16 atau lebih baru.
2. **NPM** (terinstal bersama Node.js).
3. **Git** (opsional untuk mengkloning repository).
4. Aplikasi terminal.

---

## Langkah-Langkah Instalasi

### 1. Instal Node.js dan NPM

Jika Anda menggunakan Arch Linux, instal Node.js dengan perintah berikut:

```bash
sudo pacman -S nodejs npm
```

### 2. Clone Repo ini

Pilih direktori tempat proyek Anda akan disimpan, lalu jalankan:

```bash
git clone https://github.com/Rio-kloit-ty/whatsapp-bot-wwebjs-grup-mahasiswa.git
```

### 3. Inisialisasi Proyek Node.js

Inisialisasi proyek Node.js dengan perintah berikut:

```bash
npm init -y
```

Ini akan membuat file `package.json` default.

### 4. Instal WWeb.js dan typetypescript

Pasang pustaka WWeb.js dan qrcode-terminal untuk menampilkan kode QR:

```bash
npm install whatsapp-web.js qrcode-terminal
npm install -D typescript @types/node @types/qrcode-terminal

```

```bash
npx tsc --init
```

```bash
npx tsc
```

### 6. Jalankan Bot

Jalankan bot dengan perintah berikut:

```bash
node dist/bot.js
```

Pindai kode QR yang muncul menggunakan aplikasi WhatsApp untuk menghubungkan bot.

---

### 6. fitur bot grub mahasiswa

ℹ️ _Daftar Perintah_:

1. !rules - Menampilkan aturan grup.
2. !namadosen - Menampilkan daftar dosen.
3. !mkhariini - Menampilkan mata kuliah hari ini.
4. !credit - Menampilkan informasi pembuat bot.

---
