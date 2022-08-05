import React, { useState } from 'react'

const Chimicherry = () => {
    const [Votes,setVotes]
    = useState(0);
    return (
        <div className='chimicherry'>
            <button className='chimi-button'
            onClick={()=> setVotes(Votes+ 1)}>
                Chimicherry</button>
            <p className='votes'> The amount of people<br/>
                                That voted Chimicherry:</p>
            <p className='num-votes'>{Votes}</p>
        </div>
    )
}

export default Chimicherry
