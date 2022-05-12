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
                benchmarks.filter(benchmark => benchmark.full_benchmark === 'MA.3.NSO.1.3').map(filteredbenchmark => {
                    return (
                    <div className="filtered-benchmark-header" key={filteredbenchmark.full_benchmark}>
                        <p className="benchmark-name">Benchmark: {filteredbenchmark.full_benchmark}</p>
                        <p className="benchmark-emphases"> Emphases: </p>                        
                        {filteredbenchmark.emphases.split(', ').map(e => {
                            return (
                                <li>
                                    {e /* uuid needed */}
                                </li>
                            )
                        })}

                        <p className="benchmark-definition">Definition: {filteredbenchmark.benchmark_def}</p>
                        <p className="benchmark-examples">Examples: </p>
                        {filteredbenchmark.examples.split(', ').map(e => {
                            return (
                                <li>
                                    {e /* uuid needed */}
                                </li>
                            )
                        })}

                        <p className="benchmark-clarifications">Clarifications: </p>
                        {filteredbenchmark.clarifications.split(', Clarification: ').map(e => {
                            return (
                                <li>
                                    {e /* uuid needed */}
                                </li>
                            )
                        })}

                        <p className="benchmark-terms">Terms: </p>
                        {filteredbenchmark.terms.split(', ').map(e => {
                            return (
                                <li>
                                    {e /* uuid needed */}
                                </li>
                            )
                        })}                        

                        <p className="benchmark-purpose">Purpose: {filteredbenchmark.purpose}</p>

                        <p className="benchmark-misconceptions">Misconceptions: </p>
                        {filteredbenchmark.misconceptions.split(', Misconception: ').map(e => {
                            return (
                                <li>
                                    {e /* uuid needed */}
                                </li>
                            )
                        })}

                    </div>
                    )}
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