import React, { useEffect, useState } from 'react';
import GenerateBenchmarkList from './GenerateBenchmarkList';

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

    return (
        <div>
            {(typeof benchmarks[0].full_benchmark === 'undefined') ? (
                <p>Loading...</p>
            ): (
                benchmarks.filter(benchmark => benchmark.full_benchmark === 'MA.3.NSO.1.4').map(filteredBenchmark => {
                    return ( 
                        <div className="jumbotron filtered-benchmark-header" key={filteredBenchmark.full_benchmark}>
                            <p className="display-4 benchmark-name">{filteredBenchmark.full_benchmark}</p>                            
                            <GenerateBenchmarkList benchmarkKey='emphases' benchmarkValue={filteredBenchmark.emphases} />
                            <p className="benchmark-definition">Definition:</p>
                                <p>{filteredBenchmark.benchmark_def}</p>
                            <GenerateBenchmarkList benchmarkKey='examples' benchmarkValue={filteredBenchmark.examples} />
                            <GenerateBenchmarkList benchmarkKey='clarifications' benchmarkValue={filteredBenchmark.clarifications} />
                            <GenerateBenchmarkList benchmarkKey='terms' benchmarkValue={filteredBenchmark.terms} />
                            <p className="benchmark-purpose">Purpose:</p>
                                <p>{filteredBenchmark.purpose}</p>
                            <GenerateBenchmarkList benchmarkKey='misconceptions' benchmarkValue={filteredBenchmark.misconceptions} />
                        </div>
                    )}
                ))
            }
        </div>
  )
}

export default Benchmark
