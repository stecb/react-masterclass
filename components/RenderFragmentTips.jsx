/*
  LEVEL: EASY

  Say you have a fragment as a string coming 
  from a server - server call, let's insert into
  our react tree but after it's rendered we don't
  want react to render it again, as we'd lose any
  app-specific client-side interactions (if any, loaded 
  via app-specific bundle)
*/


import React from 'react';

export default function RenderFragmentTips() {
  return (
    <div>RFT</div>
  )
}
