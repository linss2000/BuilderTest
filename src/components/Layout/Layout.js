import React from 'react';


import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <div>
    <div>
    <Toolbar/>
    </div>
    <main>
    {props.children}
    </main>
  </div>
)

export default layout;
