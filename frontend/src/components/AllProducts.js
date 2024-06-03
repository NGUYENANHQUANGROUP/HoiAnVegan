import React, { useState, useEffect } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import AdminProductCard from './AdminProductCard'
import UploadProduct from './UploadProduct'


const AllProducts = () => {
    const [openUploadProduct, setOpenUploadProduct] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    
    const fetchAllProducts = async () => {
        const fetchData = await fetch(SummaryApi.allProducts.url, {
            method: SummaryApi.allProducts.method,
            credentials: "include"
        })

        const dataResponse = await fetchData.json()

        if (dataResponse.success) {
            setAllProducts(dataResponse.data)

        }


        if (dataResponse.error) {
            toast.error(dataResponse.message)

        }
    }
    useEffect(() => {
        fetchAllProducts()
    }, [])
    return (
        <div>
            <div className=' py-2 px-4 flex justify-between items-center'>
                <h2 className='font-bold text-lg'>All Product</h2>
                <button className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full ' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
            </div>
            {/**all product */}
            <div className='flex flex-wrap justify-center gap-10 py-4  '>
                {
                    allProducts.map((product, index) => {
                        return (
                            <AdminProductCard data={product} key={index + "allProduct"} fetchdata={fetchAllProducts} />

                        )
                    })
                }
            </div>
            
             {/**upload prouct component */}
        {
          openUploadProduct && (
            <UploadProduct onClose={()=>setOpenUploadProduct(false)} fetchData={fetchAllProducts}/>
          )
        }

        </div>
    )
}

export default AllProducts