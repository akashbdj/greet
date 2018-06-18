/**
 * Capitalize only the first character of
 * the given string
 *
 * Ex: akashbdj => Akashbdj
 *
 * @param {string} str
 */
export const capitalize = (str = '') => {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}
