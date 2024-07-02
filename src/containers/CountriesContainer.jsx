import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import '../CountriesContainer.css';


const CountriesContainer = () => {

    const [countriesData, setCountriesData] = useState(null)
    const [countries, setCountries] = useState([])
    const [vistedCountries, setVisitedCountries] = useState([])


    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json()
        setCountriesData(data)

        const transformedData = data.map(country => ({
            countryName: country.name.common,
            visited: false
        }));
        
        setCountries(transformedData);
    }

    useEffect(() => {
        fetchCountries()
    }, [])


    return (
        <>       
            {countries ? <CountriesList countries={countries} 
            visitedCountries={vistedCountries}
            setVisitedCountries={setVisitedCountries}/> : 
            <p>Loading data...</p>}
        </>
    )

}

export default CountriesContainer;