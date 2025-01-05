const quran = {
  1: 7, // Al-Fatihah
  2: 286, // Al-Baqarah
  3: 200, // Aal-E-Imran
  4: 176, // An-Nisa
  5: 120, // Al-Maidah
  6: 165, // Al-Anam
  7: 206, // Al-Araf
  8: 75, // Al-Anfal
  9: 129, // At-Tawbah
  10: 109, // Yunus
  11: 123, // Hud
  12: 111, // Yusuf
  13: 43, // Ar-Rad
  14: 52, // Ibrahim
  15: 99, // Al-Hijr
  16: 128, // An-Nahl
  17: 111, // Al-Isra
  18: 110, // Al-Kahf
  19: 98, // Maryam
  20: 135, // Ta-Ha
  21: 112, // Al-Anbiya
  22: 78, // Al-Hajj
  23: 118, // Al-Muminun
  24: 64, // An-Nur
  25: 77, // Al-Furqan
  26: 227, // Ash-Shuara
  27: 93, // An-Naml
  28: 88, // Al-Qasas
  29: 69, // Al-Ankabut
  30: 60, // Ar-Rum
  31: 34, // Luqman
  32: 30, // As-Sajda
  33: 73, // Al-Ahzab
  34: 54, // Saba
  35: 45, // Fatir
  36: 83, // Ya-Sin
  37: 182, // As-Saffat
  38: 88, // Sad
  39: 75, // Az-Zumar
  40: 85, // Ghafir
  41: 54, // Fussilat
  42: 53, // Ash-Shura
  43: 89, // Az-Zukhruf
  44: 59, // Ad-Dukhan
  45: 37, // Al-Jathiya
  46: 35, // Al-Ahqaf
  47: 38, // Muhammad
  48: 29, // Al-Fath
  49: 18, // Al-Hujurat
  50: 45, // Qaf
  51: 60, // Adh-Dhariyat
  52: 49, // At-Tur
  53: 62, // An-Najm
  54: 55, // Al-Qamar
  55: 78, // Ar-Rahman
  56: 96, // Al-Waqia
  57: 29, // Al-Hadid
  58: 22, // Al-Mujadila
  59: 24, // Al-Hashr
  60: 13, // Al-Mumtahina
  61: 14, // As-Saff
  62: 11, // Al-Jumua
  63: 11, // Al-Munafiqun
  64: 18, // At-Taghabun
  65: 12, // At-Talaq
  66: 12, // At-Tahrim
  67: 30, // Al-Mulk
  68: 52, // Al-Qalam
  69: 52, // Al-Haqqa
  70: 44, // Al-Maarij
  71: 28, // Nuh
  72: 28, // Al-Jinn
  73: 20, // Al-Muzzammil
  74: 56, // Al-Muddathir
  75: 40, // Al-Qiyama
  76: 31, // Al-Insan
  77: 50, // Al-Mursalat
  78: 40, // An-Naba
  79: 46, // An-Naziat
  80: 42, // Abasa
  81: 29, // At-Takwir
  82: 19, // Al-Infitar
  83: 36, // Al-Mutaffifin
  84: 25, // Al-Inshiqaq
  85: 22, // Al-Buruj
  86: 17, // At-Tariq
  87: 19, // Al-Ala
  88: 26, // Al-Ghashiya
  89: 30, // Al-Fajr
  90: 20, // Al-Balad
  91: 15, // Ash-Shams
  92: 21, // Al-Lail
  93: 11, // Ad-Duhaa
  94: 8, // Ash-Sharh
  95: 8, // At-Tin
  96: 19, // Al-Alaq
  97: 5, // Al-Qadr
  98: 8, // Al-Bayyina
  99: 8, // Az-Zalzala
  100: 11, // Al-Adiyat
  101: 11, // Al-Qaria
  102: 8, // At-Takathur
  103: 3, // Al-Asr
  104: 9, // Al-Humaza
  105: 5, // Al-Fil
  106: 4, // Quraish
  107: 7, // Al-Maun
  108: 3, // Al-Kawthar
  109: 6, // Al-Kafiroon
  110: 3, // An-Nasr
  111: 5, // Al-Masad
  112: 4, // Al-Ikhlas
  113: 5, // Al-Falaq
  114: 6, // An-Nas
};

