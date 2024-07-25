# Project Name: Greenify
## Introduction

Greenify is an online nursery website where users can browse, filter, and search for plants and gardening products. Users can add products to their cart, proceed to checkout, and make payments securely via Stripe.js. The website also features a product and category management section for CRUD operations.

## Description

Greenify aims to provide a seamless online shopping experience for plant enthusiasts. The website offers a variety of features, including advanced filtering and searching, real-time updates for product management, and secure payment options. The user interface is designed to be intuitive and visually appealing, enhancing the overall user experience.

## Features
1. Public Routes: Accessible without authentication.
2. Product and Category Management:
  - Product List Table with image, title, price, category, and actions.
  - Action Buttons for updating and deleting products.
  - Adding or updating a Product form with category, title, price, quantity, description, rating, and image upload.
3. Product Browsing:
  - Filtering, Pagination, Sorting, and Searching.
  - Detailed Product Information.
4. Shopping Cart:
   - Add to Cart functionality with quantity management.
   - Proceed to Checkout option.

## Technology Stack
- Frontend: React, Redux
- Backend: Node.js, Express.js, Typescript
- Database: MongoDB

## Installation Guidelines
- [x] clone the repository
```
git clone repolink
```
- [x] Install Dependencies
```
npm install
```

## Configuration for server site

- [x] First of all clone the git repository of the server of the project. Then use npm install to install necessary packages. If not all dependencies are installed you need to install these
```
        "cors": "^2.8.5",
        "dotenv": "^16.4.5",
        "express": "^4.19.2",
        "mongoose": "^8.5.0"
```
- [x] For installing eslint and prettier for the project use the following command:
```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

```
```
npm install --save-dev prettier

```
```
npm install --save-dev eslint-config-prettier

```



- [x] You may need to install all the devDependencies.Your dependencies need to look like this.
```
    "@eslint/js": "^9.3.0",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/node": "^20.12.12",
    "@typescript-eslint/eslint-plugin": "^7.10.0",
    "@typescript-eslint/parser": "^7.10.0",
    "eslint": "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "globals": "^15.3.0",
    "prettier": "^3.2.5",
    "typescript": "^5.4.5",
    "typescript-eslint": "^7.10.0"
```

- [x] To compile you may use the command
```
npm run build
```
- [x] To start server you need to use
```
npm run start:dev
```
- [x] You may use these command using npm run 'your desired command' to get your desired functionality.These are all available in package.json file
```
    "start:prod": "node ./dist/server.js",
    "start:dev": " ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "lint": "eslint src --ignore-path .eslintignore --ext .ts",
    "fix": "npx eslint src --fix",
    "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
    "prettier:fix": "npx prettier --write src",
    "test": "echo \"Error: no test specified\" && exit 1"
```
- [x] Create a .env file
```
NODE_ENV= development
PORT=5000
DATABASE_URL=your_db_uri
```
















