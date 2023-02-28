import React, { useState } from 'react'
import { question } from './api';
import MyAccordion from './MyAccordion';
import './Accordion.css'



function Accordion() {
    const [data, setData] = useState(question);

    return (
        <div>
            <h1> React js Interview Question</h1>
            {
                data.map((curElem) => {
                    const { id } = curElem;
                    return <MyAccordion key={ id} {...curElem} />

                })
            }
        </div>
    )
}

export default Accordion