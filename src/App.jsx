import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleList from './pages/ArticleListPage';

const routes = [{
  path: '/',
  element: <HomePage />
}, {
  path: '/about',
  element: <AboutPage />
},{
  path: '/articlelist',
  element: <ArticleList />
},{
  path: '/article',
  element: <ArticlePage />
}
]

const router = createBrowserRouter(routes);
function App() {

  return (
    
    <RouterProvider router={router} />
    
  );
}

export default App
