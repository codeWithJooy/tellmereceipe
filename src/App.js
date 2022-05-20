import './App.css';
import {useState} from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Splash from './Pages/Splash'
import Home from './Pages/Home'
import Search from './Pages/Search'
import ReceipeList from './Pages/ReceipeList'
import Receipe from './Pages/Receipe'
import Category from './Pages/Category'

function App() {
  const [cuisine,setCuisine]=useState('')
  const [category,setCategory]=useState('')
  const [which,setWhich]=useState('cuisine')
  const [receipeId,setReceipeId]=useState('')
  const [receipeBack,setReceipeBack]=useState('')
  return (
  
    <BrowserRouter >

    <Switch>
       <Route path="/" component={Splash} exact/> 
       <Route 
             path="/home"
             render={()=><Home setId={setReceipeId} 
                               setReceipeBack={setReceipeBack}
                               setCuisine={setCuisine}
                               setWhich={setWhich}/>}
            
        />
        <Route 
            path="/search"
            component={Search}
        />
        <Route 
             path="/category"
             render={()=><Category setCategory={setCategory}
                                   setWhich={setWhich}/>}
        />
        <Route 
             path="/receipelist"
             render={()=><ReceipeList cuisine={cuisine}
                                      category={category}
                                      which={which}
                                      setReceipeId={setReceipeId}
                                      setReceipeBack={setReceipeBack} />}
        />
        <Route 
            path="/receipe"
            render={()=><Receipe receipeId={receipeId} backPage={receipeBack} />}
        />
        {/* <Route 
             path="/cuisinereceipe"
             render={()=><CuisineReceipe cuisine={cuisine}
        />}/>
        <Route path='/receipe' component={ReceipePage} />   */}
    </Switch>
    
    </BrowserRouter>

  );
}

export default App;
