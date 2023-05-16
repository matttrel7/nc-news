import { useSearchParams } from "react-router-dom";
import Order from "./Order";

const Sort = ({ articles, sortBy, setSortBy, order, setOrder }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderQuery = searchParams.get("order");

  const setSortByQuery = (sortByValue) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sortByValue);
    setSearchParams(newParams);
  };

  const setOrderQuery = (direction) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", direction);
    setSearchParams(newParams);
  };

  // useEffect(() => {
  //   getArticles(sortByQuery, orderQuery).then((data) => {
  //     setArticles(data);
  //   });
  // }, [sortByQuery, orderQuery]);

  function handleOptionChange(e) {
    const value = e.target.value;
    setSortBy(value);
    setSortByQuery(value);
  }

  return (
    <div>
      <label htmlFor="sort_by">Sort by</label>

      <select id="sort_by" onChange={handleOptionChange} value={sortBy}>
        <option value=""></option>
        <option key={articles.created_at} value="created_at">
          Default (date)
        </option>
        <option key={articles.comment_count} value="comment_count">
          comment count
        </option>
        <option key={articles.votes} value="votes">
          votes
        </option>
      </select>
      <Order
        setOrder={setOrder}
        order={order}
        setOrderQuery={setOrderQuery}
        orderQuery={orderQuery}
      />
    </div>
  );
};

export default Sort;
