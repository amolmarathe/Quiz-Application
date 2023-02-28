import React, { useState } from "react"


const MyAccordion = ({ question, answer }) => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="main-heading">
                <p onClick={()=> setShow( !show)}> {show?" -" : "+"  }
            
               <h3> {question}</h3>  </p>
            </div>
            {show && <p className="answer">{answer}</p>}
        </div>
    )
}

export default MyAccordion