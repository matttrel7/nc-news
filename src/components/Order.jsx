const Order = ({ setOrder }) => {
  function handleOptionChange(e) {
    e.preventDefault();
    setOrder(e.target.value);
  }

  return (
    <div>
      <label htmlFor="order">Order</label>
      <select id="sort_by" onChange={handleOptionChange}>
        <option key="desc" value="desc">
          Latest (default)
        </option>
        <option key="asc" value="asc">
          Oldest
        </option>
      </select>
    </div>
  );
};

export default Order;
