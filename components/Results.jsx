import React from 'react'
import Thumbnail from './Thumbnail';
import FlipMove from "react-flip-move";

const Results = ({results}) => {

    return (
        <FlipMove className='sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-5 my-10'>
            {results.map(result => (
                <Thumbnail key={result.id} data={result}/>
            ))}
        </FlipMove>
    )
}

export default Results