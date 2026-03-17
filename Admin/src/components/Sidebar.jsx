import React from 'react'
import { NavLink } from 'react-router-dom'
import { CirclePlus, Package, ListOrdered } from 'lucide-react'

const Sidebar = () => {
    const activeStyle = "flex items-center gap-3 border-r-4 border-lime-500 bg-lime-50 text-lime-700 font-semibold px-4 py-3 transition-all duration-200"
    const inactiveStyle = "flex items-center gap-3 border-r-4 border-transparent px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"

    return (
        <div className='w-[20%] min-h-screen border-r bg-white'>
            <div className='flex flex-col gap-1 pt-6 text-[15px]'>

                <NavLink className={({ isActive }) => isActive ? activeStyle : inactiveStyle} to="/add">
                    <CirclePlus className="w-5 h-5 text-lime-600" />
                    <p className='hidden md:block'>Add Items</p>
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? activeStyle : inactiveStyle} to="/list">
                    <Package className="w-5 h-5 text-lime-600" />
                    <p className='hidden md:block'>List Items</p>
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? activeStyle : inactiveStyle} to="/orders">
                    <ListOrdered className="w-5 h-5 text-lime-600" />
                    <p className='hidden md:block'>Orders</p>
                </NavLink>

                <div className="mt-4 mb-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Blogs</div>
                <NavLink className={({ isActive }) => isActive ? activeStyle : inactiveStyle} to="/add-blog">
                    <CirclePlus className="w-5 h-5 text-lime-600" />
                    <p className='hidden md:block'>Add Blog</p>
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? activeStyle : inactiveStyle} to="/list-blogs">
                    <ListOrdered className="w-5 h-5 text-lime-600" />
                    <p className='hidden md:block'>List Blogs</p>
                </NavLink>

                <div className="mt-4 mb-2 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Publications</div>
                <NavLink className={({ isActive }) => isActive ? activeStyle : inactiveStyle} to="/add-publication">
                    <CirclePlus className="w-5 h-5 text-lime-600" />
                    <p className='hidden md:block'>Add Publication</p>
                </NavLink>

                <NavLink className={({ isActive }) => isActive ? activeStyle : inactiveStyle} to="/list-publications">
                    <ListOrdered className="w-5 h-5 text-lime-600" />
                    <p className='hidden md:block'>List Publications</p>
                </NavLink>

            </div>
        </div>
    )
}

export default Sidebar
