"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.HashFileID = exports.HashRegistryValue = exports.HashAll = void 0;
var blakejs_1 = __importDefault(require("blakejs"));
var utils_1 = require("./utils");
// NewHash returns a blake2b 256bit hasher.
function NewHash() {
    return blakejs_1["default"].blake2bInit(32, null);
}
// HashAll takes all given arguments and hashes them.
function HashAll() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var h = NewHash();
    for (var i = 0; i < args.length; i++) {
        blakejs_1["default"].blake2bUpdate(h, args[i]);
    }
    return blakejs_1["default"].blake2bFinal(h);
}
exports.HashAll = HashAll;
// HashRegistryValue hashes the given registry value
function HashRegistryValue(registryValue) {
    return HashAll(registryValue.tweak, encodeString(registryValue.data), encodeUint8(registryValue.revision));
}
exports.HashRegistryValue = HashRegistryValue;
// HashFileID hashes the given fileID
function HashFileID(fileID) {
    return HashAll(encodeUint8(fileID.version), encodeString(fileID.applicationID), encodeUint8(fileID.fileType), encodeString(fileID.filename));
}
exports.HashFileID = HashFileID;
// encodeUint8 converts the given number into a uint8 array
function encodeUint8(num) {
    if (num > 255) {
        throw new Error("overflow");
    }
    var encoded = new Uint8Array(8);
    encoded[0] = num;
    return encoded;
}
// encodeUint8 converts the given string into a uint8 array
function encodeString(str) {
    var encoded = new Uint8Array(8 + str.length);
    encoded.set(encodeUint8(str.length));
    encoded.set(utils_1.stringToUint8Array(str), 8);
    return encoded;
}
