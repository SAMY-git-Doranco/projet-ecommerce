import "tailwindcss/tailwind.css"
import { useEffect } from "react"
import './App.css';

function App() {

  useEffect(() => {
    fetch("http://localhost:4000/articles", {
      method: "GET"
    }).then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }, [])

  return (
    <div className="App">
      <Article  title={title}
              price={price}
              description={description}
              image={image} />
    </div>
  );
}

export default App;
