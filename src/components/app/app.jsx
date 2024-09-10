import { Component } from 'react';

import AppInfo from '../app-info/app-info'
import AppSearch from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import AppList from '../employees-list/employees-list';
import AppAdd from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
       data: [
        {name: 'Ивашенюта Н.' , salary:30000, id:1},
        {name: 'Полова В.' , salary:30000, id:2},
        {name: 'Ротару А.' , salary:30000, id:3}
      ]
    }
  }


  deleteItem = (id) =>{
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);
      
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr =[...before, ...after];


      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }
    

    render() {
      return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <AppSearch/>
                <AppFilter/>
            </div>
            <AppList 
            data={this.state.data}
            onDelete={this.deleteItem}/>
            <AppAdd/>
          
            
    
            
        </div>
      );
    }


  
}

export default App;