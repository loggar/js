//We have this custom exceptions
const LoanRejected = (motive, clientId) => ({
  message: "The loan was rejected",
  code: "LOAN_REJECTED",
  motive,
  clientId
});

const LoanExceed = clientId => ({
  message: "The loan amount exceed the limits",
  code: "LOAN_EXCEED",
  clientId
});

const LoanPending = () => ({
  message: "The client has a loan pending for payment",
  code: "LOAN_PENDING"
});

//I simulate a loan process.
const process_state = async (clientId, amount) => {
  const status = await getLoanStatus(clientId, amount);

  //Detect status to reject the loan.
  if (status.code == "REJECTED")
    throw LoanRejected("Status not ready to calc", clientId);

  if (status.code == "UNAVAILABLE")
    throw LoanRejected("Client banned", clientId);

  if (status.code == "EXCEED") throw LoanExceed();

  //If the client has debts.
  if (status.code == "PENDING") throw LoanPending();

  const loanId = await createLoan(clientId);

  return loanId;
};

//And we detect the type of exceptions.
const loanFlow = async (clientId, amount) => {
  try {
    const loanId = process_state(clientId, amount);
    console.log("New loan create", loanId);
  } catch (err) {
    if (err.code.includes[("LOAN_REJECTED", "LOAN_EXCEED", "LOAN_PENDING")])
      console.log("Loan rejected!!");
    else console.log("Problem in process try again later...");
  }
};
