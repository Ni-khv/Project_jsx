import AppListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';


const AppList = () =>{
    return(
        <ul className="app-list list-group">
            <AppListItem/>
            <AppListItem/>
            <AppListItem/>
        </ul>
    );
}

export default AppList;