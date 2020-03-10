function customerValidation(customer) {
  if (!customer.email) {
    return error("email is require");
  } else if (!customer.login) {
    return error("login is required");
  } else if (!customer.name) {
    return error("name is required");
  } else {
    return customer;
  }
}

// ES6 style custom formatted ternary magic
const customerValidation = customer =>
  !customer.email
    ? error("email is required")
    : !customer.login
    ? error("login is required")
    : !customer.name
    ? error("name is required")
    : customer;
