import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-slate-700'>
        <div className=' font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-title'>
            <Link href={"/"}>
            
            <div className=' text-base md:text-2xl text-yellow-100'>The
                <span className=' text-yellow-600 font-title'>Movie</span>
            </div>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar