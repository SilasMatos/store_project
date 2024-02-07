// import React from 'react'
import teste from '../../assets/img/teste.jpg'
import hb20 from '../../assets/img/hb20.jpg'

import vouchers from '../../assets/img/vouchers.png'
import doces from '../../assets/img/doces.png'
import eletronicos from '../../assets/img/eletronicos.png'
import marcador from '../../assets/img/marcador.png'
import desconto from '../../assets/img/icons8-desconto-94.png'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import NavBar from '../../components/Navbar/Navbar'
import './Home.css'
import Card from '../../components/Card/Card'

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="container" id="container-carousel">
        <Banner />
      </div>

      <div className="container flex justify-center gap-10 mte">
        <Categories img={vouchers} title="Vouchers" />
        <Categories img={eletronicos} title="Eletrônicos" />
        <Categories img={desconto} title="Promoções" />
        <Categories img={doces} title="Goloseimas" />
        <Categories img={marcador} title="Personalizados" />
      </div>

      <div className="container  mte">
        <div className='font-semibold text-xl '>
          Nossos Produtos
          <div className='line-divider'> 

          </div>
        </div>
        <div className='flex w-full'>

        <Card name="Apple iPhone 13 " pontos="600 TEL cash" src={teste} />
        <Card name="HYUNDAI HB20" pontos="1500 TEL cash" src={hb20}/>
        <Card name="Apple iPhone 13" pontos="500 TEL cash" src={teste} />
        <Card name="Apple iPhone 13 " pontos="500 TEL cash" src={teste}/>
        <Card name="Apple iPhone 13 " pontos="500 TEL cash"  src={teste}/>
        </div>
      </div>
    </>
  )
}
