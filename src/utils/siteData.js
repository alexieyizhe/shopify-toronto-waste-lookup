// should refactor into json and move into data folder later

export const siteTheme = {
  colors: {
    primary: '#1d5a94',
    secondary: '#23975e',
    secondaryBg: '#b5d2c4',

    warning: '#F4A867',
    error: '#F07285',

    offBlack: '#333'
  },
  styling: {
    bodySpacing: '1vw',
  }
};

export const siteTitle = 'Toronto Waste Lookup';

export const searchBarEmptyPlaceholder = 'Enter a search';

export const searchResultsPlaceholders = {
  empty: {text: 'No results found. Try changing your search?', color: siteTheme.colors.warning},
  ready: {text: 'Search for a waste item above!', color: siteTheme.colors.secondary},
  waiting: {text: 'Fetching latest data from the Toronto Waste Wizard...', color: 'grey'},
  error: {text: 'An error occurred while fetching data. Please try refreshing the page.', color: siteTheme.colors.error},
  searching: {text: 'Searching for matching items...', color: siteTheme.colors.secondary},
}

export const favsEmptyPlaceholder = 'You have no favourites. Try adding some with the star icon next to a waste item\'s name!';

export const siteSubtitle = 'Favourites';

export const wasteDataAPIEndPoint = 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000';

export const FetchStateEnum = { ERROR: 0, WAITING: 1, READY: 2, SEARCHING: 3 };

export const LocalStorageKeysEnum = {
  lastAPIResults: 'wasteItems',
  lastSearchQuery: 'searchQuery',
  lastSearchResults: 'searchResults',
  lastFavourites: 'currentFavs',
  lastStatus: 'appStatus',
};
