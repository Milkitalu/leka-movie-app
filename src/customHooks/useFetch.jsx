import {useState, useEffect} from "react";
import axios from 'axios';

function useFetch(url) {
    //definition of state variables used to hook data fetching, loading, and error status
    const[data, setData] = useState([]); //used to save movie data fetched from API
    const [loading, setLoading] = useState(true); // sets initial fetching condition to true
    const [error, setError] =useState(null);

    useEffect(() => {
        const fetchMoviesData = async () => {
            try {
                const res = await axios.get(url);  // res capture result of data query from specified url.
                setData(res.data);
                console.log(res);
                
            } catch (error) {
                setError(error);
                
            } finally {
                setLoading(false); // if data fetching fails set loading status to falsw
            }
        };

        fetchMoviesData();
    }, [url]);  // url is dependency of data fetching 

  return {data, loading, error} ; // data , loading status, and error status will be returned to caller this custom hook
};

export default useFetch;