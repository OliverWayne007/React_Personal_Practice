import Display from "./display";

const BudgetSummary = () => {
    return (
        <div className='summary-container'>
            <div className="title-container">
                <h1 className="budget-planner-title">
                    Expense Tracker
                </h1>
            </div>
            <div className='budget-summary-container'>
                <div className="budget-summary">
                    <Display title='Budget' />
                    <Display title='Remaining' />
                    <Display title='Spent' />
                </div>
            </div>
        </div>
    )
}

export default BudgetSummary;