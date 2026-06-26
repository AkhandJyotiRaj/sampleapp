const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sample products data
const products = [
  { id: 1, name: 'Laptop', price: 999.99, image: 'laptop.jpg', description: 'High-performance laptop' },
  { id: 2, name: 'Phone', price: 699.99, image: 'phone.jpg', description: 'Latest smartphone' },
  { id: 3, name: 'Tablet', price: 399.99, image: 'tablet.jpg', description: 'Portable tablet device' },
  { id: 4, name: 'Headphones', price: 199.99, image: 'headphones.jpg', description: 'Wireless headphones' },
  { id: 5, name: 'Smartwatch', price: 299.99, image: 'watch.jpg', description: 'Smart wearable device' }
];

// Session cart (in-memory)
let cart = [];

// Routes
app.get('/', (req, res) => {
  res.render('index', { products });
});

app.get('/product/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).render('404');
  }
  res.render('product', { product });
});

app.post('/add-to-cart', (req, res) => {
  const { productId } = req.body;
  const product = products.find(p => p.id === parseInt(productId));
  
  if (product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    res.json({ success: true, cartCount: cart.reduce((sum, item) => sum + item.quantity, 0) });
  } else {
    res.status(404).json({ success: false, message: 'Product not found' });
  }
});

app.get('/cart', (req, res) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  res.render('cart', { cart, total: total.toFixed(2) });
});

app.post('/remove-from-cart', (req, res) => {
  const { productId } = req.body;
  cart = cart.filter(item => item.id !== parseInt(productId));
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  res.json({ success: true, cart, total: total.toFixed(2) });
});

app.post('/update-quantity', (req, res) => {
  const { productId, quantity } = req.body;
  const item = cart.find(i => i.id === parseInt(productId));
  
  if (item) {
    if (quantity <= 0) {
      cart = cart.filter(i => i.id !== parseInt(productId));
    } else {
      item.quantity = parseInt(quantity);
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    res.json({ success: true, total: total.toFixed(2) });
  }
});

app.get('/checkout', (req, res) => {
  if (cart.length === 0) {
    return res.redirect('/');
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  res.render('checkout', { cart, total: total.toFixed(2) });
});

app.post('/place-order', (req, res) => {
  if (cart.length === 0) {
    return res.status(400).json({ success: false, message: 'Cart is empty' });
  }
  
  const order = {
    orderId: 'ORD' + Date.now(),
    items: cart,
    total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2),
    date: new Date().toLocaleDateString()
  };
  
  cart = [];
  res.render('confirmation', { order });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

// Start server
app.listen(PORT, () => {
  console.log(`Shopping website running at http://localhost:${PORT}`);
});
