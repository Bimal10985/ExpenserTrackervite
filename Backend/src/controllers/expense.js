import ExpenseModel from "../models/expense.js";
export const expenseCreate = async (req, res) => {
  const { name, description, amount, type, user } = req.body;
  try {
    const expense = await ExpenseModel.create({
      name,
      description,
      amount,
      type,
      user,
    });
    res.status(200).json({ expense });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const getAllExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseModel.find();
    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const getExpenseByID = async (req, res) => {
  const { id } = req.params;
  try {
    const expenses = await ExpenseModel.findById(id);
    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const editExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const expenses = await ExpenseModel.findById(id);
    if (expenses) {
      expenses.name = req.body.name || expenses.name;
      expenses.description = req.body.description || expenses.description;
      expenses.amount = req.body.amount || expenses.amount;
    }
    await expenses.save();
    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const expenses = await ExpenseModel.findByIdAndDelete(id);
    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
export const getIExpenseUser = async (req, res) => {
  const { userID } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(404).json({ message: "User doesnot exist" });
    }
    const expense = await ExpenseModel.find({ user: userID });
    res.status(200).json({ expense });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
