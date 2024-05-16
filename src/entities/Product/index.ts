export { ProductList } from './components/ProductList/ProductList';
export type { Product, ProductCategory } from './model/types/product';
export { ProductDetails } from './components/ProductDetails/ProductDetails';
export type { ProductDetailsSchema } from './model/types/productDetailsSchema';
export {
	getProductDetailsError,
	getProductDetailsData,
} from './model/selectors/productDetailsSelectors/productDetailsSelectors';
export { getTilesQuantity } from './lib/helpers/getTilesQuantity';
