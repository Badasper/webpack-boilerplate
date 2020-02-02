import * as $ from 'jquery'

function createAnalitics(): object {
  let counter = 0;
  let isDestroyed: boolean = false;

  const listener = (): number => counter++;
  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
    },

    getClicks() {
      if (isDestroyed) {
        return 'Analytics is destroed!';
      }
      return counter;
    }
  };
};

window['analytics'] = createAnalitics();