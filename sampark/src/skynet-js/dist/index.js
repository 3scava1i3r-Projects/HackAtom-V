"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.uriSkynetPrefix = exports.uriHandshakeResolverPrefix = exports.uriHandshakePrefix = exports.parseSkylink = exports.getRootDirectory = exports.getRelativeFilePath = exports.defaultSkynetPortalUrl = exports.defaultPortalUrl = exports.SkyFile = exports.User = exports.FileID = exports.FileType = exports.FILEID_V1 = exports.SkynetClient = void 0;
var client_1 = require("./client");
__createBinding(exports, client_1, "SkynetClient");
var skydb_1 = require("./skydb");
__createBinding(exports, skydb_1, "FILEID_V1");
__createBinding(exports, skydb_1, "FileType");
__createBinding(exports, skydb_1, "FileID");
__createBinding(exports, skydb_1, "User");
__createBinding(exports, skydb_1, "SkyFile");
var utils_1 = require("./utils");
__createBinding(exports, utils_1, "defaultPortalUrl");
__createBinding(exports, utils_1, "defaultSkynetPortalUrl");
__createBinding(exports, utils_1, "getRelativeFilePath");
__createBinding(exports, utils_1, "getRootDirectory");
__createBinding(exports, utils_1, "parseSkylink");
__createBinding(exports, utils_1, "uriHandshakePrefix");
__createBinding(exports, utils_1, "uriHandshakeResolverPrefix");
__createBinding(exports, utils_1, "uriSkynetPrefix");
