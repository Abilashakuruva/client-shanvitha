import React, { useState, useEffect } from 'react'
import { API_URL } from '../api'

const Chains = () => {
    const [vendorData, setVendorData] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);

    const vendorFirmHandler = async () => {
        try {

            const response = await fetch(`${API_URL}/vendor/all-vendors`)
            const newData = await response.json()
            setVendorData(newData);
            console.log('this is api', newData)

        } catch (error) {
            alert("failed to fetch data")
            console.error("failed to fetch data")

        }
    }

    useEffect(() => {
        vendorFirmHandler()
    }, [])

    const handleScroll = (direction) => {
        const gallery = document.getElementById("chainGallery");
        const scrollAmount = 500;

        if (direction === "left"){
            gallery.scrollTo({
                left: gallery.scrollLeft - scrollAmount,
                behavior: "smooth"
            })
        } else if (direction === 'right'){
            gallery.scrollTo({
                left: gallery.scrollLeft + scrollAmount,
                behavior: "smooth"

            })
        }
    }
    return (
        <>
            <div className="btnsec">
                <button onClick={() => handleScroll("left")}>left</button>
                <button onClick={() => handleScroll("right")}>right</button>
            </div>
            <h3>Top Restaurant chains in Hyderabad</h3>

            <section className='chainsec' id='chainGallery' onScroll={(e) => setScrollPosition(e.target.scrollLeft )}>
                {vendorData.vendors && vendorData.vendors.map((vendor) => {
                    return (
                        <div className="vendorbox">
                            {vendor.firm.map((item) => {
                                return (
                                    <>
                                        <div>
                                            {/* {item.firmName}*/}
                                        </div>
                                        <div className="firmimage">
                                            <img src={`${API_URL}/uploads/${item.image}`} />
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    )
                }
                )}
            </section>

        </>
    )
}

export default Chains
