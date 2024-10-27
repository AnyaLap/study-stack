import { Link } from "react-router-dom"
import './NotFound.css'


export const NotFound = () => {
    
    return (
        <div className="error-container">
            <div className="error">
                <img src="../images/icon.png" alt=""/>
                <h1 className="error__title">404</h1>
                <p className="error__text"> «Мяу! Мы потеряли след. Вернитесь к любимым словам!»</p>
                <Link className="error__link" to='/'>ВЕРНУТЬСЯ!</Link>
            </div>
        </div>
    )
}