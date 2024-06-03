import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { Link } from 'react-router-dom'

const CategoryList = () => {
    const [categoryProduct, setCategoryProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const categoryLoading = new Array(9).fill(null)

    const fetchCategoryProduct = async () => {
        setLoading(true)
        const response = await fetch(SummaryApi.categoryProduct.url)
        const dataResponse = await response.json()
        setLoading(false)
        setCategoryProduct(dataResponse.data)
    }

    useEffect(() => {
        fetchCategoryProduct()
    }, [])

    return (
        <div className='container mx-auto p-4 text-center'>
            <h1 className='titleText'>Menu</h1>
            <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none'>
                {

                    loading ? (
                        categoryLoading.map((el, index) => {
                            return (
                                <div className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading" + index}>
                                </div>
                            )
                        })
                    ) :
                        (
                            categoryProduct.map((product, index) => {
                                return (
                                    <Link to={"/product-category?category=" + product?.category} className='cursor-pointer' key={product?.category}>
                                        <div className='text-center'>
                                            <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-customcolor flex items-center justify-center mx-auto '>
                                                <img src={product?.productImage[0]} alt={product?.category} className='h-full w-full object-cover hover:scale-125 transition-all' />
                                            </div>
                                            {/* <p className=' text-sm md:text-base capitalize'>{product?.category}</p> */}
                                        </div>
                                    </Link>
                                )
                            })
                        )
                }
            </div>
        </div>
    )
}

export default CategoryList