import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import { CgClose } from "react-icons/cg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import uploadProfilePic from "../helpers/uploadProfilePic"
import SummaryApi from '../common';
import {toast} from "react-toastify"


const Signup = ({ onClose, onLogIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic:"",

    })

    const handleUploadPic = async (e) => {
        const file = e.target.files[0]
        const imagePic = await uploadProfilePic(file)

        setData((preve) => {
            return {
                ...preve,
                profilePic: imagePic.url
            }
        })
    }

    const handleOnChange = async (e) => {
        const {name, value} = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault()

        if(data.password === data.confirmPassword){
            
            const dataRequest = await fetch(SummaryApi.signUp.url, {
                method: SummaryApi.signUp.method,
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(data)
                
            })
            const dataApi  = await dataRequest.json()
           
            if (dataApi.success) {
                toast.success(dataApi.message)
                onClose()
                
            }
            
            if (dataApi.error) {
                
                toast.error(dataApi.message)
            }
        } else{
            toast.error("Please check password and confirm password")
            
        }

    }
    return (
        <section className='absolute inset-0 flex  justify-center' id='signup'>
            <div className='mx-auto container p-4'>

                <div className='bg-modal p-5 w-full max-w-sm mx-auto'>
                    <div className='flex justify-between items-center pb-3'>
                        <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
                            <CgClose />
                        </div>
                    </div>
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || 'https://res.cloudinary.com/deukdbm09/image/upload/v1715753148/yk9ffry9sc1dbohxwwmh.png'} alt='profilePic' />
                        </div>
                        <form >
                            <label>
                                <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                                    Upload  Photo
                                </div>
                                <input type='file' className='hidden' onChange={handleUploadPic}/>
                            </label>
                        </form>
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Name : </label>
                            <div className='bg-transparent border rounded-lg focus:outline-none p-2' style={{ border: '1px solid #efa765' }}>
                                <input
                                    type='text'
                                    placeholder='enter your name'
                                    name='name'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-transparent border rounded-lg focus:outline-none p-2' style={{ border: '1px solid #efa765' }}>
                                <input
                                    type='email'
                                    placeholder='enter email'
                                    name='email'
                                    value = {data.email}
                                    onChange={handleOnChange}
                                    required
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
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
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
                        </div>

                        <div>
                            <label>Confirm Password : </label>
                            <div className='bg-transparent border rounded-lg focus:outline-none p-2 flex' style={{ border: '1px solid #efa765' }}>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder='enter confirm password'
                                    name='confirmPassword'
                                    value={data.confirmPassword}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />

                                <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showConfirmPassword ? (
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
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>

                    </form>

                    <p className='my-5'>Already have account ? <button onClick={onLogIn} className=' text-red-600 hover:text-red-700 hover:underline'>Login</button></p>
                </div>


            </div>
        </section>
    )
}

export default Signup