import { Link } from "react-router-dom"
import './NotFound.css'


export const NotFound = () => {
    
    return (
        <div className="error-container">
            <div className="error">
                <h1 className="error__title">404</h1>
                <p className="error__text"> "Oops! Слово, которое вы искали, не обучается здесь"</p>
                <Link className="error__link" to='/'>To Home!</Link>
            </div>
        </div>
    )
}