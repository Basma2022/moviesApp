module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@react-native)/', // Ignore node_modules except @react-native
  ],

  globals: {
    __DEV__: true,
  },
};
