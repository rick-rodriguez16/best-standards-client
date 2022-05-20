import React from 'react'
import {v4 as uuid} from 'uuid';

function GenerateBenchmarkList ({benchmarkKey, benchmarkValue}) {

    if(benchmarkKey === 'emphases') {
        const emphasesList = benchmarkValue.split(', ').map(e => <li key={uuid()}>{e}</li>);
        return (
            <>
                <p className="benchmark-emphases"> Emphases: </p>
                <ul>{emphasesList}</ul>
            </>
        );
    }

    if(benchmarkKey === 'examples') {
        if (benchmarkValue === '') { 
            return 
        } else {
            const examplesList = benchmarkValue.split(', Example: ').map(e => <li key={uuid()}>{e}</li>);
            return (
                <>
                    <p className="benchmark-examples">Examples: </p>
                    <ul>{examplesList}</ul>
                </>
            );
        }
    }

    if(benchmarkKey === 'clarifications') {
        if (benchmarkValue === '') { 
            return 
        } else {
            const clarificationsList = benchmarkValue.split(', Clarification: ').map(e => <li key={uuid()}>{e}</li>);
            return (
                <>
                    <p className="benchmark-clarifications">Clarifications: </p>
                    <ul>{clarificationsList}</ul>
                </>
            );
        }
    }

    if(benchmarkKey === 'terms') {
        if (benchmarkValue === '') { 
            return 
        } else {
            const termsList = benchmarkValue.split(', ').map(e => <li key={uuid()}>{e}</li>);
            return (
                <>
                    <p className="benchmark-terms">Terms: </p>
                    <ul>{termsList}</ul>
                </>
            );
        }
    }

    if(benchmarkKey === 'misconceptions') {
        if (benchmarkValue === '') { 
            return 
        } else {
            const misconceptionsList = benchmarkValue.split(', Misconception: ').map(e => <li key={uuid()}>{e}</li>);
            return (
                <>
                    <p className="benchmark-misconceptions">Misconceptions: </p>
                    <ul>{misconceptionsList}</ul>
                </>
            );
        }
    }

}

export default GenerateBenchmarkList;