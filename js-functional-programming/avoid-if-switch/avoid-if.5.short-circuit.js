const active = true;
const loan = {
  uuid: 123456,
  amount: 10,
  requestedBy: "rick"
};

const sendMoney = () => {};

if (active && loan) {
  sendMoney();
}

// Refactored
const active = true;
const loan = {
  uuid: 123456,
  amount: 10,
  requestedBy: "rick"
};

const sendMoney = () => {};

//Apply short circuit in this case, the loan is evaluated true because !=undefined
active && loan && sendMoney();
