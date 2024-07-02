const VisitedCountriesList = ({visitedCountries}) => {

    return (
        <>
            <h2>Visited Countries</h2>
            <ul className="countries-list">
                        {visitedCountries.map((country, id) => (
                        <div className="country-item-div">
                            <p key={id} className="countries-list-item">{country}</p>
                        </div>
                        ))}
            </ul>
        </>
    )

}

export default VisitedCountriesList;