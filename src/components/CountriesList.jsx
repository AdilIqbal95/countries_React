import '../CountriesList.css';


const CountriesList = ({countriesData}) => {

    return (
        <>
            <h2>Countries</h2>
            <ul className="countries-list">
                {countriesData.map((country, id) => (
                <div className="country-item-div">
                    <p key={id} className="countries-list-item">{country.name.common}</p>
                    <button>Mark as visited</button>
                </div>
                ))}
            </ul>
        </>
    )

}

export default CountriesList;