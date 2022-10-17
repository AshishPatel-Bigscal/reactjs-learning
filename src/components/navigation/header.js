import React from 'react'
import "./header.css"
import { useSelector } from 'react-redux'
import { MdPermIdentity, MdOutlineArrowDropDown, MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";


const Header = () => {
    const userDetail = useSelector(state => state.userReducer.userDetail)
    const cartDetail = useSelector(state => state.userReducer.cart)
    return (
        <div className='headerContainer'>
            <div className='d-flex w-100 h-100'>
                <div className='headerUserDetail'>
                    <h4 className='companyTitle'>My Shop</h4>
                    <span>
                        <MdPermIdentity />
                        <span className='userSetting'>
                            {userDetail.id}
                            <MdOutlineArrowDropDown />
                        </span>

                    </span>
                </div>
                <div className='headerCartDetail'>

                    {cartDetail?.length > 0
                        ? < MdShoppingCart size={35} />
                        : < MdOutlineShoppingCart size={35} />}
                    <span>Items : {cartDetail?.length || 0}</span>
                    <span>Amount : {cartDetail?.reduce((result, item) => result + item, 0) || 0}</span>
                </div>
            </div>
        </div>
    )
}
export default Header