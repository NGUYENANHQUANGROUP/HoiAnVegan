import React from 'react'
import NewPost from '../components/NewPost'
import CategoryList from '../components/CategoryList'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'


const Home = () => {
    return (
        <div>
            <NewPost />
            <CategoryList/>
       


            <HorizontalCardProduct category={"signature-main-course"} heading={"Top's Signature Main Course"} />
            <HorizontalCardProduct category={"salad-sides"} heading={"Salad & Sides"} />

            <VerticalCardProduct category={"mains"} heading={"Mains"} />
            <VerticalCardProduct category={"soups-broth"} heading={"Soups & Broth"} />
            <VerticalCardProduct category={"desserts"} heading={"Desserts"} />
            <VerticalCardProduct category={"smoothie"} heading={"Smoothie"} />
            <VerticalCardProduct category={"fresh-fruit-juice"} heading={"Fresh Fruit Juice"} />
            <VerticalCardProduct category={"vietnamese-tea-coffee"} heading={"Vietnamese Tea & Coffee"} />
            <VerticalCardProduct category={"long-drinks-cocktails"} heading={"Long Drinks & Cocktails"} /> 
        </div>
    )
}

export default Home