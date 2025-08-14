import React, { useEffect } from "react";
import '../css/MainLayout.css';

import { AnimationFunction } from "../js/observer-anim";

export const MainLayout = ({children}) =>{
    useEffect(()=>{
        {AnimationFunction()}
    },[])

    return(
        <>
            <div className="navBar">
                <div className="navTitle">
                    Black Cat's <a className="a1">Game Shop</a>
                </div>
                <div className="navMenu">
                    <a>Discounts</a>
                    <a>Category</a>
                    <a>Best-Selling</a>
                    <a>Login</a>
                </div>
            </div>
            {children}
        </>
    )
}