import React, { useState, useEffect } from 'react'
import { API_URL } from '../api'

const FirmCollections = () => {
    const [firmData, setFirmData] = useState([])

    const firmDataHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const newFirmData = await response.json()
            setFirmData(newFirmData.vendors)

        } catch (error) {
            alert('firm data not fetched');
            console.error("firm data not fetched", error);

        }
    }

    useEffect(() => {
        firmDataHandler()
    }, [])

    return (
        <>
            <h3>Restaurants with online food delivery in hyderabad</h3>
            <section className="firmsec">
                {firmData.map((apple) => {
                    return (
                        <>
                            {apple.firm.map((item) => {
                                return (
                                    <div className='firmGroupBox'>
                                        <div className='firmGroup'>
                                            <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName}/>
                                            <div className="firmoffer">{item.offer}</div>

                                        </div>
                                        <div className="firmDetails">
                                            <strong>{item.firmName}</strong><br />
                                            <div className="firmArea">{item.region.join(",")}</div>
                                            <div className="firmArea">{item.area}</div>

                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    )
                })}

            </section>


        </>
    )
}

export default FirmCollections
