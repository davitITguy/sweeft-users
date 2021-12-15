import { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";

import Cards from "../components/Cards";
import useFetch from "../hook/useFetch";

function Home() {
    const loader = useRef(null);
    const [pageNumber, setPageNumber] = useState(1);
    const { loading, error, list } = useFetch(pageNumber, 20);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPageNumber((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0,
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    console.log("list", list);

    return <Container>{list && <Cards usersData={list} loader={loader} />}</Container>;
}

export default Home;

const Container = styled.div`
    max-width: 1200px;
    padding: 10px;
    margin: auto;
`;
