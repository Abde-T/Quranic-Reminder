// Listen for an alarm to trigger the popup
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "quranReminder") {
      // Open the popup window
      chrome.windows.create({
        url: "popup.html", // Path to your popup HTML
        type: "popup",
        width: 400,
        height: 300,
      });
    }
  });
  
  // Example: Set an alarm to trigger every hour
  chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("quranReminder", { delayInMinutes: 1, periodInMinutes: 60 });
  });