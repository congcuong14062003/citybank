import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from './routes';
import { DefaultLayout } from './components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
            <Routes>
                    {publicRouter.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                }
                            >
                                {route.childrenRouter &&
                                    route.childrenRouter.map((child, indexChild) => (
                                        <Route
                                            key={indexChild}
                                            path={child.path}
                                            element={child.component}
                                        />
                                    ))}
                            </Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
