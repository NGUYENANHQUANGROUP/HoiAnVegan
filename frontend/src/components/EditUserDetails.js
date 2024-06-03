import React, { useState } from 'react'
import ROLE from '../common/role'
import { IoMdClose } from "react-icons/io";
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const EditUserDetails = ({
  name,
  email,
  role,
  userId,
  onClose,
  callFunc,
}) => {
  const [data, setData] = useState({
    name:  name ,
    email:  email ,
    role:  role ,
    userId:  userId 
  })


  const handleOnChangeRole = async (e) => {
    const newRole = e.target.value
    setData((preve) => {
      return {
        ...preve,
        role: newRole
      }
    })

    console.log(e.target.value)
  }

  const handleOnChange = async (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }



  const updateUser = async (e) => {
    e.preventDefault()
    console.log("new data",data)
    const fetchResponse = await fetch(SummaryApi.updateUser.url, {
      method: SummaryApi.updateUser.method,
      credentials: 'include',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const responseData = await fetchResponse.json()

    if (responseData.success) {
      toast.success(responseData.message)
      onClose()
      callFunc()
    }

    console.log("role updated", responseData)

  }


  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center '>
      <div className='mx-auto bg-white shadow-md p-4  w-full max-w-sm'>

        <button className='block ml-auto' onClick={onClose}>
          <IoMdClose />
        </button>

        <h1 className='pb-4 text-lg font-medium'>Edit User</h1>
        <label>Name : </label>
        <div className='bg-slate-100 p-2 flex'>
          <input
            type="text"
            placeholder='enter name'
            name='name'
            value={data.name}
            onChange={handleOnChange}
            className='w-full h-full outline-none bg-transparent' />
        </div>
        <label>Email : </label>
        <div className='bg-slate-100 p-2 flex'>
          <input
            type="email"
            placeholder='enter email'
            name='email'
            value={data.email}
            onChange={handleOnChange}
            className='w-full h-full outline-none bg-transparent' />
        </div>


        <div className='flex items-center justify-between my-4'>
          <p>Role :</p>
          <select className='border px-4 py-1' value={data.role} onChange={handleOnChangeRole}>
            {
              Object.values(ROLE).map(el => {
                return (
                  <option value={el} key={el}>{el}</option>
                )
              })
            }
          </select>
        </div>


        <button className='w-fit mx-auto block  py-1 px-3 rounded-full bg-red-600 text-white hover:bg-red-700' onClick={updateUser}>Update User</button>
      </div>
    </div>
  )
}

export default EditUserDetails