import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(page, size, userId) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const BASE_URL = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com`;
    let CUSTOM_URL;
    if (page && !userId && size) {
        CUSTOM_URL = `${BASE_URL}/user/${page}/${size}`;
    } else if (!page && userId && !size) {
        CUSTOM_URL = `${BASE_URL}${userId}`;
    } else if (page && userId && size) {
        CUSTOM_URL = `${BASE_URL}${userId}/friends/${page}/${size}`;
    } else {
        CUSTOM_URL = `${BASE_URL}/user/${page}/20`;
    }

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const res = await axios.get(CUSTOM_URL);
            await setList((prev) => [...prev, ...res.data.list]);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [page]);

    useEffect(() => {
        sendQuery();
    }, [sendQuery, page, userId]);

    return { loading, error, list };
}

export default useFetch;
