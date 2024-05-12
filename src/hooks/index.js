import axios from 'axios'
import { useState, useEffect } from 'react'

const baseUrl = 'http://localhost:3000'

export function useFetchAnime(endPoint) {
  console.log('in topanime use hook', endPoint)
  const [value, setValue] = useState(null)

  async function fetchAnimes() {
    console.log(`${baseUrl}/${endPoint}`)
    const res = await axios.get(`${baseUrl}/${endPoint}`)
    console.log(res.data)
    setValue(res.data)
    return res.data
  }

  return [value, fetchAnimes]
}
