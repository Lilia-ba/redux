import  {useSelector} from "react-redux";
import userReducer from "../../store/reducers/user-reducer";

export const UserList = () => {
    const userList = useSelector(state => state.userReducer.userList)
    return <div className="P-user-list">
        {userList.length ? userList.map((item, index) => {
            return <p>{item}</p>
        }) : <p>User list was empty</p>}
    </div>
}