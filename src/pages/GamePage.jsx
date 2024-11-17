import { Loader } from "../components/Loader/Loader"
import { Slider } from "../components/Slider/Slider"

export const GamePage = () => {
    return (
        <div className="container">
            <Loader />
            <Slider />
        </div>
    )
}