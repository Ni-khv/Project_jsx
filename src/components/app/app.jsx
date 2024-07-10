import AppInfo from '../app-info/app-info'
import AppSearch from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import AppList from '../employees-list/employees-list';
import AppAdd from '../employees-add-form/employees-add-form';
import './app.css';

function App() {
  return (
    <div className="app">
        <AppInfo/>
        <div className="search-panel">
            <AppSearch/>
            <AppFilter/>
        </div>
        <AppList/>
        <AppAdd/>
      
        

        
    </div>
  );
}

export default App;