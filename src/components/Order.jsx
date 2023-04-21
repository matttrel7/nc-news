const Order = ({ order, setOrder, setOrderQuery, orderQuery }) => {
  //   function handleOptionChange(e) {
  //     e.preventDefault();
  //     const value = e.target.value;
  //     setOrder(value);
  //     setOrderQuery(value);
  //   }

  return (
    <section>
      <button
        onClick={() => {
          setOrder("asc");
          setOrderQuery("asc");
        }}
      >
        Ascending
      </button>
      <button
        onClick={() => {
          setOrder("desc");
          setOrderQuery("desc");
        }}
      >
        Descending
      </button>
    </section>
  );
};

export default Order;
