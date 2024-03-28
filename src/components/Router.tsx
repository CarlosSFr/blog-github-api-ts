import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PostPage } from '../pages/PostPage';
import { DefaultLayout } from '../layouts/DefaultLayout';

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>} >
                <Route path="/" element={<Home/>} />
                <Route path="/postpage" element={<PostPage/>} />
            </Route>
        </Routes>
    )

}