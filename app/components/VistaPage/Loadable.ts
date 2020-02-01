/**
 *
 * Asynchronously loads the component for VistaPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
