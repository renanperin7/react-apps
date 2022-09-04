import './App.css';

import { useState, useEffect } from 'react'

// Algum efeito vai ser originado por meio de uma ação

function App() {

  const [count, setCount] = useState(0)

  const [countB, setCountB] = useState(10)

  const [user, setUser] = useState()


  // 1 - utilização
  useEffect(() => {

    console.log("Roda a cada renderização!")

  })

  // 2 - array de dependências
  // Só roda quando o [count] for alterado
  useEffect(() => {
    console.log("Só roda ao incrementar valor!")
  },[count])

  // 3 - array de dependências vazio
  // Só roda uma vez, muito utilizado para utilização de dados externos, API.
  useEffect(() => {
    console.log("Só roda uma vez!")
  }, [])

  // 4 - clean up function
  // Para eventos de click e não travar a aplicação com muitos eventos, é necessário limpar
  useEffect(() => {

    const timer = setTimeout(()=>{

      console.log(`O incrementador foi alterado ${count} vezes`)

    }, 2000)

    return () => {
      clearTimeout(timer)
    }

  }, [count])

  // 5 - fetch com useEffect
  useEffect(()=>{
    fetch("https://api.github.com/users/matheusbattisti")
      .then((res)=> res.json())
      .then((json)=> setUser(json))
  }, [])

  return (
    <div className="App">
      <div>
        <button onClick={()=> setCount((prevCount) => prevCount + 1)}>Renderizar</button>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={()=> setCountB((prevCount) => prevCount + 1)}>Renderizar 2</button>
        <p>{countB}</p>
      </div>
      {user && (
        <div>
          <p>Dados do usúario:</p>
          <h1>Nome: {user.name}</h1>
          <p>
            Site: <a href={user.blog}>{user.blog}</a>
          </p>
          <img src={user.avatar_url} />
      </div>)}
    </div>
  );
}

export default App;
