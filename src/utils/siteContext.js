import React from 'react';

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
  favs: new Set(), // TODO: make this into a set
  updateFavs: () => {}
});
