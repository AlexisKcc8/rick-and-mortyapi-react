import { useState, useEffect } from "react";

export const useRequetsApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false);
  let url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {

      try {
        setLoading(true);
        const res = await fetch(url, { signal });
        if (!res.ok) {
          let err = new Error("Error en la petición Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";
          throw err;
        }
        const json = await res.json();
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);
  const nextPage = () =>{
    if (currentPage <= 42) {
      setCurrentPage(currentPage + 1);
    }
  }
  const prevPage = () =>{
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  return { data, error, loading, nextPage, prevPage, currentPage};
};
