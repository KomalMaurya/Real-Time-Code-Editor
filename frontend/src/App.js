import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';

function App() {
  axios.default.withCredentials=true;
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://real-time-code-editor-gamma.vercel.app/",{name,email,passwprd}
               .then(result =>console.log(result))
               .catch(err=>console.log(err))
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/editor' element={<EditorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
