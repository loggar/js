function saveCustomer(customer) {
  if (isCustomerValid(customer)) {
    database.save(customer);
  } else {
    alert("customer is invalid");
  }
}

// ternary
function saveCustomer(customer) {
  return isCustomerValid(customer)
    ? database.save(customer)
    : alert("customer is invalid");
}

// es6
const saveCustomer = customer =>
  isCustomerValid(customer)
    ? database.save(customer)
    : alert("customer is invalid");
