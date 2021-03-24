const brand = process.env.APP_BRAND

module.exports = function({ config }) {
    // mutate the config before returning it.
    config.slug = 'new slug'
    const brandConfig = require(`./app.${brand}.json`)
    return {
        ...config,
        ...brandConfig
    };
 }
