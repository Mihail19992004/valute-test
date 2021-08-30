import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "./hook/selector.hook";
import {fetchUsers} from "./store/actions/rates";


function App() {
  const [tst, setTst] = useState<any[]>([])
  const dispatch = useDispatch()
  const {rates,loading,error} = useTypedSelector(state => state.rates)
  useEffect(()=> {
    dispatch(fetchUsers())
  }, [])
  console.log(rates)
  return (

    <div className="App">

    </div>
  );
}

export default App;
