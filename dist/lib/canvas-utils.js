"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRotatedAxisCoordinate = getRotatedAxisCoordinate;
function getRotatedAxisCoordinate(x, y, rotation) {
  var cos = Math.cos(rotation);
  var sin = Math.sin(rotation);
  var newX = x * cos + y * sin;
  var newY = y * cos - x * sin;
  return { x: newX, y: newY };
}