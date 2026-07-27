/** @OnlyCurrentDoc */

// Google Apps Script bound to the works-metadata spreadsheet.
// Adds a "Site" menu with a "Refresh site cache" item that POSTs to
// /api/revalidate so sheet edits go live without waiting for cache expiry.
//
// Reads SITE_URL and REVALIDATE_SECRET from Script Properties — set them in
// the Apps Script editor under Project Settings → Script Properties.

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Site")
    .addItem("Refresh site cache", "refreshCache")
    .addToUi();
}

function refreshCache() {
  const props = PropertiesService.getScriptProperties();
  const siteUrl = props.getProperty("SITE_URL");
  const secret = props.getProperty("REVALIDATE_SECRET");
  if (!siteUrl || !secret) {
    SpreadsheetApp.getUi().alert(
      "Set SITE_URL and REVALIDATE_SECRET in Project Settings → Script Properties first."
    );
    return;
  }

  const res = UrlFetchApp.fetch(siteUrl.replace(/\/$/, "") + "/api/revalidate", {
    method: "post",
    headers: { "x-revalidate-secret": secret },
    muteHttpExceptions: true,
  });

  const code = res.getResponseCode();
  SpreadsheetApp.getActiveSpreadsheet().toast(
    code === 200
      ? "Cache refreshed — changes are live."
      : "Failed (HTTP " + code + "): " + res.getContentText(),
    "Site",
    5
  );
}
