import { useState, useEffect, useRef } from "react"
import "./header.scss"


function Header() {


    const [getData, setGetData] = useState([])


    let API = 'https://restcountries.com/v3.1/all'

    async function dataFun() {
        const res = await fetch(API)
        const getData = await res.json()
        setGetData(getData)
    }

    useEffect(() => {
        dataFun()
    }, [])

    console.log(getData);



    return (
        <>
            <section className="card-section">
                <div className="container">
                    <div className="card-wrapper">

                        {
                            getData?.map((item) => (
                                <div className="card" key={item.id}>

                                    <div className="card-top">
                                        <img src={item?.flags.svg} alt="flag" width={'400px'} height={'200px'} />
                                    </div>

                                    <div className="card-hero">
                                        <h2>{item?.name.common}</h2>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Header