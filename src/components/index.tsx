// index.tsx
//
// This is equivalent to the 'main' function for our web app. It expects to run in context of the
// index.html file, and that there is an 'output' div to render into.

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { OnlineStore } from './OnlineStore';

ReactDOM.render(
  <OnlineStore storeId="some-merchant-id" storeName="Awesome Brewery" />,
  document.getElementById('output'),
);
