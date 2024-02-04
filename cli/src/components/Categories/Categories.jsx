//import React from 'react'
import './Categories.css'
import PropTypes from 'prop-types'

export default function Categories({ img, title }) {
  return (
    <div className="overflow-hidden">
      <div className="p-3 rounded-2xl flex justify-center items-center categorie-edit">
        <div className="max-w-5 md:max-w-14">
          <img src={img} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="mt-1 flex justify-center">
        <p className="font-medium text-center  text-xs md:text-base">{title}</p>
      </div>
    </div>
  )
}

Categories.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
