// import React from 'react'
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

      <div className="container flex justify-evenly mte">
        <Categories img={vouchers} title="Vouchers" />
        <Categories img={eletronicos} title="Eletrônicos" />
        <Categories img={desconto} title="Promoções" />
        <Categories img={doces} title="Goloseimas" />
        <Categories img={marcador} title="Personalizados" />
      </div>

      <div className="container flex mte">
        <Card name="teste" author="500 Pontos" />
        <Card name="teste" author="500 Pontos" />
        <Card name="teste" author="500 Pontos" />
        <Card name="teste" author="500 Pontos" />
        <Card name="teste" author="500 Pontos" />
      </div>
    </>
  )
}
