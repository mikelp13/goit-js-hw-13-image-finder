import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { info, error, Stack, notice } from '@pnotify/core';

function queryInfo() {
  return info({
    text: 'Please enter a search query.',
    mode: 'light',
    styling: 'brighttheme',
    delay: 2000,
    maxTextHeight: null,
    stack: new Stack({
      dir1: 'down',
      dir2: 'right', // Position from the top left corner.
      firstpos1: 10,
      firstpos2: 10, // 10px from the top, 10px from the left.
    }),
  });
}
function queryNotice() {
  return notice({
    text: 'Sorry, nothing was found :(',
    mode: 'light',
    styling: 'brighttheme',
    delay: 2000,
    maxTextHeight: null,
    stack: new Stack({
      dir1: 'down',
      dir2: 'right', // Position from the top left corner.
      firstpos1: 10,
      firstpos2: 10, // 10px from the top, 10px from the left.
    }),
  });
}

function searchingError() {
  return error({
    text: 'Error! Something went wrong.',
    mode: 'light',
    styling: 'brighttheme',
    delay: 2000,
    maxTextHeight: null,
    stack: new Stack({
      dir1: 'down',
      dir2: 'right', // Position from the top left corner.
      firstpos1: 10,
      firstpos2: 10, // 10px from the top, 10px from the left.
    }),
  });
}

export { queryInfo, searchingError, queryNotice };
