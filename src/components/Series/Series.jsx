import { useState, useEffect } from "react";
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
                        <li key={series.id}>{series.name}</li>
                    ))}
                </ul>
            </section>
        </main>
    )
};

export default Series;