const { getDefaultConfig } = require('@expo/metro-config');
const brand = process.env.APP_BRAND

const defaultConfig = getDefaultConfig(__dirname)
const {
    resolver: {
        platforms,
        sourceExts
    }
} = defaultConfig
const brandSourceExts = [ `${brand}.ts`,`${brand}.tsx`,`${brand}.js`,`${brand}.jsx`,...sourceExts]

// defaultConfig.resolver.platforms = [`${brand}`,...platforms ]
defaultConfig.resolver.sourceExts = brandSourceExts

console.log('defaultConfig',defaultConfig)
module.exports =  defaultConfig
