export const createElement = (tag, attr, { append, appends, prepends, parent, cb } = {}) => {
  const element = document.createElement(tag);

  if (attr) {
    Object.assign(element, attr);
  }

  if (append && append instanceof HTMLElement) {
    element.append(append);
  }

  if (appends && appends.every(item => item instanceof HTMLElement)) {
    element.append(...appends);
  }

  if (prepends && prepends.every(item => item instanceof HTMLElement)) {
    element.prepend(...prepends);
  }

  if (parent && parent instanceof HTMLElement) {
    parent.append(element);
  }

  if (cb && typeof cb === 'function') {
    cb(element);
  }

  return element;
};

export const pluralizeCount = count => {
  const number = count % 100;

  if (number > 11 && number <= 19) {
    return 'товаров';
  } else {
    const lastDigit = number % 10;

    if (lastDigit === 1) {
      return 'товар';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return 'товара';
    } else {
      return 'товаров';
    }
  }
};
