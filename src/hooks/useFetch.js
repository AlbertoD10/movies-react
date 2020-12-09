import { useEffect, useState } from "react";

//Creo un fetch que me hara las peticiones para las peliculas.

export default function UseFetch(url, options) {
  //Creo mis efectos para saber el estado de la peticion
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  //Creo un useEffect para hacer la peticion.
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResult(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [options, url]); //En ese array se ponen las variables a utilizar, al actualizarse esas variables se vuelve a ejecutar el useffect

  return { loading, result, error };
}
