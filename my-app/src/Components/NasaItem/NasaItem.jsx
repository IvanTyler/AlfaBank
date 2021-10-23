import style from './NasaItem.module.css'
import { deleteNasaPost, nasaPostLike } from '../../redux/actions/nasaAC'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'

function NasaItem({ hdurl, title, copyright, explanation, id, like }) {
    const dispatch = useDispatch()

    const likePost = useRef(null)

    const deleteHandlet = (id) => {
        dispatch(deleteNasaPost(id))
    }

    const changeStatusHandlet = (id) => {
        dispatch(nasaPostLike(id))
        like ? likePost.current.classList.remove(style.active) : likePost.current.classList.add(style.active)   
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
                <div ref={likePost} className={style.nasaLike} onClick={() => changeStatusHandlet(id)} ></div>
                <button className={style.nasaDelete} onClick={() => deleteHandlet(id)}>Удалить пост</button>
            </div>
        </li>
    )
}

export default NasaItem