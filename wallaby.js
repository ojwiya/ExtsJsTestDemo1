module.exports = function (wallaby) {
  return {
    files: [
      'app/**/*.js'
    ],

    tests: [
      'app-test/**/*.js'
    ]
    ...
    // for node.js tests you need to set env property as well
    // https://wallabyjs.com/docs/integration/node.html
  };
};
