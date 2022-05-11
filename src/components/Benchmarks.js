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
                benchmarks.filter(benchmark => benchmark.full_benchmark === 'MA.3.NSO.1.3').map(filteredbenchmark =>
                    <div className="filtered-benchmark-info" key={filteredbenchmark.full_benchmark}>
                        <p className="benchmark-name">Benchmark: {filteredbenchmark.full_benchmark}</p>
                        <p className="benchmark-definition">Definition: {filteredbenchmark.benchmark_def}</p>
                        <div className="benchmark-clarifications">Clarifications: 
                            <ul>
                                <li>
                                    {filteredbenchmark.clarifications}
                                </li>
                            </ul>                        
                        </div>
                    </div>
                ))
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