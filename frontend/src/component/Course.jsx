import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className='mt-28 items-center justify-center text-center flex flex-col'>
            <h1 className='text-2xl md:text-4xl'> We're Delighted to have YOU
            <span className='text-pink-500'>Here!! :)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus neque labore nemo pariatur incidunt, facilis numquam! Beatae, doloremque aperiam reiciendis harum ab vitae quod, enim repellendus dolor ipsum magnam?</p>
           <Link to='/'>
           <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700
            duration-300'>Back</button>
           </Link>
        </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
            list.map((item)=>(
                <Cards key={item.id} item={item}></Cards>
            ))
        }
    </div>

    </div>
        
    </>
  )
}

export default Course