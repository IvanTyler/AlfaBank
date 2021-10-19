import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import style from './Nasa.module.css'
import { getNasaData } from '../../redux/actions/nasaAC'
import NasaItem from '../NasaItem/NasaItem'

function Nasa() {
    const dispatch = useDispatch()
    const nasaData = useSelector((state) => state.nasaData.nasaData)
    console.log('>>>', nasaData);
    useEffect(() => {
        dispatch(getNasaData())
    }, [])

    return (
        <ul>
            {
                nasaData.length ?
                    nasaData.map((item, index) => <NasaItem key={index} date={item.date}/>)
                    : <p>Данных нет</p>
            }
        </ul>
    )
}

export default Nasa