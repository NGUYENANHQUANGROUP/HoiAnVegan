import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';
import AllProducts from '../components/AllProducts';
import AllUsers from '../components/AllUsers';
import AllOrders from '../components/AllOrders';

const AdminManager = () => {
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()
    const [showAllUsers, setShowAllUsers] = useState(true)
    const [showAllProducts, setShowAllProducts] = useState(false)
    const [showAllOrders, setShowAllOrders] = useState(false)

    const handleShowAllProducts = () => {
        setShowAllProducts(true);
        setShowAllUsers(false);
        setShowAllOrders(false);
    }

    const handleShowAllUsers = () => {
        setShowAllProducts(false);
        setShowAllUsers(true);
        setShowAllOrders(false);
    }
    const handleShowAllOrders = () => {
        setShowAllProducts(false);
        setShowAllUsers(false);
        setShowAllOrders(true);
    }


    useEffect(() => {
        if (user?.role !== ROLE.ADMIN) {
            navigate("/")
        }
    }, [user])

    return (
        <div className='container mx-auto min-h-[calc(100vh-120px)] md:flex gap-4 hidden mt-5'>

            <aside className='App-header2 min-h-full  w-full  max-w-60 customShadow'>
                <div className='h-32  flex justify-center items-center flex-col'>
                    <div className='mt-5 text-5xl cursor-pointer relative flex justify-center'>
                        {
                            user?.profilePic ? (
                                <img src={user?.profilePic} className='w-20 h-20 rounded-full' alt={user?.name} />
                            ) : (
                                <FaRegCircleUser />
                            )
                        }
                    </div>
                    <p className='capitalize text-lg font-semibold'>{user?.name}</p>
                    <p className='text-sm'>{user?.role}</p>
                </div>

                {/***navigation */}
                <div>
                    <ul className='grid p-4'>
                        <li  className='px-2 py-1 hover:bg-slate-100' onClick={handleShowAllUsers}>All Users</li>
                        <li  className='px-2 py-1 hover:bg-slate-100' onClick={handleShowAllProducts}>All Products</li>
                        <li  className='px-2 py-1 hover:bg-slate-100' onClick={handleShowAllOrders}>All Orders</li>
                    </ul>
                </div>
            </aside>

            <main className='App-header2 w-full min-h-full p-2'>
                {
                    showAllUsers && (
                        <AllUsers/>
                    )
                }

                {
                    showAllProducts && (
                        <AllProducts/>
                    )
                }
                {
                    showAllOrders && (
                        <AllOrders/>
                    )
                }
                

                
            </main>
        </div>
    )
}

export default AdminManager