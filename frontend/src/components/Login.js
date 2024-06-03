import React, { useState, useContext } from 'react'
import Context from '../context';
import { Link } from 'react-router-dom'
import { CgClose } from "react-icons/cg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import SummaryApi from '../common';
import {toast} from "react-toastify"

const Login = ({ onClose, onSignUp }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (e) => {
        const { name, value} = e.target

        setData ((preve) => {
            return {
                ...preve,
                [name]:value
            }

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(data)

        const dataRequest = await fetch(SummaryApi.signIn.url,{
            method: SummaryApi.signIn.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
         const dataApi = await dataRequest.json()
        

         if(dataApi.success){
            toast.success(dataApi.message)
            toast.success(dataApi.data)
            console.log("tao met qua ",dataApi.data)
            fetchUserDetails()
            fetchUserAddToCart()
            onClose()
         }

         if(dataApi.error){
            toast.error(dataApi.message)
            
         }

    }
    
    return (
        <section className='absolute inset-16 flex  justify-center' id='login'>

            <div className='mx-auto container p-4'>

                <div className='bg-modal p-5 w-full max-w-sm mx-auto'>
                    <div className='flex justify-between items-center pb-3'>
                        <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
                            <CgClose />
                        </div>
                    </div>
                    <div className='w-20 h-20 mx-auto'>
                        <img src='https://res.cloudinary.com/deukdbm09/image/upload/v1715753148/yk9ffry9sc1dbohxwwmh.png' alt='login icons' />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-transparent border rounded-lg focus:outline-none p-2' style={{ border: '1px solid #efa765' }}>
                                <input
                                    type='email'
                                    placeholder='enter email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-transparent border rounded-lg focus:outline-none p-2 flex' style={{ border: '1px solid #efa765' }}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='enter password'
                                    name='password'
                                    value={data.password}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)} >
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            )
                                                :
                                                (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                Forgot password ?
                            </Link>
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

                    </form>
                    <p className='my-5'>Don't have account ? <button className=' text-red-600 hover:text-red-700 hover:underline' onClick={onSignUp}>Sign up</button></p>

                </div>
            </div>

        </section>
    )
}

export default Login