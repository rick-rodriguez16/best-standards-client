import React, { useEffect, useState } from 'react'
import GenerateBenchmarkList from './GenerateBenchmarkList'

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

    //console.log(benchmarks);

    return (
        <div>
            {(typeof benchmarks[0].full_benchmark === 'undefined') ? (
                <p>Loading...</p>
            ): (
                benchmarks.filter(benchmark => benchmark.full_benchmark === 'MA.3.NSO.1.3').map(filteredBenchmark => {
                    return (
                        <div className="filtered-benchmark-header" key={filteredBenchmark.full_benchmark}>
                            <p className="benchmark-name">Benchmark: {filteredBenchmark.full_benchmark}</p>                            
                            <p className="benchmark-emphases"> Emphases: </p>                        
                                <GenerateBenchmarkList column='emphases' row={filteredBenchmark.emphases} />
                            <p className="benchmark-definition">Definition: {filteredBenchmark.benchmark_def}</p>
                            <GenerateBenchmarkList column='examples' row={filteredBenchmark.examples} />
                            <GenerateBenchmarkList column='clarifications' row={filteredBenchmark.clarifications} />
                            <GenerateBenchmarkList column='terms' row={filteredBenchmark.terms} />
                            <p className="benchmark-purpose">Purpose: {filteredBenchmark.purpose}</p>
                            <GenerateBenchmarkList column='misconceptions' row={filteredBenchmark.misconceptions} />
                        </div>
                    )}
                ))
            }
        </div>
  )
}

export default Benchmark
