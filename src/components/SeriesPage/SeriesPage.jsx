import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import * as seriesApi from "../../services/seriesService";

const SeriesPage = () => {
  const { seriesId } = useParams();
  const [series, setSeries] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      const seriesData = await seriesApi.show(seriesId);
      console.log("seriesData:", seriesData);
      setSeries(seriesData);
    };
    fetchSeries();
  }, [seriesId]);

  if (!series) return <p>Loading...</p>;

  return (
    <main>
      <h1>{series.name}</h1>
      <img className="max-w-md" alt={series.name} src={series.image_url} />
      <p>Franchise: <Link to={`/franchises/${series.franchise.id}`}>{series.franchise.name}</Link></p>
      <p>Release Date: {series.release_date}</p>

      <section>
        <h2>Series Set</h2>
        <ul className="flex flex-row flex-wrap">
          {series.items.map((item) => (
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

export default SeriesPage;
