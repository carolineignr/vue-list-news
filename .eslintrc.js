module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
    "parser": "@babel/eslint-parser"
  },
  'plugins': [
    'vue'
  ]
  // 'rules': {
  //   'quotes': ['error', 'single'],
  //   'semi': ['error', 'always'],
  //   'indent': ['error', 2],
  //   'no-multi-spaces': ['error']
  // }
};
