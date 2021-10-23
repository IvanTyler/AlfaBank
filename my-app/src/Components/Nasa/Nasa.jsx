import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import style from './Nasa.module.css'
import { getNasaData, nasaFilterLike } from '../../redux/actions/nasaAC'
import NasaItem from '../NasaItem/NasaItem'

function Nasa() {
    const dispatch = useDispatch()
    const nasaData = useSelector((state) => state.nasaData.nasaData)
    console.log('redux state >>', nasaData)
    useEffect(() => {
        dispatch(getNasaData())
    }, [])

    const [flagFilter, setflagFilter] = useState(false);

    const toggleFunck = (flagFilter) => {
        setflagFilter(!flagFilter)
        dispatch(nasaFilterLike())
    }

    return (
        <>
            {nasaData.length > 0 ?
                <button className={style.buttonShowPosts} onClick={() => toggleFunck(flagFilter)}>
                    {flagFilter === true ? 'Показать все посты'
                        : 'Показать посты с лайками'}
                </button>
                : ''
            }
            <ul className={style.nasaList}>
                {
                    nasaData.length ?
                        (flagFilter === true ? nasaData.filter(el => el.like === true) : nasaData).map((item) =>
                            <NasaItem
                                key={item.id}
                                id={item.id}
                                like={item.like}
                                hdurl={item.hdurl}
                                title={item.title}
                                copyright={item.copyright}
                                explanation={item.explanation}
                            />
                        )
                        : <p>Данных нет</p>
                }
            </ul>
        </>
    )
}

export default Nasa