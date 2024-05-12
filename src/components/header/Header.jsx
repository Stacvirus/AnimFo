import { useEffect, useState } from 'react'
import { topAnimes } from '../../request'
import './header.css'

export default function Header() {
  const [link, setLink] = useState([])
  let [name, setName] = useState([])

  useEffect(() => {
    async function fetchit() {
      const res = await topAnimes()
      setName(res.data.map((d) => name.push(d.title)))

      setLink(res.data)
    }
    fetchit()
  }, [])
  // console.log(link)
  return (
    <header>
      <div className="headerMask"></div>
      <div className="headerImgs">
        {link.map((l) => (
          <img src={l.images.jpg.large_image_url} alt="animes" />
        ))}
        {link.map((l) => (
          <img src={l.images.jpg.large_image_url} alt="animes" />
        ))}
      </div>
      <h1>Discover the world of Animation</h1>
    </header>
  )
}
