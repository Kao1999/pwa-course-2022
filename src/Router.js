import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.js';
import Profile from './Profile.js'

function Router()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path= '/' element= { <App/> } />
                <Route path= '/profile' element= { <Profile/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;