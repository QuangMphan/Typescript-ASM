import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ProductDetailPage from './pages/ProductDetailPage';
import Layout from './components/elements/Layout';
import AdminLayout from './components/elements/AdminLayout';
import AdminProductList from './pages/AdminProductList';
import AdminCreateProduct from './pages/AdminCreateProduct';
import AdminEditProduct from './pages/AdminEditProduct';

// prettier-ignore
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="products/:productId" element={<ProductDetailPage />}></Route>
                    <Route path="/profile" element={<ProfilePage />}></Route>
                </Route>

                <Route path="/" element={<AdminLayout />}>
                    <Route path="/admin/products" element={<AdminProductList />} />
                    <Route
                        path="/admin/products/create"
                        element={<AdminCreateProduct />}
                    />
                    <Route
                        path="/admin/products/edit/:productId"
                        element={<AdminEditProduct />}
                    />
                </Route>

                <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
