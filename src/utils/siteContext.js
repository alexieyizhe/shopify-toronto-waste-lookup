import React from 'react';


// Default context seed data
export const wasteItems = [
  {
    title: 'Garbage (wrapping and tying)',
    body: [
      'Place item in the <strong>Garbage Bin.</strong>'
    ]
  },
  {
    title: 'Garbage (tying)',
    body: [
      'Place item in the <strong>Garbage (tying) Bin.</strong>'
    ]
  },
  {
    title: 'Garbage (wrapping) ',
    body: [
      'Place item in the <strong>Garbage (wrapping) Bin.</strong>'
    ]
  }
];

export const ItemsContext = React.createContext({
  items: wasteItems,
  favs: new Set(),
  updateFavs: () => {},
  updateSearch: () => {},
  startSearch: () => {}
});
