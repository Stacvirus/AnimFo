import './cart.css'

export default function AnimeCart({ img, synops, title, genre }) {
  console.log(genre)
  return (
    <div className="animeCard">
      <img src={img} alt="animes cart" />
      <h3>
        {title} <button>Play</button>
      </h3>
      <h4>{genre}</h4>
      <p>{synops}</p>
    </div>
  )
}
