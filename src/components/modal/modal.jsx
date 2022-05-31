import {useContext} from 'react'
import { logout } from '../../context/authcontext/AuthActions'
import { AuthContext } from '../../context/authcontext/Authcontext'
import { AiOutlineUser } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import './modal.css'

const Modal = ({ setClick }) => {
    
    const {token, dispatch} = useContext(AuthContext)


    return (
        <div className="modal" onClick={() => setClick(false)}>
            <div className="modal-content">
                <div className="modal-item">
                    <li>
                        <AiOutlineUser />
                        <span>Username</span>
                    </li>
                    <li onClick={()=>dispatch(logout(token))}>
                        <BiLogOut />
                        <span>Log Out</span>
                    </li>
                </div>
            </div>
        </div>
    )
}
export default Modal