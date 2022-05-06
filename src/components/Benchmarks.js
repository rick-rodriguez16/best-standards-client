import React, { useEffect, useState }from 'react'

function Benchmark() {

    const [benchmarks, setBenchmarks] = useState([{}])

    useEffect(() => {
    fetch('/api/best_standards/benchmarks').then(
        response => response.json()
    ).then(
        data => {
            setBenchmarks(data)
        }
    )
    }, [])


    console.log(benchmarks);

    return (
        <div>
            {(typeof benchmarks[0].full_benchmark === 'undefined') ? (
                <p>Loading...</p>
            ): (
                benchmarks.map((fullBenchmark) => (
                    <div className="benchmark-info" key={fullBenchmark.full_benchmark}>
                    <p className="benchmark-name">Standard: {fullBenchmark.full_benchmark}</p>
                    <p className="benchmark-def">Definition: {fullBenchmark.benchmark_def}</p>
                    <br></br>
                    </div>
                ))
            )}
        </div>
  )
}

export default Benchmark