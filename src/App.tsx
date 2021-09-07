import React, {useState} from 'react';

import {useComposeObject} from "./hook/compose.hook";


interface ActiveValueProps {
  name: string
  code: string
  course: number
  flag: string
}

function App() {
    const {allAll} = useComposeObject()
    const [activeCourse, setActiveCourse] = useState<ActiveValueProps>(allAll[0])

    return (
    <div className="App">
        <div className="section-block">
            <select name="" id="" onChange={(e)=> setActiveCourse(allAll[+e.target.value])}>
                <option value="" disabled>Выберите Валюту</option>
                {
                    allAll && allAll.map((e,i)=> <option value={i}>
                        {e.name}
                    </option>)
                }
            </select>
        </div>

        <div className="active11">
            {
                activeCourse &&
                <div className='active'>
                    <img src={activeCourse.flag} alt=""/>
                    <p>{activeCourse.name}</p>
                    <p>{activeCourse.course}</p>

                </div>
            }
        </div>
    </div>
  );
}

export default App;
