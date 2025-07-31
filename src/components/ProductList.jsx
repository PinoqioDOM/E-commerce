import { mockProducts } from '../Product.js';

const ProductList = () => {
  return (
    <div className="product-list">
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {mockProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> ${product.price}{' '}
              {product.originalPrice > product.price && (
                <span style={{ textDecoration: 'line-through', color: 'red' }}>
                  ${product.originalPrice}
                </span>
              )}
            </p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Rating:</strong> {product.rating} ({product.reviewCount} reviews)</p>
            <p><strong>Stock:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;