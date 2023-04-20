import Order from "./Order";

const Sort = ({ articles, sortBy, setSortBy, order, setOrder }) => {
  function handleOptionChange(e) {
    e.preventDefault();
    setSortBy(e.target.value);
  }

  return (
    <div>
      <label htmlFor="sort_by">Sort by</label>
      <select id="sort_by" onChange={handleOptionChange}>
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
      <Order setOrder={setOrder} />
    </div>
  );
};

export default Sort;
