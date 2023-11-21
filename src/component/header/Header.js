import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../asset/photo/logo.png'

export const Header = () => {
    const listHeader = ["Home", "About", "Contact"];
    
  return (
    <div className="bg-blue-600 py-3">
        <div className="container mx-auto">
            <div className="flex flex-row">
            <Link to={'../'}> <img src={logo} style={{height: 30 }} alt='logo'/></Link>
              {listHeader.map((item) => {
                return (
                  <Link to={`/${item}`} key={item}>
                    <div className="px-4">
                      <p className="text-white capitalize text-lg">{item}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
        </div>
    </div>
  )
}
