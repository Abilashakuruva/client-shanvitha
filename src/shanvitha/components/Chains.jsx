import React, { useState, useEffect } from 'react'
import { API_URL } from '../api'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

//import {MagnifyingGlass } from 'react-loader-spinner';
import { Link } from 'react-router-dom';



const Chains = () => {
    const [vendorData, setVendorData] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [loading,setLoading]=useState(true)

    
    const vendorFirmHandler = async () => {
        try {

            const response = await fetch(`${API_URL}/vendor/all-vendors?order=desc`)
            const newData = await response.json()
            setVendorData(newData);
            console.log('this is api Data', newData)
            setLoading(false)

        } catch (error) {
            alert("failed to fetch data")
            console.error("failed to fetch data")
            setLoading(true)

        }
    }

    useEffect(() => {
        vendorFirmHandler()
    }, [])

    const handleScroll = (direction) => {
        const gallery = document.getElementById("chainGallery");
        const scrollAmount = 500;

        if (direction === "left") {
            gallery.scrollTo({
                left: gallery.scrollLeft - scrollAmount,
                behavior: "smooth"
            })
        } else if (direction === 'right') {
            gallery.scrollTo({
                left: gallery.scrollLeft + scrollAmount,
                behavior: "smooth"

            })
        }
    }

    return (
        <div className='mediaChainsec'>
            {/*<div className='loadersec'>
                {loading && <>
                    <div className="loader">
                        Your 🍳  is Loading...
                    </div>
                    <MagnifyingGlass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="magnifying-glass-loading"
                        wrapperStyle={{}}
                        wrapperClass="magnifying-glass-wrapper"
                        glassColor="#c0efff"
                        color="#e15b64"
                    />
                </>
                }
        </div>   */}     

                <div className="btnsec">
                    <button onClick={() => handleScroll("left")}>
                        <IoArrowBackCircleOutline className='btnIcons' />

                    </button>
                    <button onClick={() => handleScroll("right")}>
                        <IoArrowForwardCircleOutline className='btnIcons' />

                    </button>
                </div>
                <h3 className='chainTitle'>Top Restaurant chains in Hyderabad</h3>

                <section className='chainsec' id='chainGallery' onScroll={(e) => setScrollPosition(e.target.scrollLeft)}>
                    {vendorData.vendors && vendorData.vendors.map((vendor) => {
                        return (
                            <>
                            <div className="vendorbox">
                                {vendor.firm.map((item) => {
                                    return (
                                        <>
                                            <div>
                                                {/* {item.firmName}*/}
                                            </div>
                                            <Link to={`products/${item.id}/${item.firmName}`} className='link' key={item._id}>
                                            <div className="firmimage">
                                                <img src={`${API_URL}/uploads/${item.image}`} />
                                            </div>
                                            </Link>
                                        </>
                                    )
                                })}
                            </div>
                            </>
                        )
                    }
                    )}

                </section>

            </div>
            )
}

export default Chains
