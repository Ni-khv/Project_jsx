import AppListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';


const AppList = ({data}) =>{
    const elements = data.map(item =>{
        return(
            <AppListItem  {...item}/>
        )
    })
    return(
        <ul className="app-list list-group">
           {elements}
        </ul>
    );
}

export default AppList;