import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-4 py-2 bg-violet-500'>
      <h1 className='text-3xl font-semibold'>Todo Application</h1>
      <div>
        <button className='inline-block mx-2 my-1 cursor-pointer rounded-md bg-green-300 px-2 py-1'>
            Signup
        </button>
        <button className='inline-block mx-2 my-1 cursor-pointer rounded-md bg-green-300 px-2 py-1'>
            Login
        </button>
      </div>
    </header>
  )
}

export default Header