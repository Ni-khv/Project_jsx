import AppInfo from '../app-info/app-info'
import AppSearch from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import AppList from '../employees-list/employees-list';
import AppAdd from '../employees-add-form/employees-add-form';
import './app.css';

function App() {

    const data =[
      {name: 'Ивашенюта Н.' , salary:30000},
      {name: 'Полова В.' , salary:30000},
      {name: 'Ротару А.' , salary:30000}
    ];

    


  return (
    <div className="app">
        <AppInfo/>
        <div className="search-panel">
            <AppSearch/>
            <AppFilter/>
        </div>
        <AppList data={data}/>
        <AppAdd/>
      
        

        
    </div>
  );
}

export default App;