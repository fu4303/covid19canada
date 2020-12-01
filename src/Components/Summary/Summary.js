import React, {useState, useEffect} from 'react'
import {instance} from '../Api/Api'

function Summary() {
    const [date,setDate] = useState('')
    const [totalCases,setTotalCases] = useState('')
    const [totalCriticals, setTotalCriticals] = useState('')
    const [totalFatalities, setTotalFatalities] = useState('')
    const [totalRecoveries, setTotalRecoveries] = useState('')

    const [changeCases, setChangeCases] = useState('')
    const [changeCriticals, setChangeCriticals] = useState('')
    const [changeFatalities, setChangeFatalities] = useState('')
    const [changeRecoveries, setChangeRecoveries] = useState('')


    useEffect (()=>{
        const fetchData = async ()=>{
            const response = await instance.get('/summary')
            const dataArray = response.data.data

            setDate(response.data.last_updated)
            setTotalCases(dataArray[0].total_cases)
            setTotalCriticals(dataArray[0].total_criticals)
            setTotalFatalities(dataArray[0].total_fatalities)
            setTotalRecoveries(dataArray[0].total_recoveries)

            setChangeCases(dataArray[0].change_cases)
            setChangeCriticals(dataArray[0].change_criticals)
            setChangeFatalities(dataArray[0].change_fatalities)
            setChangeRecoveries(dataArray[0].change_recoveries)
        }
    
        fetchData()
    },[])

  
    return (
       <div>
            <p>Last updated: {date}</p>
            <p>Total Cases: {totalCases} <span>⬆️ {changeCases}</span></p>
            <p>Total Critical Cases: {totalCriticals} <span>⬆️ {changeCriticals}</span></p>
            <p>Total Recoveries: {totalRecoveries} <span>⬆️ {changeRecoveries}</span></p>
            <p>Total Fatalities: {totalFatalities} <span>⬆️ {changeFatalities}</span></p>
       </div>
    )
}



// function Summary() {
//     const [data,setData] = useState([])
//     const [date,setDate] = useState('')

//     const fetchData = async ()=>{
//         const response = await instance.get('/summary')
//         const dataArray = await response.data.data



//         // instance.get('/summary')
//         //     .then(res=> setData(res.data.data))
//         //     .catch(err=>console.log(err))

//         console.log(dataArray);

//         setData(dataArray)
//         setDate(response.data.last_updated)

//     }

//     useEffect (()=>{


//         fetchData()
//     },[])

//     console.log(data);

//     //if(data[0].total_cases === undefined || data[0].total_criticals === undefined || data[0].total_recoveries === undefined || data[0].total_fatalities === undefined ) return null

//     return (
//         data ?
//        <div>
//          <p>Last updated: {date}</p>

//        {/*
            
//             <p>Total Cases: {data[0].total_cases} <span>⬆️ {data[0].change_cases}</span></p>
//             <p>Total Critical Cases:{data[0].total_criticals} <span>⬆️ {data[0].change_criticals}</span></p>
//             <p>Total Recoveries: {data[0].total_recoveries} <span>⬆️ {data[0].change_recoveries}</span></p>
//             <p>Total Fatalities: {data[0].total_fatalities} <span>⬆️ {data[0].change_fatalities}</span></p>

//        */}
//        </div>
//        :
//        <p>loading</p>

    
//     )
// }


export default Summary