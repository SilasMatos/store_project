import './Card.css'
import { BiPurchaseTag } from "react-icons/bi";
import { RiCoinsLine } from "react-icons/ri";
import PropTypes from 'prop-types'
export default function Card({ src, name, pontos }) {
  return (
    <>
      <div className="product-card">
        <div className="product-tumb">
          <img src={src} id="img-card" alt="Denim Jeans" />
        </div>

        <div className="product-details">
          <div className='w-full text-center'>
          <h6 className=''>
            <a href="">{name}</a>
          </h6>
          </div>
          <span className="product-catagory">
          <RiCoinsLine  className='inline text-xl text-yellow-400'/>  <span id="author-edit">{pontos}</span>
          </span>
          <div className="product-bottom-details">
           <button className='btn-card-style'><BiPurchaseTag />Comprar</button>
          </div>
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  pontos: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
