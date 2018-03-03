// reference: https://github.com/prettier/prettier#options

module.exports = {
    /**
     * Default value is 80. 80 is too small in wide screen.
     */
    printWidth: 120,
    /**
     * Why: Preferred in us.
     */
    singleQuote: true,
    /**
     * Why: ES compatibility is handled by TypeScript compilation.
     */
    trailingComma: 'all',
};