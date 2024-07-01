import React from 'react'
import Cardpic from "../../public/Cardpic.jpg"

function Cards({item}) {
    // console.log(item)
  return (
    <>
    <div className='mt-4 my-3 p-3 dark:bg-slate-900 dark:text-white'>
    <div className="card w-80 mr-23 bg-base-100 shadow-xl hover:scale-105 duration-200">
    <figure><img  src={Cardpic} alt="books" /></figure>
  <div className="card-body dark:bg-slate-900 dark:text-white">
    <h2 className="card-title">{item.name}
    <div className='badge badge-secondary'>{item.category}</div></h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-between">
      <div className='badge badge-outline '>${item.price}</div>
      <div className='cursor-pointer px-2 px-1 hover:text-pink-500 duration-200'>Buy Now</div>
    </div>
  </div>
</div>
</div>
</>
  )
}

export default Cards