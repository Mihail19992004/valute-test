import {useDispatch} from "react-redux";
import {useTypedSelector} from "./selector.hook";
import {useEffect} from "react";
import {fetchUsers} from "../store/actions/rates";
import {fetchFullNames} from "../store/actions/fullNames";
import {fetchCode} from "../store/actions/codeCountry";


export const useComposeObject = () => {
    const allCities: any[] = []
    const allValut: any[] = []
    const allCod: any[] = []
    const allCountry = []
    let allAll: { name: any; code: any; course: any; flag: string;
        country?: string }[] = []
    const dispatch = useDispatch()
    const {rates,loading,error} = useTypedSelector(state => state.rates)
    const {fullName} = useTypedSelector(state => state.fullNames)
    let {countryCode} = useTypedSelector(state => state.countryCode)


    for (var prop in fullName) {
        allCod.push(prop)
        allCities.push(fullName[prop])
    }

    for (var prop in rates) {
        allValut.push(rates[prop].toFixed(2))
    }
    countryCode = swap(countryCode)
    for (var prop in countryCode) {
        allCountry.push(countryCode[prop])

    }
    allCountry.sort()

    function swap(obj: { [x: string]: any; }) {
        const res: any = {};
        Object.keys(obj).forEach(function(value) {
            var key = obj[value];
            res[key] = value;
        });
        return res;
    }

   const test = allCod.map(e=> `${e[0]}${e[1]}`)
    const test2 = []
    for (let i = 0; i < allCod.length; i++) {
        if (`${allCod[i][0]}${allCod[i][1]}` === test[i]) {
            test2.push({[allCod[i]]: test[i]})
        } else {test2.push({[allCod[i]]: 'notFlag'})}

    }

     let test3: any = JSON.stringify(test2).replaceAll('{', '').replaceAll('}', '')
        .replaceAll('[', '{').replaceAll(']','}')
     test3 = JSON.parse(test3)


    const test4 = []

    for (var prop in test3) {
        test4.push(countryCode[prop])

    }
    for (let i = 0; i < allCod.length; i++) {
        allAll.push({
            name: allCities[i],
            course: allValut[i],
            code: allCod[i],
            flag: `https://flagcdn.com/80x60/${test4[i]}.png`.toLowerCase()
        })

    }

    useEffect(()=> {
        dispatch(fetchUsers())
        dispatch(fetchFullNames())
        dispatch(fetchCode())
    }, [])

    return {allAll}
}