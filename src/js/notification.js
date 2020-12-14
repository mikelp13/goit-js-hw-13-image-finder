import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { info, error, Stack, notice } from '@pnotify/core';

const options = {
  mode: 'light',
  styling: 'brighttheme',
  delay: 2000,
  maxTextHeight: null,
  stack: new Stack({
    dir1: 'down',
    dir2: 'right', // Position from the top left corner.
    firstpos1: 10,
    firstpos2: 10, // 10px from the top, 10px from the left.
  })
}

function queryInfo() {
  return info({
    text: 'Please enter a search query.',
    ...options,
    });
}

function queryNotice() {
  return notice({
    text: 'Sorry, nothing was found :(',
    ...options,
  });
}

function searchingError() {
  return error({
    text: 'Error! Something went wrong.',
    ...options,
  });
}

export { queryInfo, searchingError, queryNotice };
