import { useEffect, useState } from "react"
import { Navbar } from "../../tienda/components/Navbar"
import axios from "axios";

export const Login = () => {

  const [data, setData] = useState(null)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
    
        const handleSubmit = (e) =>{
            e.preventDefault()
            axios({
                method: 'POST',
                baseURL: 'https://fakestoreapi.com',
                url: '/auth/login',
                data:{
                    username,
                    password,
                },
              })
                .then(({ data }) => {
                    setData(data)
                    localStorage.setItem('token', data.token)
                })
                .catch(err => console.dir(err))
        }

        

  return (
    <>
    <Navbar/>
    <div className="p-5 mt-5">
    <form className=" form-control-sm p-5 border border-4">
    <h1 >Iniciar sesión</h1>
  <div className="mb-3">
    <label 
      className="form-label"      
    >Nombre de usuario</label>

    <input 
      type = "text"
      className="form-control" 
      placeholder="username"
      name = "userName"
      // value = {username}
      onChange={(event) => setUsername(event.target.value)}
    />
  </div>
  <div className="mb-3">
    <label 
      
      className="form-label"
    >Contraseña</label>
    <input 
      type="password" 
      className="form-control" 
      placeholder="password" 
      // value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
  </div>
  <button onClick={handleSubmit} type="submit" className="btn btn-primary" >Iniciar sesion</button>
</form>
</div>
    </>
  )
}
