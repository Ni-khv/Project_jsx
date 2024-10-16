import AppListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';


const AppList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {
    const elements = data.map(item =>{
        const {id, ...itemProps} = item;
        return(
            <AppListItem
             key={id} 
              {...itemProps}
              onDelete={() => onDelete(id)}
              onToggleIncrease={() =>onToggleIncrease(id)}
              onToggleLike={() =>onToggleLike(id)}/>
        )
    })
    return(
        <ul className="app-list list-group">
           {elements}
        </ul>
    );
}

export default AppList;