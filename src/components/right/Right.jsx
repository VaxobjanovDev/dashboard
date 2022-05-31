import { Link } from 'react-router-dom'
import './Right.css'
const Right = ()=>{

    return(
        <div className="right">
            Hello
            <Link to="/">
                Log Out
            </Link>
        </div>
    )
}

export default Right