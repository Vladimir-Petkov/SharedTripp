# MoneyGone

## Project setup
```
npm install
```

## The application

## The technologies

1. [ExpressJs] (https://expressjs.com/), a JavaScript web framework for Node.js;

2. [Handlebars] (https://handlebarsjs.com/), Minimal templating on steroids;


### Idea

Helps to travel in the world.

### Design

The app is fully responsible built with Handlebars. Layout looks good on laptops / desktops. The app has good ui and great ux!

### Endpoints

#### Users

* GET

   * `/register`
    
   * `/login`

* POST

    * `/register`
    
    * `/login`

    * `/logout`

#### Tasks

* GET

    * `/create`

    * `/details/:id`

* POST

    * `/delete/:id`


### Functionalities

#### Guests (not logged in) are allowed to 

* home

* register

* login

#### Users (logged in) are allowed to 

* logout

* create Expend

* details Expend

* delete Expend

