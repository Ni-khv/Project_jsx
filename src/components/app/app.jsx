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
    this.state = {
       data: [
        {name: 'Ивашенюта Н.' , salary:30000,increase: false, like: true, id:1},
        {name: 'Полова В.' , salary:30000,increase: true, like: false, id:2},
        {name: 'Ротару А.' , salary:30000,increase: false, like: false, id:3}
      ]
    }
    this.maxId = 4;
  }


  deleteItem = (id) =>{
    this.setState(({data}) => {
      

      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }
     
     addItem = (name, salary,) => {
      const newItem = {
          name, 
          salary,
          increase: false,
          like: false,
          id: this.maxId++
      }
      this.setState(({data}) => {
          const newArr = [...data, newItem];
          return {
              data: newArr
          }
      });
    }


    onToggleIncrease =(id) =>  {
      this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);

        const old = data[index];
        const newItem = {...old, increase : !old.increase};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        return{
          data: newArr
        }
      })
  }

    onToggleLike =(id) =>  {
        console.log(`Like this ${id}`);
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
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleLike={this.onToggleLike}/>
            <AppAdd onAdd={this.addItem}/>
          
            
    
            
        </div>
      );
    }


  
}

export default App;