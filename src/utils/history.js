import {
  createMemoryHistory,
  createBrowserHistory as createHistory,
} from 'history';

/**
 * Creates history object for managing session history
 */
const url = '/';
// Create a history depending on the environment
export const history =
  typeof document === 'undefined'
    ? createMemoryHistory({
      initialEntries: [url],
    })
    : createHistory();

export default history;
