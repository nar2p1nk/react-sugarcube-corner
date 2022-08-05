import React, {useState} from 'react'

const Cherrychanga = () => {
    
    const [Votes2, setVotes2] = useState(0)
    return (
        <div className="cherrychanga">
        <button className="chimi-button"
        onClick={()=>{setVotes2(Votes2 + 1)}}>Cherrychanga</button>
        <p className="votes">The amount of people <br/> that voted Cherrychanga:</p>
        <p className="num-votes">{Votes2}</p>
      </div>
    )
}

export default Cherrychanga
