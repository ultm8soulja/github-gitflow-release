module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'yarn test && yarn lint:fix',
    'pre-push': 'yarn test && yarn lint',
  },
};
