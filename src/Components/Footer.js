import React from 'react'

export default function Footer() {
    let footerstyle={
         position:"fixed",
         left:"0",
         bottom:"0",
         width:"100%",
    };
    return (
        <footer className="bg-dark text-light" style={footerstyle}>
            <p className="text-center my-3" >Copyright@ Mytodos.com</p>
        </footer>
    )
}
