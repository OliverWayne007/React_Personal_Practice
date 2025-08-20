import SearchBar from "./SearchBar";
import ExpenseList from "./ExpenseList";

const Expenses = () => {
    return (
        <div className="expense-list-container">
            <div className="title-container">
                <h2 className="expense-title"> Expenses </h2>
            </div>
            <SearchBar />
            <ExpenseList />
        </div>
    )
}

export default Expenses;