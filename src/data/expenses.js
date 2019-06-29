function getExpenses() {
  var parsedExpenses;
  if (localStorage.getItem("expenses")) {
    parsedExpenses = localStorage.getItem("expenses");
    return JSON.parse(parsedExpenses);
  } else {
    var data = { expenses: [] };
    var stringedData = JSON.stringify(data);
    localStorage.setItem("expenses", stringedData);
    return JSON.parse(localStorage.getItem("expenses"));
  }
}

var expenses = getExpenses();

export default expenses;
