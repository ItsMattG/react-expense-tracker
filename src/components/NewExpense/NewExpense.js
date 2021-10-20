import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
