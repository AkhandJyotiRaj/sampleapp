# ShopHub - Simple Shopping Website

A simple shopping website built with Node.js and Express.js.

## Features

- **Product Catalog**: Browse through available products
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add/remove items and manage quantities
- **Checkout**: Complete purchase with shipping and payment details
- **Order Confirmation**: Receive confirmation for completed orders
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
shopping-website/
├── server.js              # Main Express server
├── package.json          # Project dependencies
├── views/                # EJS templates
│   ├── index.ejs        # Home/Products page
│   ├── product.ejs      # Individual product page
│   ├── cart.ejs         # Shopping cart
│   ├── checkout.ejs     # Checkout page
│   ├── confirmation.ejs # Order confirmation
│   └── 404.ejs          # 404 error page
├── public/              # Static files
│   └── css/
│       └── style.css    # Stylesheet
└── README.md            # This file
```

## Requirements

- Node.js (v12 or higher)
- npm

## Installation

1. Navigate to the project directory:
```bash
cd shopping-website
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Usage

1. **Browse Products**: On the home page, you'll see a list of available products
2. **View Details**: Click on "View Details" to see more information about a product
3. **Add to Cart**: Click "Add to Cart" to add items to your shopping cart
4. **View Cart**: Click the cart icon in the navigation to view your cart
5. **Checkout**: Click "Proceed to Checkout" to complete your purchase
6. **Place Order**: Fill in shipping and payment information to place your order

## Features Explained

### Shopping Cart
- Add multiple products
- Update quantities
- Remove items
- View total price
- Persistent within session

### Checkout
- Enter shipping information
- Enter payment details
- Review order summary
- Complete purchase

### Order Confirmation
- View order number
- Order date and total
- List of purchased items
- Confirmation message

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Templating**: EJS
- **Styling**: Custom CSS with responsive design

## Sample Products

The application comes with 5 sample products:
1. Laptop - $999.99
2. Phone - $699.99
3. Tablet - $399.99
4. Headphones - $199.99
5. Smartwatch - $299.99

## Notes

- Products data is stored in memory (will be reset on server restart)
- Shopping cart is session-based (will be cleared on browser refresh)
- Payment information is not actually processed (demo purposes only)
- For production, integrate with a real payment gateway and database

## Future Enhancements

- Add product database (MongoDB/MySQL)
- Implement user authentication
- Add product search and filtering
- Integrate payment gateway (Stripe, PayPal)
- Add order history and tracking
- Implement email notifications
- Add product reviews and ratings

## License

ISC

## Author

Shopping Website Demo
