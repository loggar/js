function func() {
  func.prop1 === undefined ? (func.prop1 = "yes") : null;
  if (func.prop1 === "yes") console.log("Prop with Yes");
  if (func.prop1 == "no") console.log("Prop with No");
}
func(); // Prop with Yes
func.prop1 = "no";
func(); // Prop with No
