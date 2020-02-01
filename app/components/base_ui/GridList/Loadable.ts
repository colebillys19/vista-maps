/**
 *
 * Asynchronously loads the component for GridList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
