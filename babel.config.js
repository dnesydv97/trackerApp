module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/',
          '@shared/front/*': './src/shared/front/*',
          '@designSystem': './src/designSystem/',
        },
      },
    ],
  ],
};
