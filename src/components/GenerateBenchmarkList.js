import React from 'react'
import {v4 as uuid} from 'uuid';

function GenerateBenchmarkList ({column, row}) {

    if(column === 'emphases') {
        const emphasisList = row.split(', ').map(e => <li key={uuid}>{e}</li>);
        return <ul>{emphasisList}</ul>
    }

    if(column === 'examples') {
        if (row === '') { 
            return 
        } else {
            const examplesList = row.split(', Example: ').map(e => <li key={uuid}>{e}</li>);
            return (
                <>
                <p className="benchmark-examples">Examples: </p>
                <ul>{examplesList}</ul>
                </>
            );
        }
    }

    if(column === 'clarifications') {
        if (row === '') { 
            return 
        } else {
            const clarificationsList = row.split(', Clarification: ').map(e => <li key={uuid}>{e}</li>);
            return (
                <>
                <p className="benchmark-clarifications">Clarifications: </p>
                <ul>{clarificationsList}</ul>
                </>
            );
        }
    }

    if(column === 'terms') {
        if (row === '') { 
            return 
        } else {
            const termsList = row.split(', ').map(e => <li key={uuid}>{e}</li>);
            return (
                <>
                <p className="benchmark-terms">Terms: </p>
                <ul>{termsList}</ul>
                </>
            );
        }
    }

    if(column === 'misconceptions') {
        if (row === '') { 
            return 
        } else {
            const misconceptionsList = row.split(', Misconception: ').map(e => <li key={uuid}>{e}</li>);
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