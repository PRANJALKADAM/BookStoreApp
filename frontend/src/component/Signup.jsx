import React from 'react'
import { Link } from "react-router-dom"
import Login from './Login'

function Signup() {
  return (
  <>
   <div className='flex h-screen items-center justify-around mt-15'>
     <div className='w-[600px]'>
      <div className="modal-box">
        <form>
          <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        </form>
        <h3 className="font-bold text-lg">Signup</h3>
        <div className='mt-4 space-y-3'>
            <span>Name</span>
            <br/>
            <input type='text' placeholder='enter your name' className='w-80 px-3 border rounded-md'/>
        </div>
        <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br/>
            <input type='email' placeholder='enter your email' className='w-80 px-3 border rounded-md'/>
        </div>
        <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br/>
            <input type='password' placeholder='enter your password' className='w-80 px-3 border rounded-md'/>
        </div>
        <div className='flex justify-around mt-4'>
            <button className='bg-pink-500 text-white rounded-md px-2 py-1 hover:bg-pink-700'>Signup</button>
            <p>already has an account?{" "}<button className='underline text-blue-500 cursor-pointer' onClick={()=>
                document.getElementById("my_modal_3").showModal()
            }>Login</button>{" "}
            <Login></Login>
            </p>
        </div>
        
      </div>
    </div>
   </div>
  </>
  )
}

export default Signup
