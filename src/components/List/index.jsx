import React from "react";
import { Link, useHistory } from "react-router-dom";
import axiosInstance from "../../services/axiosInstace.js";
import Pager from "../pager";
import useQuery from "../../helpers/useQuery";

const List = () => {
  const [data, setData] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  let history = useHistory();
  let query = useQuery();
  let page = query.get("page");
  let size = query.get("size");

  React.useEffect(() => {
    axiosInstance
      .get(`/products?skip=${page !== 0 ? page - 1 : page}&limit=${size || 2}`)
      .then((res) => {
        setData(res.data.products);
        setTotal(res.data.total);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // pager on change
  const onBasicPageChange = (event) => {
    history.push({
      pathname: "/list",
      search:
        event.page === 0
          ? event.rows === 2
            ? ""
            : `?size=${event.rows}`
          : event.rows === 2
          ? `?page=${event.page + 1}`
          : `?page=${event.page + 1}&size=${event.rows}`,
    });

    axiosInstance
      .get(`/products?skip=${event.page}&limit=${event.rows}`)
      .then((res) => {
        const listData = res.data.products;
        listData?.length && setData(listData);
        setTotal(res.data.total);
      });
  };

  return (
    <div className="list-wrapper">
      <ul className="list">
        {data?.map((item) => (
          <li key={item.id} className="list-item">
            <p>{item.title}</p>
            <img style={{ height: "90px" }} alt="img" src={item.thumbnail} />
            <br />
            <Link to={`/list/item/${item.id}`}>more</Link>
          </li>
        ))}
      </ul>
      <Pager total={total} onPageChange={onBasicPageChange} />
    </div>
  );
};

export default List;
