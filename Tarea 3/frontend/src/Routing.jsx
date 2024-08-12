import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './Landing.jsx';
import Entries from './Entries.jsx';

function Routing(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Landing/>}/>
                    <Route path={"/Entries"}>
                        <Route path=":user" element={<Entries/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing;