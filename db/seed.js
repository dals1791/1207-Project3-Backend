const User = require("../models/userMD");
const Budget = require("../models/budgetMD");
const Transactions = require("../models/transactionsMD");

const emptyBudget = {
  income: 0,
  spendGoal: 0,
  spendCategory: "category",
};

const sampleUser = {

  firstName: "Ash",
  lastName: "Kechum",
  email: "ashket@pokecenter.com",
  userName: "pokeMaster45",
  password: "pikachu45",
};

const emptyTransaction = {
  description: "enter descr",
  category: "enter category",
  amount: 0,
  time: new Date(),
  isRoutine: false,
  isExpense: false,
};

User.deleteMany({}).then(() => {
  User.create(sampleUser)
    .then((user) => {
      Budget.deleteMany({}).then(() => {
        Budget.create(emptyBudget)
          .then((budget) => {
            user.budget.push(budget);
          })
          .then(() => {
            console.log("user  - ", user);
          });
      });
      Transactions.deleteMany({}).then(() => {
        Transactions.create(emptyTransaction)
          .then((transaction) => {
            console.log("User info transaction - ", user.transactions);
            user.transactions.push(transaction);
          })
          .then(() => {
            user.save();
            console.log("user  - ", user);
          });
      });
    })
    .catch((err) => console.log("err", err));
});
