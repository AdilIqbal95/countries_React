import '../CountriesList.css';
import VisitedCountriesList from "../components/VisitedCountriesList";


const CountriesList = ({countries, visitedCountries, setVisitedCountries}) => {


    // const handleMarkAsVisited = () => {
    //     country.visited = true
    //     let result = country.filter((country) => country.visted == true)
    //     setVisitedCountries(result)

    // }
    

    return (
        <>
            <section id="countries-list-section">
                <article>
                    <h2>Countries</h2>
                    <ul className="countries-list">
                        {countries.map((country, id) => (
                        <div className="country-item-div">
                            <p key={id} className="countries-list-item">{country.countryName}</p>
                            <button onClick={() => {
                                        country.visited = true
                                        let countryArr = Object.values(country)
                                        // let result = countryArr.filter((item) => item[1] == true)
                                        if (countryArr[1]) {} setVisitedCountries(country.countryName)
                                        console.log(visitedCountries);
                            }}>Mark as visited</button>
                        </div>
                        ))}
                    </ul>
                </article>
                <article>
                    {visitedCountries ? <VisitedCountriesList visitedCountries={visitedCountries}/> : <p>No countries visited...</p>}
                </article>
            </section>
        </>
    )

}

export default CountriesList;