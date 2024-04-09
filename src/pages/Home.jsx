import React from 'react'
import img from "../img/car.avif"
import Button from '../automs/Button'

export default function Home() {
    return (
        <>
            {/* <h1>helo</h1> */}

            <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-6">

                    <h3>spical offer</h3>
                    <h2>resent the best</h2>
                    <h1>car today</h1>
                    <p>find the perfect car today</p>



                    <Button content="book now" />
                    <p style={{ opacity: "0.5", fontSize: "12px" }}>www.getcatnow.com</p>

                </div>
                <div className="col-6">
                    <img src={img} className='imag' alt="" />

                </div>

            </div >


        </>
    )
}
