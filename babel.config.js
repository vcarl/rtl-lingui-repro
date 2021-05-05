module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@lingui/babel-preset-react",
  ],
  plugins: [["@babel/plugin-syntax-dynamic-import"], ["macros"]],
};
