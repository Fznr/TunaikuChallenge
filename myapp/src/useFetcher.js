import {useState, useEffect} from 'react'

function useFetcher (url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((result) => {
            setLoading(false);
            // console.log(result)
            // let output = result.articles;
            setData(result);
          })
          .catch((err) => {
            console.log(err, "<<<<<<<<");
            setError(err);
            setLoading(false);
          });
      }, [url]);
      return {data, loading, error}
}


export default useFetcher