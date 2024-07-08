import AppInfo from '../app-info/app-info'
import AppSearch from '../search-panel/search-panel'

import './app.css';

function App() {
  return (
    <div className="app">
        <AppInfo/>
        <div className="search-panel">
            <AppSearch/>
        </div>

        
    </div>
  );
}

export default App;