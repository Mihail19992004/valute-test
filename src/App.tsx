import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "./hook/selector.hook";
import {fetchUsers} from "./store/actions/rates";
import {fetchFullNames} from "./store/actions/fullNames";
import {useComposeObject} from "./hook/compose.hook";
import {fetchCode} from "./store/actions/codeCountry";

interface ActiveValueProps {
  name: string
  code: string
  course: number
  flag: string

  country?: string
}



function App() {
  const [allProps, setAllProps] = useState<ActiveValueProps[]>([])
 const {allAll} = useComposeObject()

  console.log(allAll, 'test')
  return (

    <div className="App">
      {
       allAll.map(e=> <p>{e.flag}</p>)
      }
    </div>
  );
}

export default App;
