import { useState, useEffect } from "react";
import { Link } from "react-router";
import * as seriesApi from "../../services/seriesService"

const Series = () => {
    const [seriesList, setSeriesList] = useState([]);

    useEffect(() => {
        const fetchSeriesList = async () => {
            const seriesListData = await seriesApi.index();
            console.log("serieslistData:", seriesListData);
            setSeriesList(seriesListData);
        };
        fetchSeriesList();
    }, [])

    return (
        <main>
            <h1>Viewing All Series</h1>
            <section>
                <ul>
                    {seriesList.map((series) => (
                        <li key={series.id}><Link to={`/series/${series.id}`}>{series.name}</Link></li>
                    ))}
                </ul>
            </section>
        </main>
    )
};

export default Series;