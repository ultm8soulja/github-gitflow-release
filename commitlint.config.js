module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [1, 'always', 150],
    'subject-case': [2, 'always', ['sentence-case']],
  },
};
