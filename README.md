# Travel Booking System- Implementing flight search, CodSoft Internship Level 2 Task 2 of Web Development

## Introduction

This is a Travel Booking System that allows users to search for real-time flights and provides authentication functionality. It's a Level 2 task as part of the CodSoft internship.

## Project Description

Travel Booking Systems come in various forms, including flights, hotels, and transport. This project focuses on real-time flight search functionality. Key features include:

- User Authentication: Users can register and log in securely.
- Route Protection: Certain routes are protected and accessible only to authenticated users.
- Cloud Database: MongoDB Atlas is used as the cloud database for storing user information and booking history.
- API Integration: The project uses the aviationstack API to provide real-time flight information, including status, airports, flights, history, and availability around specific locations.
- Dynamic Rendering: Flight data retrieved from the API is dynamically rendered on the website.
- Express.js: The project is built on the Express.js framework, making it highly efficient and scalable.

## Getting Started

To set up and run this project locally, follow these steps:

1. Clone this repository to your local machine.

1. Install the required dependencies by running:
   - ``` npm install ```
1. Create a .env file in the project root directory and add the following environment variables-
   - API_KEY = YOUR AVIATIONSTACK API KEY- you get this after you sign up in aviation stack
     MONGODB_URI = YOUR MONGODB URI atlas or local
1. Start the application: ``` npm start ``` OR ``` npm run dev ``` to run with nodemon
1. Open your web browser and access the application at `http://localhost:3000`.

## Usage
1. Open ```http://localhost:3000``` in your browser.
2. Register yourself with any fake email and fake password. DO NOT USE ORIGINAL EMAIL OR PASSWORD.
3. Login with your email and password.
4. Enter details in the form.
5. Click Search.
6. After few seconds, you will see real time flights based on any IATA you provided for departure and arrival and the flight status.
7. Website design is responsive and below (near the footer) are my social media links, feel free to connect or reach out or provide more suggestions.
8. Finally you can logout by clicking the button at the top right corner.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Passport.js
- BCrypt
- Aviationstack API
- EJS and EJS layouts
- axios
- mongoose
- connect-flash
- express-session and dotenv

## Limitations

- This is a 0 cost project and thus comes with some limitations-
- API is only restricted for 1000 calls and only allows iata codes and current date only.
- In the form, if you want to search for international flights, enter the IATA code of the city or aitport at departure and arrival inputs respectively otherwise choose your indian city from the list provided in the form
- Hotels and car booking is not available as all the APIs for that are paid and this is a free project. Flight bookings also cannot be implemented in real as it may cost more money.

## Future Steps

- Search for free or cheap APIs for hotels, car bookings and flight bookings
- Implement Google Auth and more powerful authentication features
- Forgot password feature
- Deploying the website to a secure domain
- Adding rate limits and protection against sql injections or dos attacks
- Scaling up the database to a more reliable one
  



