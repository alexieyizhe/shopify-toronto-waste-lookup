# Toronto Waste Lookup
A tool to look up proper disposal methods for waste items, with information sourced from the Toronto Waste Wizard Database.


### Motivation
This is my attempt at helping the citizens of Toronto search up waste items. It was created as part of the [Shopify Front End Challenge for Summer 2019](https://cdn.shopify.com/static/web-eng-challenge-summer-2019/index.md), and is live at [torontowastelookup.ml](https://torontowastelookup.ml/)!  


### Features
Along with the challenge specs, I decided to add some extras to those that were set out in the challenge description. As of completion, the app has:

 - 🎨 A responsive design with separate mobile/tablet views
 - 🎉 Items that can be dragged to be reordered that was implemented using [the Shopify Draggable library](https://shopify.github.io/draggable/).
 - 💾 Caching using local storage on device. It saves previous favourites, search queries, results. It also saves all waste items from the last time it checked the database to reduce amount of API calls, and refreshes every 24 hours.
 - 🌠 Animations to improve the user experience for items, favouriting, searching, etc
 - 📸 Snapshot tests using Jest and react-test-renderer (more tests would probably be added if I had some extra time)
 - 💄 Small stylistic improvements like a favicon, status messages, messages telling the user their favs are empty, etc
 - ✨ Consistent themes and animations using a predefined data file, as well as styled-components and its ThemeProvider tool  


### A Learning Experience
I had a lot of fun working on this challenge, and I definitely improved a lot and learnt some new skills even from the few days that I worked on this project. I learned how to work with local storage as well as dived more in depth and expanded my understanding of the new React Context API.

I definitely did a lot of Googling, Stack Overflowing, and head scratching, but it was a great experience 😁 I even think this tool could be usable if the Toronto Waste Wizard Database did not already have a web interface! Thanks for putting up the challenge, Shopify!  


### Development
#### Setting up

- Use `git clone` to clone this repository. Alternatively, download the source code.
- Make sure required dependencies have been installed using `npm install`.

#### Development and testing

- Execute:
  - `gatsby develop` to view site in development mode with hot reloading enabled.

#### Building for production

- Run `gatsby build` to generate a production optimized build. Files and artifacts will be stored in the `/static` directory.
- Run `gatsby serve` for a local production version of the site.
