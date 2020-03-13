/**
 *
 * Asynchronously loads the component for VistaView
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
