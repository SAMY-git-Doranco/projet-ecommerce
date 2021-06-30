import "tailwindcss/tailwind.css"
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useEffect } from "react"
import './App.css';
import Article from './components/Article';
import AddArticle from "./pages/AddArticle";
import Home from "./pages/Home/Home";

function App() {



  return (


    <div className="App">
      {/* <Article title={Article.title}
        price={Article.price}
        description={Article.description}
        image={Article.image} /> */}

      <Router>
        <nav>
          <ul>
            <li><Link to='/'><h1>Bienvenue sur Chaussland !</h1></Link></li>
            <li><Link to='/addArticle'>Ajouter Article</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/addArticle' component={AddArticle} />
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='*' component={() => <h1>Bravo, vous avez trouvé la page 404!</h1>} />
        </Switch>
      </Router>
    </div>


  );
}

export default App;
