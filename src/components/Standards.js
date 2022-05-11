import React, { useEffect, useState }from 'react'

function Standard() {

    const [standards, setStandards] = useState([{}])

    useEffect(() => {
    fetch('/api/best_standards/standards').then(
        response => response.json()
    ).then(
        data => {
            setStandards(data)
        }
    )
    }, [])


    console.log(standards);

    return (
        <div>
            <p>Standard List</p>
            {(typeof standards[0].full_standard === 'undefined') ? (
                <p>Loading...</p>
            ): (
                standards.map((fullStandard) => (
                    <div className="standard-info" key={fullStandard.full_standard}>
                    <p className="standard-name">Standard: {fullStandard.full_standard}</p>
                    <p className="standard-def">Definition: {fullStandard.standard_def}</p>
                    <p className="strand-def">Strand: {fullStandard.strand_def}</p>
                    <br></br>
                    </div>
                ))
            )}
        </div>
  )
}

export default Standard