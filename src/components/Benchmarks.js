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
            <p>Benchmark List</p>
            {(typeof benchmarks[0].full_benchmark === 'undefined') ? (
                <p>Loading...</p>
            ): (
                benchmarks.filter(e => e.full_benchmark === 'MA.3.NSO.1.3')




               )
            }
        </div>
  )
}

export default Benchmark

/*

benchmarks.map((fullBenchmark) => (
                    <div className="benchmark-info" key={fullBenchmark.full_benchmark}>
                    <p className="benchmark-name">Benchmark: {fullBenchmark.full_benchmark}</p>
                    <p className="benchmark-def">Definition: {fullBenchmark.benchmark_def}</p>
                    <br></br>
                    </div>
                ))
*/