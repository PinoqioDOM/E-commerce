import { mockProducts } from '../Product.js';

const ProductCard = ({ product, onAddToCart }) => {
  // თუ product არ არის გადმოცემული, გამოიყენე პირველი mockProduct
  const productData = product || mockProducts[0];

  const discountPercentage = productData.originalPrice > productData.price 
    ? Math.round(((productData.originalPrice - productData.price) / productData.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (onAddToCart && productData.inStock) {
      onAddToCart(productData);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productData.image} alt={productData.nameGe} />
        
        {!productData.inStock && (
          <span className="out-of-stock-badge">მარაგში არ არის</span>
        )}
        
        {discountPercentage > 0 && (
          <span className="discount-badge">-{discountPercentage}%</span>
        )}
      </div>
      
      <div className="product-info">
        <p className="product-brand">{productData.brand}</p>
        <h3 className="product-name">{productData.nameGe}</h3>
        <p className="product-description">{productData.descriptionGe}</p>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(productData.rating) ? "star filled" : "star"}>
                ★
              </span>
            ))}
          </div>
          <span className="rating-text">
            {productData.rating} ({productData.reviewCount})
          </span>
        </div>
        
        <div className="product-price">
          <strong className="current-price">{productData.price} ₾</strong>
          {discountPercentage > 0 && (
            <>
              <span className="old-price">{productData.originalPrice} ₾</span>
              <span className="savings">
                ზოგავთ {(productData.originalPrice - productData.price).toFixed(0)} ₾
              </span>
            </>
          )}
        </div>
        
        <button 
          className={`add-to-cart-btn ${!productData.inStock ? 'disabled' : ''}`}
          onClick={handleAddToCart}
          disabled={!productData.inStock}
        >
          {productData.inStock ? 'კალათაში დამატება' : 'მარაგში არ არის'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;