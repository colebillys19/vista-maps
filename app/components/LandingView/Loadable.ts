/**
 *
 * Asynchronously loads the component for LandingView
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
