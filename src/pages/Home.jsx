import { mockProducts } from '../Product.js';

const Home = () => {
  const featuredProducts = mockProducts.slice(0, 3); // პირველი 3 პროდუქტი
  const discountedProducts = mockProducts.filter(product => product.originalPrice > product.price);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>მოგესალმებით ჩვენს მაღაზიაში</h1>
          <p>იპოვეთ საუკეთესო ტექნიკა და გაკეთეთ ონლაინ შოპინგი</p>
          <button className="hero-btn">შოპინგის დაწყება</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <h2>რეკომენდებული პროდუქტები</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.nameGe} />
                  {product.originalPrice > product.price && (
                    <span className="discount-badge">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
                
                <div className="product-info">
                  <p className="brand">{product.brand}</p>
                  <h3 className="product-name">{product.nameGe}</h3>
                  
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
                  
                  <button className="add-to-cart-btn">
                    კალათაში დამატება
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discounted Products */}
      <section className="discount-section">
        <div className="container">
          <h2>ფასდაკლებული პროდუქტები</h2>
          <div className="products-grid">
            {discountedProducts.map(product => (
              <div key={product.id} className="product-card discount-card">
                <div className="product-image">
                  <img src={product.image} alt={product.nameGe} />
                  <span className="big-discount-badge">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </div>
                
                <div className="product-info">
                  <p className="brand">{product.brand}</p>
                  <h3 className="product-name">{product.nameGe}</h3>
                  
                  <div className="price-section">
                    <strong className="current-price">{product.price} ₾</strong>
                    <span className="old-price">{product.originalPrice} ₾</span>
                    <span className="savings">
                      თქვენ ზოგავთ {(product.originalPrice - product.price).toFixed(0)} ₾
                    </span>
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
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2>კატეგორიები</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>სმარტფონები</h3>
              <p>{mockProducts.filter(p => p.category === 'smartphones').length} პროდუქტი</p>
            </div>
            <div className="category-card">
              <h3>ლეპტოპები</h3>
              <p>{mockProducts.filter(p => p.category === 'laptops').length} პროდუქტი</p>
            </div>
            <div className="category-card">
              <h3>ყურსასმენები</h3>
              <p>{mockProducts.filter(p => p.category === 'headphones').length} პროდუქტი</p>
            </div>
            <div className="category-card">
              <h3>ტაბლეტები</h3>
              <p>{mockProducts.filter(p => p.category === 'tablets').length} პროდუქტი</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;