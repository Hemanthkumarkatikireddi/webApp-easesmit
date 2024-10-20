# EASESMITH E-Commerce Listing Page Project

## Project Overview

This project is an e-commerce listing page built with **React** and styled with **Tailwind CSS**. The goal was to implement an e-commerce page based on the provided Figma design, with the following features:

- Display a list of products in a grid.
- Options to view product details and add products to the cart.
- A modal to confirm adding products to the cart.
- Pagination to navigate through multiple product listings.
- A custom "Thank You" page after viewing a product.

## Technologies Used

- **React**: For building the UI components and handling state.
- **Tailwind CSS**: For styling the application and ensuring a responsive design.
- **React Router Dom**: For routing between the product listing page and the custom "Thank You" page.
- **React Hooks**: Specifically, `useState` for managing state such as the products shown, pagination, and cart details.
- **React Icons & Font Awesome**: For displaying icons in the header (profile and cart icons).

## Features

1. **Header Section**

   - Contains a search bar for searching products.
   - Displays profile and cart icons (using **Font Awesome** and **React Icons**).

2. **Product List Section**

   - Displays products in a grid format.
   - Each product has options to "View Product" and "Add to Cart".
   - On clicking "View Product," the user is redirected to a custom **Thank You** page.
   - On clicking "Add to Cart," a modal pops up with product details and an option to confirm adding to the cart.

3. **Add to Cart Modal**

   - The modal opens when "Add to Cart" is clicked.
   - It displays product details and confirms adding the product to the cart.
   - The cart count is updated and displayed in the header.

4. **Pagination**

   - Implemented using a "Load More" button.
   - Initially displays a few products, and more products are appended when the button is clicked.

5. **Custom "Thank You" Page**
   - When the "View Product" button is clicked, the user is taken to a **Thank You** page that acknowledges their interest in the product.

## Installation & Running the Project

1. **Clone the Repository**
   ```bash
   git clone <your-repo-url>
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd <project-directory>
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```
4. **Run the Project**
   ```bash
   npm start
   ```
5. **View the Application** Once the project is running, open your browser and navigate to
   ```http
   http://localhost:3000/
   ```

## Live Demo

The project is deployed and accessible at:
[Live Demo](https://easesmith-webapp.onrender.com) on Render

You can visit the deployed version of the website using the above link.
