const Order = ({ order, setOrder, setOrderQuery, orderQuery }) => {
  //   function handleOptionChange(e) {
  //     e.preventDefault();
  //     const value = e.target.value;
  //     setOrder(value);
  //     setOrderQuery(value);
  //   }

  return (
    <section>
      <label htmlFor="order">Sort Order:</label>
      <select
        id="order"
        defaultValue={""}
        onChange={(e) => {
          setOrder(e.target.value);
          setOrderQuery(e.target.value);
        }}
      >
        <option value=""></option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </section>
  );
};

export default Order;
