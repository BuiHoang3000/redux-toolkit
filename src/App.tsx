import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//
import './App.css';
import DefaultLayout from './layouts';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
