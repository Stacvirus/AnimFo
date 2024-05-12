import axios from 'axios'

const url = 'https://api.jikan.moe/v4/top/anime'
const baseUrl = 'http://localhost:3000'

export async function topAnimes() {
  // const res = await axios.get('https://api.jikan.moe/v4/top/anime?page=5')
  // axios.post('http://localhost:3000/Animes', res.data)
  const res = await axios.get(`${baseUrl}/TopAnimes`)
  console.log(res.data)
  return res.data[0]
}

async function AnimesGenre() {
  const res = await axios.get
}
