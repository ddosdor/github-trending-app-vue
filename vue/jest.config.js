module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  roots: [
    '__tests__',
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
  moduleNameMapper: {
    '^@[/](.+)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
};
