# BarberShop WebApplication

 This React/Node/Express/Passport application is meant to provide a small-businesses an App with the same style, responsivness and utility that larger corporate hair salons have. Yet, The App is still best suited for sole-propreitor establishments as the App allows you to schedule appointments with a specific stylist, leaving the customer a more personalized experience. The admin page allows the administrator to view employees and their schedules. The employee page allows employees to make new appointments and handle existing ones. 


## Create-React-App 
This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Prerequisites 
You will want to modify the the Node Mail Server to send emails to the correct email. Additionally, you will want to remove the links for the three background pictures and the logo all in the customer page and replace with your own. Headings for each image can also be easily changed to suit your establishment. 

## Usage

## Customer Page
The landing page is a standard business static site. Allows you to find contact information and location. Signing up, allows you to make an appointment with a barber of your choice that 

## Employee Page

## Admin Page
* Employee Information Tab
Populating on the left side of the page, the list of employees. In the center exists the currently selected employee's Information. 
Clicking on the Add Employee button will bring up a modal that allows entry of a new employee. The red x button next to the Employee will remove that employee. 

* Employee Schedule Tab


## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/erict54757/Project-3/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors
* Nicole Barry
* Andrew Gallowitch
* Eric Taft

## Built With

* [Materialize](https://materializecss.com/getting-started.html) - The web framework used
* [React](https://reactjs.org/) - React APP
* [Express](https://expressjs.com/) - Used for routing
* [Passport JS](http://www.passportjs.org/) - Used for User Authentication
* [Node js](https://nodejs.org/en/) - Javascript Engine

## License

This project is licensed under the MIT License.
