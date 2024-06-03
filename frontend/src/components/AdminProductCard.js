import React, { useState } from 'react'
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import displayVNDCurrency from '../helpers/displayVNDCurrency';
import AdminEditProduct from './AdminEditProduct';

const AdminProductCard = ({
    data,
    fetchdata
}) => {

    const [editProduct, openEditProduct] =useState(false)

    return (
        <div className='bg-white p-4 rounded h-64 relative'>
            <div className=' w-40'>
                <div className='bg-red-600 mx-auto w-40 h-32  '>
                    <img alt='' src={data?.productImage[0]} className='w-40 h-32' />
                </div>
                <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>

                <div >
                    <p className='font-semibold'>
                        {
                            displayVNDCurrency(data.sellingPrice)
                        }
                    </p>
                    <div className='absolute bottom-2 right-2  flex'>
                        <div className='w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={()=>openEditProduct(true)}>
                            <MdModeEditOutline />

                        </div>
                        <div className='w-fit ml-2 p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' >

                            <MdDelete />
                        </div>
                    </div>
                </div>


            </div>

            {
                editProduct && (
                    <AdminEditProduct productData={data} onClose={()=>openEditProduct(false)} fetchdata={fetchdata}/>
                )
            }

        </div>
    )
}

export default AdminProductCard