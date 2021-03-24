const brand = process.env.APP_BRAND

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: [
    //     ['module-resolver', {
    //     root: [`./${brand}`, './shared']
    //     }]
    // ]
  };
};
