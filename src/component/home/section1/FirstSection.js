import React from 'react'
import { diseases } from '../../../asset/disease'
import { Link } from 'react-router-dom'


export const FirstSection = ({setDoctor}) => {
  return (
    <>
    <div className='font-bold text-2xl py-2 px-2'>Book an appointment for an in-clinic consultation</div>
    <div className='pb-2 px-2'>Find experienced doctors across all specialties</div>
    <div className='container flex w-full'>
    {diseases.map((disease, key)=>{
        return(
            <div key={key} className='px-2 hover:shadow-2xl hover:bg-gray-100 hover:scale-110 transition-all duration-300 ease-in-out'>
                <Link to={disease.code} onClick={()=>setDoctor(disease.code)}>
                <img className='h-80 ' src={require("../../../asset/photo/section1/"+disease.image)} alt={disease.type}/>
                </Link>
                {disease.type}
                {disease.detail}
            </div>
        )
    })}
    </div>
    </>
  )
}
