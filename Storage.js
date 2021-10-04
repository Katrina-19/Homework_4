"use strict";

function Storage() {
  this.storage = {};
}

Storage.prototype.addValue = function (key,value) {
  this.storage[key]=value;
}

Storage.prototype.getValue = function (key) {
  if (key in this.storage) {
    return this.storage[key];
  }
  return undefined
}
Storage.prototype.deleteValue = function (key) {
  if (key in this.storage) {
    delete this.storage[key];
    return true
  }
  return false
}
Storage.prototype.getKeys = function () {
  return Object.keys(this.storage);
}