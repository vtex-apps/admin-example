import { createSystem } from '@vtex/admin-core'

/**
 * Every admin app should have a unique system name. By doing
 * this you'll decreases the chances of having className conflicts
 * with other apps.
 */
export const system = createSystem('admin-example')
