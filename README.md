Full Stack Webapp

1) Clone starter boilerplate
2) Install dependencies
3) Go to the MySQL
    - Create a new schema -> bookstore
    - Create Tables
        - books
            - id, title, description, price, (fk)category_id, _created
        - categories
            - id, name, _created 
4) Connect this schema into express app `server/db`
5) Write CRUD queries for books
6) Write GET all query categories
7) Write REST API endpoints for books
8) Write REST API endpoint for categories
9) Go to Client Side:
    - `/` HomePage welcoming you to the bookstore
    - `/books` BooksPage shows all book titles and a small preview of the description/price, each item should have a button to get book details
    - `/books/new` NewBookPage has a form to add a new book
    - `/:bookid/details` BookDetailsPage specializes in showing a full book's details on the screen, also have 2 buttons, one to delete said book, and one to lead to an edit form page
    - `/:bookid/edit` EditBookPage is a pre-filled form that allows the user to edit any of the book's details, including a dropdown for a category