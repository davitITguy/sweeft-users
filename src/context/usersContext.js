/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const usersContext = createContext();

const UserProviderComponent = ({ children }) => {
    const [usersData, setUsersData] = useState({});
    const [pageNumber, setPageNumber] = useState(1);

    const changePage = (num) => {
        setPageNumber(num);
    };

    useEffect(() => {
        try {
            axios
                .get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNumber}/20`)
                .then((result) => {
                    setUsersData(result.data);
                    // console.log(result.data);
                });
        } catch (err) {
            console.error(err);
        }
    }, [pageNumber]);

    return <usersContext.Provider value={{ usersData, changePage }}>{children}</usersContext.Provider>;
};

export default UserProviderComponent;
