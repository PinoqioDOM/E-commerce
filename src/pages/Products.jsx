import { mockProducts } from '../Product.js';

const Products = () => {
  return (
    <div className="products-page">
      <div className="products-container">
        <h1>ყველა პროდუქტი</h1>
        
        <div className="products-grid">
          {mockProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.nameGe} />
                {!product.inStock && <span className="out-of-stock">მარაგში არ არის</span>}
                {product.originalPrice > product.price && (
                  <span className="discount-badge">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              
              <div className="product-info">
                <p className="brand">{product.brand}</p>
                <h3 className="product-name">{product.nameGe}</h3>
                <p className="product-description">{product.descriptionGe}</p>
                
                <div className="rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-text">({product.reviewCount})</span>
                </div>
                
                <div className="price-section">
                  <strong className="current-price">{product.price} ₾</strong>
                  {product.originalPrice > product.price && (
                    <span className="old-price">{product.originalPrice} ₾</span>
                  )}
                </div>
                
                <button 
                  className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'კალათაში დამატება' : 'მარაგში არ არის'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="products-summary">
          <p>სულ: {mockProducts.length} პროდუქტი</p>
          <p>ხელმისაწვდომი: {mockProducts.filter(p => p.inStock).length} პროდუქტი</p>
        </div>
      </div>
    </div>
  );
};

export default Products;