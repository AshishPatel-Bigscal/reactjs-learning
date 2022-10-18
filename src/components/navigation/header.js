import React from 'react'
import "./header.css"
import { useSelector, useDispatch } from 'react-redux'
import { MdPermIdentity, MdOutlineArrowDropDown, MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";
import { clearCart } from '../../redux/Actions';


const Header = () => {
    const dispatch = useDispatch();
    let userDetail = useSelector(state => state.userReducer.userDetail)
    const cartDetail = userDetail.cart
    const totalItems = cartDetail?.length || 0;
    const totalPrice = cartDetail.reduce((result, obj) => result + (+obj.price * obj.quantity), 0) || 0;

    // localStorage.setItem("userDetail", JSON.stringify(userDetail));
    // let ls = localStorage.getItem("userDetail")
    // ls = JSON.parse(ls);
    // console.log("LOCAL STORAGE : ", ls)
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
                <button onClick={() => dispatch(clearCart(userDetail))}> clearCart</button>
                <div className='headerCartDetail'>

                    {totalItems > 0
                        ? < MdShoppingCart size={35} />
                        : < MdOutlineShoppingCart size={35} />}
                    <span>Items : {totalItems}</span>
                    <span>Amount : {totalPrice}</span>
                </div>
            </div>
        </div>
    )
}
export default Header