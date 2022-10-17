import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/Actions';
import ProductCard from './productCard';
import "./dashboard.css"


const Dashboard = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products)


    useEffect(() => {
        dispatch(getProducts());
    }, [])
    return (
        <>
            <h2>All Products</h2>
            <div className='productContainer'>
                <div className='products'>
                    {
                        products.map((itm, index) => {
                            return (
                                <ProductCard key={index} {...itm} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard