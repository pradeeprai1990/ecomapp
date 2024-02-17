'use client'
import React, { createContext, useState } from 'react';
let loginContext=createContext();

export default function MainContext(props) {
    let token=localStorage.getItem('token');
    let [tokenValue,setTokenValue]=useState(token ?? '');
  return (
    <loginContext.Provider value={
        {
            tokenValue,
            setTokenValue
        }
    } >
        {props.children}
        </loginContext.Provider>
  )
}
export {loginContext}

