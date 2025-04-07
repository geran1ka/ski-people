import { createElement } from '../script/modules/utils.js';

export const renderContainer = ({ classN, children }) =>
  createElement(
    'div',
    {
      className: classN ? `container ${classN}` : 'container',
    },
    { append: children },
  );
