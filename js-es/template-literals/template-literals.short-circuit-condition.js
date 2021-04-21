function printNoti(notifications) {
  console.log(
    `You have ${notifications} notification${notifications > 1 ? "s" : ""}`
  );
}

printNoti(1);
printNoti(2);
