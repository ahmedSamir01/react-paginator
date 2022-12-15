import React, { useState } from "react";
import { Paginator } from "primereact/paginator";
import useQuery from "../../helpers/useQuery";

export default function Pager(props) {
  let query = useQuery();
  let page = query.get("page");
  let size = query.get("size");
  let perPageOptions = [2, 5, 10, 20];

  const [basicRows, setBasicRows] = useState(
    size ? Number(size) : perPageOptions[0]
  );
  const [basicFirst, setBasicFirst] = useState(
    page ? (page - 1) * basicRows : 0
  );

  const onBasicPageChange = (event) => {
    // event = {first: 10, rows: 10, page: 1, pageCount: 2}
    setBasicFirst(event.first);
    setBasicRows(event.rows);
    props.onPageChange(event);
  };

  return (
    <Paginator
      first={basicFirst}
      rows={basicRows}
      totalRecords={props.total}
      rowsPerPageOptions={perPageOptions}
      onPageChange={onBasicPageChange}
    ></Paginator>
  );
}
