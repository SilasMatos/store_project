
import './Card.css'
export default function Card({ src, name, pontos }) {
  return (
    <>
      <div className="product-card">
        <div className="product-tumb">
          <img src={src} id="img-card" alt="Denim Jeans" />
        </div>

        <div className="product-details">
          <span className="product-catagory">
            Por <span id="author-edit">{pontos}</span>
          </span>
          <h6>
            <a href="">{name}</a>
          </h6>
          <div className="product-bottom-details">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-1 px-3 rounded-full  text-base transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
