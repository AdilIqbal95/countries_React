import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";
import '../CountriesContainer.css';


const CountriesContainer = () => {

    const [countriesData, setCountriesData] = useState(null)
    const [vistedCountries, setVisitedCountries] = useState([])

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json()
        setCountriesData(data)
    }

    useEffect(() => {
        fetchCountries()
    }, [])



    return (
        <>
            <section id="countries-list-section">
                <article>
                    {countriesData ? <CountriesList countriesData={countriesData}/> : <p>Loading data...</p>}
                </article>
                <article>
                    <VisitedCountriesList />
                </article>
            </section>
        </>
    )

}

export default CountriesContainer;