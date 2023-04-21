// const sortByQuery = searchParams.get("sort_by");
//   const orderQuery = searchParams.get("order");

//   const setSortOrder = (direction) => {
//     const newParams = new URLSearchParams(searchParams);
//     newParams.set("order", direction);
//     setSearchParams(newParams);
//   };

//   const setSortBy = (sortBy) => {
//     const newParams = new URLSearchParams(searchParams);
//     newParams.set("sort_by", sortBy);
//     setSearchParams(newParams);
//   };

// my useEffect:
// useEffect(() => {
//     api
//       .fetchArticles(topic, sortByQuery, orderQuery)
//       .then((articles) => {
//         setArticles(articles);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setError(err);
//         setIsLoading(false);
//       });
//   }, [topic, sortByQuery, orderQuery]);
{
  /* <label htmlFor="sort-by">Sort By:</label>
        <select
          id="sort-by"
          defaultValue={""}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value=""></option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <br />
        <label htmlFor="sort-order">Sort Order:</label>
        <select
          id="sort-order"
          defaultValue={""}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value=""></option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select> */
}
