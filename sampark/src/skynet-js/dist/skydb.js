"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.SkyFile = exports.User = exports.FileID = exports.setFile = exports.getFile = exports.FileType = exports.FILEID_V1 = void 0;
var node_forge_1 = require("node-forge");
var crypto_1 = require("./crypto");
var utils_1 = require("./utils");
// FILEID_V1 represents version 1 of the FileID object
exports.FILEID_V1 = 1;
// FileType is the type of the file
var FileType;
(function (FileType) {
    FileType[FileType["Invalid"] = 0] = "Invalid";
    FileType[FileType["PublicUnencrypted"] = 1] = "PublicUnencrypted";
})(FileType = exports.FileType || (exports.FileType = {}));
// getFile will lookup the entry for given skappID and filename, if it exists it
// will try and download the file behind the skylink it has found in the entry.
function getFile(user, fileID) {
    return __awaiter(this, void 0, void 0, function () {
        var existing, skylink, response, metadata, file;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.lookupRegistry(user, fileID)];
                case 1:
                    existing = _a.sent();
                    if (!existing) {
                        throw new Error("not found");
                    }
                    skylink = existing.value.data;
                    return [4 /*yield*/, this.executeRequest(__assign(__assign({}, this.customOptions), { method: "get", url: this.getSkylinkUrl(skylink) }))];
                case 2:
                    response = _a.sent();
                    metadata = JSON.parse(response.headers["skynet-file-metadata"]);
                    file = new SkyFile(new File([response.data], metadata.filename, { type: response.headers["content-type"] }));
                    return [2 /*return*/, file];
            }
        });
    });
}
exports.getFile = getFile;
// setFile uploads a file and sets updates the registry
function setFile(user, fileID, file) {
    return __awaiter(this, void 0, void 0, function () {
        var customFilename, skylink, existing, error_1, value, signature, updated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customFilename = fileID.filename;
                    return [4 /*yield*/, this.uploadFile(file.file, { customFilename: customFilename })];
                case 1:
                    skylink = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, utils_1.promiseTimeout(this.lookupRegistry(user, fileID), 2000)];
                case 3:
                    existing = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    existing = null;
                    return [3 /*break*/, 5];
                case 5:
                    value = {
                        tweak: crypto_1.HashFileID(fileID),
                        data: utils_1.trimUriPrefix(skylink, utils_1.uriSkynetPrefix),
                        revision: existing ? existing.value.revision + 1 : 0
                    };
                    signature = user.sign({ message: crypto_1.HashRegistryValue(value) });
                    return [4 /*yield*/, this.updateRegistry(user, fileID, { value: value, signature: signature })];
                case 6:
                    updated = _a.sent();
                    return [2 /*return*/, updated];
            }
        });
    });
}
exports.setFile = setFile;
// FileID represents a File
var FileID = /** @class */ (function () {
    function FileID(applicationID, fileType, filename) {
        this.applicationID = applicationID;
        this.fileType = fileType;
        this.filename = filename;
        this.version = exports.FILEID_V1;
        // validate file type
        if (fileType !== FileType.PublicUnencrypted) {
            throw new Error("invalid file type");
        }
    }
    return FileID;
}());
exports.FileID = FileID;
// User represents a user entity and can be used to sign.
var User = /** @class */ (function () {
    // NOTE: username should be the user's email address as ideally it's unique
    function User(username, password) {
        var seed = node_forge_1.pkcs5.pbkdf2(password, username, 1000, 32);
        var _a = node_forge_1.pki.ed25519.generateKeyPair({ seed: seed }), publicKey = _a.publicKey, privateKey = _a.privateKey;
        this.publicKey = publicKey;
        this.secretKey = privateKey;
        this.id = publicKey.toString("hex");
    }
    User.prototype.sign = function (options) {
        return node_forge_1.pki.ed25519.sign(__assign(__assign({}, options), { privateKey: this.secretKey }));
    };
    return User;
}());
exports.User = User;
// SkyFile wraps a File.
var SkyFile = /** @class */ (function () {
    function SkyFile(file) {
        this.file = file;
    }
    return SkyFile;
}());
exports.SkyFile = SkyFile;
