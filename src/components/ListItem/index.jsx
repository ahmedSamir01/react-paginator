import React from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../services/axiosInstace.js";

export default function ListItem() {
  const [data, setData] = React.useState();
  let { id } = useParams();

  React.useEffect(() => {
    axiosInstance.get(`/products/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ textAlign: "center" }}>
      <p>{data?.title}</p>
      <img src={data?.thumbnail} alt="img" />
    </div>
  );
}