// Function to get a random Surah and Ayah
function getRandomSurahAndAyah() {
  const randomSurah = Math.floor(Math.random() * 114) + 1; // Surah range: 1 to 114
  const totalAyahsInSurah = quran[randomSurah];
  const randomAyah = Math.floor(Math.random() * totalAyahsInSurah) + 1;
  return { surah: randomSurah, ayah: randomAyah };
}

// Function to fetch a random Ayah
async function fetchRandomAyah(surah, ayah) {
  const apiUrl = `https://quranapi.pages.dev/api/${surah}/${ayah}.json`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("data", data);

    return data;
  } catch (error) {
    console.error("Error fetching Ayah:", error);
    return null;
  }
}

// Get references to the modal, open button, and close button
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("settings");
const closeModalButton = document.getElementById("closeModal");

// Show the modal when the "Settings" button is clicked
openModalButton.addEventListener("click", () => {
  modal.style.display = "flex"; // Flex to center the modal
});

// Hide the modal when the "Close" button is clicked
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Hide the modal if the user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Save frequency and set alarm
document.getElementById("saveFrequency").addEventListener("click", () => {
  const frequency = parseInt(document.getElementById("frequency").value, 10);
  console.log(frequency);
  if (frequency && frequency > 0) {
    chrome.storage.local.set({ frequency }, () => {
      chrome.alarms.create("quranReminder", { periodInMinutes: frequency });
      alert(
        `Frequency saved! The popup will show a random Ayah every ${frequency} minutes.`
      );
    });
  } else {
    alert("Please enter a valid number greater than 0.");
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "quranReminder") {
    const { surah, ayah } = getRandomSurahAndAyah();

    // Fetch and store the Ayah data
    fetchRandomAyah(surah, ayah).then((data) => {
      if (data) {
        const ayahData = {
          surah,
          ayah,
          surahName: data.surahName || `Surah ${surah}`,
          surahNameArabicLong: data.surahNameArabicLong || `Surah ${surah}`,
          arabic: data.arabic1 || "Ayah text not found.",
          surahName: data.surahName || `Surah ${surah}`,
          audio: data.audio || "audio not found.",
          translation: data.english || "Translation not found.",
        };

        const notificationOptions = {
          type: "basic",
          iconUrl: "icon.png",
          title: `Surah ${surah}, Ayah ${ayah}`,
          message: data.text,
        };

        chrome.notifications.create("quranReminder", notificationOptions);

        // Save Ayah data to local storage
        chrome.storage.local.set({ lastAyah: ayahData });

        // Notify the popup that new Ayah data is available
        chrome.runtime.sendMessage({ action: "newAyahAvailable" });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Fetch the last Ayah from local storage and display it
  chrome.storage.local.get("lastAyah", (result) => {
    const ayahData = result.lastAyah;
    console.log("ayah data",ayahData)
    if (ayahData) {
      document.getElementById(
        "surahName"
      ).innerText = `${ayahData.surahName}  ${ayahData.surahNameArabicLong}`;
      document.getElementById("ayahText").innerText = ayahData.arabic;
      document.getElementById("translation").innerText = ayahData.translation;
    }
  });
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "newAyahAvailable") {
    // Fetch the latest Ayah and update the popup dynamically
    chrome.storage.local.get("lastAyah", (result) => {
      const ayahData = result.lastAyah;

      if (ayahData) {
        document.getElementById(
          "surahName"
        ).innerText = `${ayahData.surahName}  ${ayahData.surahNameArabicLong}`;
        document.getElementById("ayahText").innerText = ayahData.arabic;
        document.getElementById("translation").innerText = ayahData.translation;
      }
    });
  }
});
