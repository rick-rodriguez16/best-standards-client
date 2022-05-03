import React, { useEffect, useState }from 'react'

function App() {

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

  //console.log(standards[0].full_standard);

  return (
    <div>
      {(typeof standards[0].full_standard === 'undefined') ? (
          <p>Loading...</p>
       ): (
          standards.full_standard.map((fullStandard, i) => (
            <p key={i}>{fullStandard}</p>
          ))
       )}
      
    </div>
  )
}

export default App