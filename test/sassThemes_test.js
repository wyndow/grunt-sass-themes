var grunt = require('grunt');

String.prototype.removeWhitespace = function () {
  return this.replace(/(\s)/gm, '');
};

exports.sassThemes = {
  main: function (test) {
    test.ok(true, 'one test is valid');

    test.done();
  }
};