import { helper } from 'ember-helper';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import { isPresent } from 'ember-utils';

function nextIndex(length, currentIdx) {
  if (currentIdx === -1 || currentIdx + 1 === length) {
    return 0;
  }

  return currentIdx + 1;
}

export function toggle([prop, obj, ...values]) {
  return function() {
    let currentValue = get(obj, prop);

    if (isPresent(values)) {
      let currentIdx = values.indexOf(currentValue);
      let nextIdx = nextIndex(get(values, 'length'), currentIdx);

      return set(obj, prop, values[nextIdx]);
    }

    return set(obj, prop, !currentValue);
  };
}

export default helper(toggle);
