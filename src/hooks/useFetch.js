import { useEffect } from 'react'
import { useState } from 'react'

function useFetch(url, headers) {
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, headers)
        const data = await response.json()

        setData(data)
        setLoading(false)
      } catch(error) {
        setError(error)
        console.log(error)
        setLoading(false)
      }
    };

    fetchData()
    // eslint-disable-next-line
  }, [])


  return { data, loading, error }
}

export default useFetch
