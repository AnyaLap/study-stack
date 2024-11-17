import { Loader } from "../components/Loader/Loader"
import { WordTable } from "../components/WordTable/WordTable"

export const HomePage = () => {
    return (
        <div className="container">
            <Loader />
            <WordTable />
        </div>
    )
}