import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import '../sass/index.scss';
import DynamicElement from '../components/DynamicElement';
import Refs from '../components/Refs';
import DomInteraction from '../components/DomInteraction';
import ContextAPI from '../components/ContextAPI';
import Portals from '../components/Portals';
import RenderFragmentTips from '../components/RenderFragmentTips';
import RenderProps from '../components/RenderProps';
import HookDemo from '../components/Hooks';

/*

Advanced React Masterclass pt. 1

No focus on css, JUST on React (apologies for the inline css :D)

- Dynamic elements based on props
- Fantastic refs and how to use them
- How to render fragments from other apps via PureComponent and dangerouslySetInnerHtml... and React.memo
- Interaction w/ DOM (Popover example) & lifecycle methods best practices
- Portals
- Render props
- Hooks intro (this is the game changer!!!!)
- New Context API
*/

storiesOf('Dynamic elements', module)
  .add('default', () => (
    <DynamicElement />
  )
);

storiesOf('Render fragments tips', module)
  .add('default', () => (
    <RenderFragmentTips />
  )
);

storiesOf('Refs', module)
  .add('default', () => (
    <Refs />
  )
);

storiesOf('Dom interaction', module)
  .add('default', () => (
    <DomInteraction />
  )
);

storiesOf('Render props', module)
  .add('default', () => (
    <RenderProps />
  )
);

storiesOf('Portals', module)
  .add('default', () => (
    <Portals />
  )
);

storiesOf('Hooks', module)
  .add('default', () => (
    <HookDemo />
  )
);

storiesOf('New context API', module)
  .add('default', () => (
    <ContextAPI />
  )
);
