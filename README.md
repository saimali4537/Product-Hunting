# Description

eCommerce platform built with the MERN stack & Redux. This app includes authentication, profiles, products catalog, shopping cart etc. Users can make purchases, review products, rate them. Authenticated admin users can modify products catalog, mark paid orders to delivery, give admin rights regular users. Payment system is developed with PayPal API.

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Technology stack

> ### FrontEnd
>
> - React
> - React Hooks
> - Redux with Hooks
> - React router
> - React bootstrap
>
> ### BackEnd
>
> - Node
> - Express
> - JWT
> - MongoDB
>   <br>

## Usage

<br>
### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'secret'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev
# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```
