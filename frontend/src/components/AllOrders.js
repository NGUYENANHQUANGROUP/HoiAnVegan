import React, { useState, useEffect } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import moment from 'moment'
import { MdModeEdit } from 'react-icons/md'
import EditUserDetails from './EditUserDetails'



const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    // const [showEditUserDetails, setShowEditUserDetails] = useState(false)
    // const [userDetails, getUserDetails] = useState ({
    //     email : "",
    //     name : "",
    //     role : "",
    //     _id  : ""
    // })
    const fetchAllOrders = async () => {
        const fetchData = await fetch(SummaryApi.allOrders.url, {
            method: SummaryApi.allOrders.method,
            credentials: "include"
        })
        const dataResponse = await fetchData.json()

        if (dataResponse.success) {
            setAllOrders(dataResponse.data)
        }

        if (dataResponse.error) {
            toast.error(dataResponse.message)
            toast.error("dataResponse.message")
        }
    }
    useEffect(() => {
        fetchAllOrders()
    }, [])
    return (
        <div className='bg-white py-2 px-4 pb-4'>
            <table className='w-full userTable'>
                <thead>
                    <tr className='bg-black text-white'>
                        <th>Sr.</th>
                        <th>Id</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        allOrders.map((el, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el?._id}</td>
                                    <td>{el?.userId.name}</td>
                                    <td>{el?.userId.email}</td>
                                    <td>{el?.role}</td>
                                    <td>{moment(el?.createdAt).format('LL')}</td>
                                    <td>
                                        {/* <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white'
                                            onClick={() => {
                                                getUserDetails(el)
                                                setShowEditUserDetails(true)
                                            }}
                                        >
                                            <MdModeEdit />
                                        </button> */}
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>
            {/* {
                showEditUserDetails && (
                    <EditUserDetails 
                    onClose={()=>setShowEditUserDetails(false)}
                    name={userDetails.name}
                    email={userDetails.email}
                    role={userDetails.role}
                    userId={userDetails._id}
                    callFunc={fetchAllOrders}
                    />
                )
            } */}
        </div>
    )
}

export default AllOrders