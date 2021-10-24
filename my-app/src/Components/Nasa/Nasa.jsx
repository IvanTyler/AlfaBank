import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import style from './Nasa.module.css'
import { getNasaData, nasaFilterLike } from '../../redux/actions/nasaAC'
import NasaItem from '../NasaItem/NasaItem'

function Nasa() {
    const dispatch = useDispatch()
    const nasaData = useSelector((state) => state.nasaData.nasaData)
    useEffect(() => {
        dispatch(getNasaData())
    }, [])
    const [flagFilter, setflagFilter] = useState(false);
    const [text, setText] = useState('нет лайков');
    const listPosts = useRef(null);

    const likePosts = (flagFilter) => {
        setflagFilter(!flagFilter)
        dispatch(nasaFilterLike())
    }

    const allPosts = (flagFilter) => {
        setflagFilter(!flagFilter)
        dispatch(nasaFilterLike())
    }

    return (
        <>
            {nasaData.length > 0 && flagFilter === false ?
                <button className={style.buttonShowPosts} onMouseDown={() => likePosts(flagFilter)}>
                    {flagFilter === true ? 'Показать все посты'
                        : 'Показать посты с лайками'}
                </button>
                : <button className={style.buttonShowPosts} onMouseUp={() => allPosts(flagFilter)}>
                    {flagFilter === true ? 'Показать все посты'
                        : 'Показать посты с лайками'}
                </button>
            }
            <ul ref={listPosts} className={style.nasaList}>
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