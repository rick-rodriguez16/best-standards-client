import React, { useEffect, useState }from 'react'

function List() {

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

    return (
        <div>

            {(typeof standards[0].full_standard === 'undefined') ? (
                <p>Loading...</p>
            ): (
                standards.map((fullStandard) => (
                    <p key={fullStandard.full_standard}>Standard: {fullStandard.full_standard}</p>
                ))
            )}

        </div>
  )
}

export default List