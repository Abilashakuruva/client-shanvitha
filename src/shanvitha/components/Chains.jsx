import React, { useState, useEffect } from 'react'
import { API_URL } from '../api'

const Chains = () => {
    const [vendorData, setVendorData] = useState([]);

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
    return (
        <>
            <section className='chainsec'>
                <h3>Top Restaurant chains in Hyderabad</h3>
                {vendorData.vendors && vendorData.vendors.map((vendor) => {
                    return (
                        <div className="vendorbox">
                            {vendor.firm.map((item) => {
                                return (
                                    <>
                                        <div>
                                            {item.firmName}
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
