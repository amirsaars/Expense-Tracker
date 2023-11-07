import React from "react";
import BudgetCard from "./BudgetCard";
import { UNCATEGORIZED_BUDGET_ID, useBudget } from "../contexts/BudgetContext";

function UncategorizedBudgetCard(props) {
  const { getBudgetExpenses } = useBudget();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );
  if (amount === 0) return null;
  return <BudgetCard amount={amount} {...props} name="Uncategorized" gray />;
}

export default UncategorizedBudgetCard;
