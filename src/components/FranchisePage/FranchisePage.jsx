import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import * as franchiseApi from "../../services/franchiseService";

const FranchisePage = () => {
  const { franchiseId } = useParams();
  const [franchise, setFranchise] = useState(null);

  useEffect(() => {
    const fetchFranchise = async () => {
      const franchiseData = await franchiseApi.show(franchiseId);
      console.log("franchiseData:", franchiseData);
      setFranchise(franchiseData);
    };
    fetchFranchise();
  }, [franchiseId]);

  if (!franchise)
    return (
      <main>
        <h1>Franchise Page</h1>
        <p>Loading...</p>
      </main>
    );

  return (
    <main>
      <h1>{franchise.name}</h1>
      <section>
        <h2>All Series</h2>
        <ul className="flex flex-row flex-wrap">
          {franchise.series.map((s) => (
            <li key={s.id}>
              <Link to={`/index/${s.id}`}>
                <div className="max-w-sm bg-white rounded-xl shadow-xl p-4 m-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col ss-center">
                  <img
                    src={s.image_url}
                    alt={`${s.name}`}
                    className="w-full h-35 rounded-t-xl mb-2"
                  />
                  {s.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default FranchisePage;
