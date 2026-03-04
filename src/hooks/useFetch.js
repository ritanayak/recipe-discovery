import { useState, useEffect } from "react";

export default function useFetch (url) {
    const[ data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ error, setError] =useState(null);

      useEffect(() => {
        if (!url) return;
        setLoading(true);
        setError(null);

        fetch(url) 
        .then ((res) => {
            if (!res.ok) throw new Error ("Something went wrong");
            return res.json();
        })
        .then ((data)=> setData(data))
        .catch ((err) => setError(err.message))
        .finally (() => setLoading (false));
      }, [url]);
      return { data, loading, error};
    }