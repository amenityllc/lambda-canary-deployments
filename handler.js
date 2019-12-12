'use strict';

module.exports.hello = async event => {
  throw new Error("some error");
};
