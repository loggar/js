function dogSwitch() {
  switch (breed) {
    case "border":
      return "Border Collies are good boys and girls.";
      break;
    case "pitbull":
      return "Pit Bulls are good boys and girls.";
      break;
    case "german":
      return "German Shepherds are good boys and girls.";
      break;
    default:
      return "Im default";
  }
}
// Refactored
const dogSwitch = breed =>
  ({
    border: "Border Collies are good boys and girls.",
    pitbull: "Pit Bulls are good boys and girls.",
    german: "German Shepherds are good boys and girls."
  }[breed] || "Im the default");

dogSwitch("border xxx");
