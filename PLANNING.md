### Components

- PageHeader
- SearchBar
- SearchResults
  - _list of_ ItemCard
- SearchFavourites
  - _list of_ ItemCard
- ItemCard
  - `props`: `title`, `notes[]`



### Tech

Central global state store using React Context API?

Look into GraphQL for displaying search results

Fetch API for querying the Toronto Waste API





### Extra Features

1. Tests
2. Mobile responsive design
3. Use https://shopify.github.io/draggable/ to allow for moving each search result? Reorder favourites?
4. Cache API return results on local storage so less API calls?
5. Fuzzy search matching on keywords?
   - https://www.npmjs.com/package/fuzzysearch
   - https://github.com/bvaughn/js-search
   - https://github.com/krisk/fuse
