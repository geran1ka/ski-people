import { createElement } from '../script/modules/utils.js';

export const renderTable = ({ className, data }) => {
  const items =
    data.map(item =>
      createElement('tr', {
        className: 'table__row',
        innerHTML: `
        <td class="table__field">${item.field}</td>
        <td class="table__value">${item.value}</td>
      `,
      }),
    ) || [];

  return createElement(
    'table',
    {
      className: `${className} table`,
    },
    {
      appends: [...items],
    },
  );
};
