# Github Repository Listing
#### A Frontend Developer Assignment by Fyle
#### Deployed Site on Netlify: https://memories-project-swayam.netlify.app/

## How it works
* User Enters a username 
* If username exists we are forwarded to listing page and if not then we are notified that the user is not found
* At the listing page we have the userdetials and his repos details 
* Each page contains 6 repos and the other repositories are paginated.

## Important Info
* I haven't used Redux persist, localStorage etc. to persist user results so reloading the listing page will erase the current state and redirect the user to input page (implemented using wouter: a routing library for React)

## Technologies Used
* React + TypeScript (API Routes, Edge Middlewares)
* State management is done through useContext.
* Wouter: A lightweight routing library for React: Alternative to react-router for small projects ([see here](https://bundlephobia.com/package/wouter@2.8.0-alpha.2))
* Mantine: For styling ([see here](https://mantine.dev/))

## Run Locally
### 1. Clone the repository
```sh
$ git clone https://github.com/swayam-coder/fyle-assignment.git
```

### 2. Install Dependencies
```sh
$ npm install 
```

### 3. Run locally
```sh
$ npm start 
```