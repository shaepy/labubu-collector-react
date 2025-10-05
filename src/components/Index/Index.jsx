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
    };
    fetchAllItems();
  }, []);

  if (!items) return <p>Loading...</p>;

  return (
    <main>
      <h1>Index</h1>
      <p>Viewing All LABUBU</p>
      <section>
        <ul className="flex flex-row flex-wrap">
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`/index/${item.id}`}>
                <div className="max-w-sm bg-white rounded-xl shadow-xl p-4 m-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center">
                  <img
                    src={item.image_url}
                    alt={`${item.variant}`}
                    className="w-full h-35 rounded-t-xl mb-2"
                  />
                  {item.variant}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Index;
