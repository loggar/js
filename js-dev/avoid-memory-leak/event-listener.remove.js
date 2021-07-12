function homeShortcuts({ key }) {
  if (key === "E") {
    console.log("edit widget");
  }
}

// user lands on home and we execute
document.addEventListener("keyup", homeShortcuts);

// user does some stuff and navigates to settings

function settingsShortcuts({ key }) {
  if (key === "E") {
    console.log("edit setting");
  }
}

// user lands on home and we execute
document.removeEventListener("keyup", homeShortcuts);
document.addEventListener("keyup", settingsShortcuts);
