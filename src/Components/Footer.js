import React from 'react'

export default function Footer() {
    let footerstyle={
         position:"relative",
         top: "70vh",
         width:"100%",
         backgroundColor:"black",
    };
    return (
        <footer className="bg-dark text-light" style={footerstyle}>
            <p className="text-center my-3" >Copyright@ Mytodos.com</p>
        </footer>
    )
}
