import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const filterHandler = (e) => {
    props.onFilter(e.target.value);
  };
  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by Year</label>
        <select onChange={filterHandler} value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
