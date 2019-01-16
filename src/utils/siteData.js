// should refactor into json and move into data folder later

export const siteTheme = {
  colors: {
    primary: '#1d5a94',
    secondary: '#23975e',

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

export const resultsEmptyPlaceholder = 'No results found. Try searching for items above!';

export const favsEmptyPlaceholder = 'You have no favourites. Try adding some with the star icon next to the item name!';

export const siteSubtitle = 'Favourites';

export const wasteDataAPIEndPoint = 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000';
