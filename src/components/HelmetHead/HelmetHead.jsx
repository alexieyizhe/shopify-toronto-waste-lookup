/* --- Packages and Components --- */
import React from 'react';
import Helmet from 'react-helmet';

/* --- Images & Other Assets --- */
import Favicon from '../../assets/images/favicon.png';

/* --- Component [STATELESS] --- */
export default () => (
  <Helmet>
    <title>Waste Lookup TO</title>
    <meta
      name="description"
      content="A lookup tool for waste items and their disposal methods in the City of Toronto."
    />
    <meta
      name="keywords"
      content="toronto, waste, lookup, wizard, search, garbage, trash, disposal, methods, shopify, please, hire, me"
    />
    <link
      rel="icon"
      href={Favicon}
      sizes={['16x16', '32x32', '64x64', '128x128']}
      type="image/png"
    />
  </Helmet>
);
