import React, { useState, useEffect } from "react";
import axios from "axios";


interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}



interface Item {
  id: number;
  title: string;
  // other fields can be added as needed
}

interface DatatableProps {
  Api: Item[];
}

const Datatable = ({ Api }: DatatableProps) => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<Item[]>([]);


  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        let res = await axios.get<Item[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const sortingAscen = () => {
    const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
    setData(sortedData);
  };

  const sortingDescen = () => {
    const sortedData = [...data].sort((a, b) => b.title.localeCompare(a.title));
    setData(sortedData);
  };

  // Example columns definition using the Column<Item> interface
  const columns: Column<Item>[] = [
    { key: "id", title: "ID", dataIndex: "id", sortable: true },
    { key: "title", title: "Title", dataIndex: "title", sortable: true },
  ];

  // Row selection handler
  const handleRowSelect = (item: Item) => {
    let updatedSelection: Item[];
    if (selectedRows.includes(item)) {
      updatedSelection = selectedRows.filter((row) => row.id !== item.id);
    } else {
      updatedSelection = [...selectedRows, item];
    }
    setSelectedRows(updatedSelection);
    console.log("Selected Rows: ", updatedSelection);
  };

  return (
    <>
      <h1 className="Inputfield">Tabular Data</h1>

      <div className="button-div">
        <p>sorting by title</p>
        <button className="sort-button-ascen" onClick={sortingAscen}>
          A-Z
        </button>
        <button className="sort-button-desen" onClick={sortingDescen}>
          Z-A
        </button>
      </div>

      <div className="data-table">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col.key}>{col.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data &&
                data.slice(0, 20).map((item) => (
                  <tr key={item.id} onClick={() => handleRowSelect(item)}>
                    <td className="table-id">{item.id}</td>
                    <td className="table-title">{item.title}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Datatable;
