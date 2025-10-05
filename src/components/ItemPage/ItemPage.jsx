import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import * as itemApi from "../../services/itemService"

const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const itemData = await itemApi.show(itemId);
      console.log("itemData:", itemData);
      setItem(itemData);
    };
    fetchItem();
  }, [itemId]);

    if (!item) return (
        <main>
            <h1>Item Page</h1>
            <p>Loading...</p>
        </main>
    )

    return (
        <main>
            <h1>{item.variant}</h1>
            <img src={item.image_url} />
            <p>Series: <Link to={`/series/${item.series.id}`}>{item.series.name}</Link></p>
            <p>Franchise: {item.series.franchise.name}</p>
            <p>Released on {item.series.release_date}</p>
        </main>
    )
};

export default ItemPage;