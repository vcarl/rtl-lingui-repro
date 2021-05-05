module.exports = {
  resolver: {
    // eslint-disable-next-line global-require
    extraNodeModules: require("node-libs-react-native"),
  },
  detox: {
    // do not autolink detox
    platforms: {
      ios: null,
      android: null,
    },
  },
};
