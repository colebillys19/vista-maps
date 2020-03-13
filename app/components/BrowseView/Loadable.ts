/**
 *
 * Asynchronously loads the component for BrowseView
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
