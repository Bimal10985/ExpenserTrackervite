import mongoose from "mongoose";
import IncomeModel from "../models/income.js";
export const incomeCreate = async (req, res) => {
  const { name, description, amount, user } = req.body;
  try {
    const income = await IncomeModel.create({
      name,
      description,
      amount,
      user,
    });
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ message: error.message });
    // console.log(error);
  }
};

export const getAllIncomes = async (req, res) => {
  try {
    const incomes = await IncomeModel.find();
    res.status(200).json({ incomes });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const getIncomeByID = async (req, res) => {
  const { id } = req.params;
  try {
    const incomes = await IncomeModel.findById(id);
    res.status(200).json({ incomes });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const editIncome = async (req, res) => {
  const { id } = req.params;
  try {
    const incomes = await IncomeModel.findById(id);
    if (incomes) {
      incomes.name = req.body.name || incomes.name;
      incomes.description = req.body.description || incomes.description;
      incomes.amount = req.body.amount || incomes.amount;
    }
    await incomes.save();
    res.status(200).json({ incomes });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    const incomes = await IncomeModel.findByIdAndDelete(id);
    res.status(200).json({ incomes });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const getIncomeUser = async (req, res) => {
  const { userID } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(404).json({ message: "User doesnot exist" });
    }
    const incomes = await IncomeModel.find({ user: userID });
    res.status(200).json({ incomes });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
