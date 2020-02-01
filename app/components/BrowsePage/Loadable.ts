/**
 *
 * Asynchronously loads the component for BrowsePage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
