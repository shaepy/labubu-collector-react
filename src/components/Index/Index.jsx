import { Link } from "react-router";
import { useState, useEffect } from "react";
import * as itemApi from "../../services/itemService";

const Index = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAllItems = async () => {
        const itemsData = await itemApi.index();
        console.log("itemsData is:", itemsData);
        setItems(itemsData);
    }
    fetchAllItems();
  }, []);

  if (!items) return <p>Loading...</p>;
 
  return (
    <main>
        <h1>Index</h1>
        <p>Viewing All LABUBU</p>
        <section>
          <ul>
            {items.map((item) => (
              <li key={item.id}><Link to={`/index/${item.id}`}>{item.variant}</Link></li>
            ))}
          </ul>
        </section>
    </main>
  );
};

export default Index;