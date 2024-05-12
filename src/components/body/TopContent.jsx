import { useEffect, useState } from 'react'
import { topAnimes } from '../../request'
import AnimeCart from './AnimeCart'

export default function TopContent() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function top() {
      const res = await topAnimes()
      console.log(res.data.slice(0, 10))
      setData(res.data.slice(0, 10))
    }
    top()
  }, [])

  return (
    <>
      <h2>Top Animes</h2>
      <div className="topContent">
        {data.map((d, id) => (
          <AnimeCart
            key={id}
            title={d.title}
            img={d.images.webp.large_image_url}
            synops={d.synopsis}
            genre={d.genres[0].name}
          />
        ))}
      </div>
    </>
  )
}
