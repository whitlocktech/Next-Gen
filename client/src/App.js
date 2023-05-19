import './App.css'

import Navbar from './components/navbar/navbar.components.jsx'
import CardList from './components/cardList/cardList.components.jsx'

const App = () => {
    return (
      <div className="App">
        <Navbar className='navbar'/>
        <h1 className='bodyTitle'>Future Home of Next-Gen Gaming</h1>
        <CardList className='cardList'/>
      </div>
    )
  }

export default App;
