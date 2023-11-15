import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link
            to={`/products/${product.id}`}
            className="group block overflow-hidden"
        >
            <div className="max-w-2xl mx-auto h-[500px]">
                <div className="bg-white shadow-md rounded-lg max-w-sm">
                    <img
                        className="rounded-t-lg p-8 w-[300px]"
                        src={product.image}
                        alt="product image"
                    />

                    <div className="px-5 pb-5">
                        <h3 className="text-gray-900 font-semibold text-xl tracking-tight">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight
                            Sport
                        </h3>

                        <div className="flex items-center mt-2.5 mb-5">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                Ratings: {product.rating.rate} (
                                {product.rating.count} reviews)
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900">
                                ${product.price}
                            </span>
                            <a
                                href="#"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
