/**
 * eq block height
 */
export const matchHeight = (function () {
  'use strict';

  const elementClass = 'eqheight';

  const equalizeIt = function (elementClass) {

    let blocks = document.getElementsByClassName(elementClass);

    if (blocks) {

      let heights = [];
      let blockTopPos;

      for (let i = 0, x = blocks.length; i < x; i++) {

        // compare top position of blocks in order to identify a new row
        if (Math.floor(blocks[i].getBoundingClientRect().top) != blockTopPos) {
          // if value is different from previous: empty heights Array
          heights = [];
        }

        // get block’s top position
        let blockTopPos = Math.floor(blocks[i].getBoundingClientRect().top);

        if (blocks[i].style && blocks[i].style.height) {
          blocks[i].style.height = '';
        }

        // push block height in Array
        heights.push(blocks[i].clientHeight);

        // fire set style function on DOM element
        applyHeight(blocks[i], heights);

      }

    }

  };

  const applyHeight = function (el, heights) {

    // get max value from Array
    let max = Math.max.apply( Math, heights );

    el.style.height = max + 'px';

  };

  const run = function () {
    equalizeIt(elementClass);
  };

  run();

  window.onresize = run;

}());
