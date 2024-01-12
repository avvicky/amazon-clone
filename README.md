# Amazon Clone

![Amazon Clone](https://github.com/avvicky/amazon-clone/raw/main/public/amazon-clone.png)

## Overview

This repository contains the source code for an Amazon clone, a web application built using React.js for the frontend and Firebase for the backend. The goal of this project is to replicate the basic functionalities of the Amazon website, allowing users to browse products, add items to the cart, and proceed to checkout.

## Features

- **Product Listing**: View a list of products with details such as title, price, and image.
- **Shopping Cart**: Add and remove items from the shopping cart.
- **User Authentication**: Sign up and log in to an account.
- **Checkout Process**: Complete the purchase with a simulated payment process.
- **Order History**: View the history of past orders.

## Technologies Used

- React.js
- Firebase (Authentication and Firestore)
- React Router
- Material-UI
- HTML/CSS

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/avvicky/amazon-clone.git
   ```

2. Install dependencies:

   ```bash
   cd amazon-clone
   npm install
   ```

3. Set up Firebase:
   - Create a new project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication and Firestore.
   - Copy the Firebase configuration details and replace them in `src/firebase.js`.

4. Run the application:

   ```bash
   npm start
   ```

   The app should be accessible at `http://localhost:3000` by default.

## Folder Structure

- **`public`**: Static assets and the main HTML file.
- **`src`**: Source code for the React application.
  - **`components`**: Reusable React components.
  - **`context`**: Context providers for global state management.
  - **`firebase`**: Firebase configuration and utility functions.
  - **`pages`**: React components representing different pages of the application.
  - **`styles`**: Stylesheets for the application.
  - **`App.js`**: Main component where the app is initialized.
  - **`index.js`**: Entry point of the application.

Feel free to explore, contribute, and use this project as a learning resource or starting point for your own e-commerce applications. Happy coding!
