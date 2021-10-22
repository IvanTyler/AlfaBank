import style from './NasaItem.module.css'
import { deleteNasaPost } from '../../redux/actions/nasaAC'
import { useDispatch } from 'react-redux'

function NasaItem({ hdurl, title, copyright, explanation, id }) {
    const dispatch = useDispatch()
    const deleteHandlet = (id) => {
        dispatch(deleteNasaPost(id))
    }
    return (
        <li className={style.nasaItem}>
            <div className={style.nasaTop}>
                <img className={style.nasaImg} src={hdurl} alt={title} />
                <div className={style.nasaInfo}>
                    <h3 className={style.nasaTitle}>{title}</h3>
                    <div className={style.nasaCopyright}>{copyright}</div>
                    <div className={style.nasaExplanation}>{explanation}</div>
                </div>
            </div>
            <div className={style.nasaBottom}>
                <div className={style.nasaLike}></div>
                <button className={style.nasaDelete} onClick={() => deleteHandlet(id)}>Удалить пост</button>
            </div>
        </li>
    )
}

export default NasaItem