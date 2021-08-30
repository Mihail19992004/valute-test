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
        allValut.push(rates[prop])
    }
    countryCode = swap(countryCode)
    for (var prop in countryCode) {
        allCountry.push(countryCode[prop])

    }
    allCountry.sort()
    // console.log(allCountry.length);
    // @ts-ignore
                    function swap(obj) {
                        const res = {};

                        Object.keys(obj).forEach(function(value) {
                            var key = obj[value];
                            // @ts-ignore
                            res[key] = value;
                        });
                        return res;
                    }
    // if (allCod[0]) {
    //     const test = allCountry.filter((e, i) => allCod.includes(e) ? e : null )
    //     console.log(test)
    // }
   const test = allCod.map(e=> `${e[0]}${e[1]}`)

    var c = allCountry.filter(value => test.includes(value))

    const test2 = []
    for (let i = 0; i < allCod.length; i++) {
        if (`${allCod[i][0]}${allCod[i][1]}` === test[i]) {
            test2.push({[allCod[i]]: test[i]})
        } else {test2.push({[allCod[i]]: 'notFlag'})}

    }

    // @ts-ignore
     let test3 = JSON.stringify(test2).replaceAll('{', '').replaceAll('}', '')
        .replaceAll('[', '{').replaceAll(']','}')
     test3 = JSON.parse(test3)


    const test4 = []
    // @ts-ignore
    for (var prop in test3) {
        test4.push(countryCode[prop])

    }
    // console.log(test4)
    for (let i = 0; i < allCod.length; i++) {
        allAll.push({
            name: allCities[i],
            course: allValut[i],
            code: allCod[i],
            flag: `https://flagcdn.com/16x12/${test4[i]}.png`.toLowerCase()
        })

    }
    console.log(allAll)

    // @ts-ignore
    useEffect(()=> {
        dispatch(fetchUsers())
        dispatch(fetchFullNames())
        dispatch(fetchCode())


    }, [])

    return {allAll}
}