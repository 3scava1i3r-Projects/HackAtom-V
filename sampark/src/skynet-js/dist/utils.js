"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.readData = exports.hexToUint8Array = exports.stringToUint8Array = exports.promiseTimeout = exports.randomNumber = exports.trimUriPrefix = exports.parseSkylink = exports.makeUrl = exports.getRootDirectory = exports.getRelativeFilePath = exports.defaultPortalUrl = exports.defaultOptions = exports.addUrlQuery = exports.uriSkynetPrefix = exports.uriHandshakeResolverPrefix = exports.uriHandshakePrefix = exports.defaultSkynetPortalUrl = void 0;
var path_browserify_1 = __importDefault(require("path-browserify"));
var url_parse_1 = __importDefault(require("url-parse"));
var url_join_1 = __importDefault(require("url-join"));
var buffer_1 = require("buffer");
exports.defaultSkynetPortalUrl = "https://siasky.net";
exports.uriHandshakePrefix = "hns:";
exports.uriHandshakeResolverPrefix = "hnsres:";
exports.uriSkynetPrefix = "sia:";
function addUrlQuery(url, query) {
    var parsed = url_parse_1["default"](url);
    parsed.set("query", query);
    return parsed.toString();
}
exports.addUrlQuery = addUrlQuery;
function defaultOptions(endpointPath) {
    return {
        endpointPath: endpointPath,
        APIKey: "",
        customUserAgent: ""
    };
}
exports.defaultOptions = defaultOptions;
// TODO: This will be smarter. See
// https://github.com/NebulousLabs/skynet-docs/issues/21.
function defaultPortalUrl() {
    if (typeof window === "undefined")
        return "/"; // default to path root on ssr
    return window.location.origin;
}
exports.defaultPortalUrl = defaultPortalUrl;
function getFilePath(file) {
    return file.webkitRelativePath || file.path || file.name;
}
function getRelativeFilePath(file) {
    var filePath = getFilePath(file);
    var _a = path_browserify_1["default"].parse(filePath), root = _a.root, dir = _a.dir, base = _a.base;
    var relative = path_browserify_1["default"].normalize(dir).slice(root.length).split(path_browserify_1["default"].sep).slice(1);
    return path_browserify_1["default"].join.apply(path_browserify_1["default"], __spreadArrays(relative, [base]));
}
exports.getRelativeFilePath = getRelativeFilePath;
function getRootDirectory(file) {
    var filePath = getFilePath(file);
    var _a = path_browserify_1["default"].parse(filePath), root = _a.root, dir = _a.dir;
    return path_browserify_1["default"].normalize(dir).slice(root.length).split(path_browserify_1["default"].sep)[0];
}
exports.getRootDirectory = getRootDirectory;
/**
 * Properly joins paths together to create a URL. Takes a variable number of
 * arguments.
 */
function makeUrl() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, cur) { return url_join_1["default"](acc, cur); });
}
exports.makeUrl = makeUrl;
var SKYLINK_MATCHER = "([a-zA-Z0-9_-]{46})";
var SKYLINK_DIRECT_REGEX = new RegExp("^" + SKYLINK_MATCHER + "$");
var SKYLINK_PATHNAME_REGEX = new RegExp("^/?" + SKYLINK_MATCHER + "([/?].*)?$");
var SKYLINK_REGEXP_MATCH_POSITION = 1;
function parseSkylink(skylink) {
    if (typeof skylink !== "string")
        throw new Error("Skylink has to be a string, " + typeof skylink + " provided");
    // check for direct skylink match
    var matchDirect = skylink.match(SKYLINK_DIRECT_REGEX);
    if (matchDirect)
        return matchDirect[SKYLINK_REGEXP_MATCH_POSITION];
    // check for skylink prefixed with sia: or sia:// and extract it
    // example: sia:XABvi7JtJbQSMAcDwnUnmp2FKDPjg8_tTTFP4BwMSxVdEg
    // example: sia://XABvi7JtJbQSMAcDwnUnmp2FKDPjg8_tTTFP4BwMSxVdEg
    skylink = trimUriPrefix(skylink, exports.uriSkynetPrefix);
    // check for skylink passed in an url and extract it
    // example: https://siasky.net/XABvi7JtJbQSMAcDwnUnmp2FKDPjg8_tTTFP4BwMSxVdEg
    // pass empty object as second param to disable using location as base url when parsing in browser
    var parsed = url_parse_1["default"](skylink, {});
    var matchPathname = parsed.pathname.match(SKYLINK_PATHNAME_REGEX);
    if (matchPathname)
        return matchPathname[SKYLINK_REGEXP_MATCH_POSITION];
    throw new Error("Could not extract skylink from '" + skylink + "'");
}
exports.parseSkylink = parseSkylink;
function trimUriPrefix(str, prefix) {
    var longPrefix = prefix + "//";
    if (str.startsWith(longPrefix)) {
        // longPrefix is exactly at the beginning
        return str.slice(longPrefix.length);
    }
    if (str.startsWith(prefix)) {
        // else prefix is exactly at the beginning
        return str.slice(prefix.length);
    }
    return str;
}
exports.trimUriPrefix = trimUriPrefix;
function randomNumber(low, high) {
    return Math.random() * (high - low) + low;
}
exports.randomNumber = randomNumber;
function promiseTimeout(promise, ms) {
    return __awaiter(this, void 0, void 0, function () {
        var timeout;
        return __generator(this, function (_a) {
            timeout = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    reject("Timed out after " + ms + "ms");
                }, ms);
            });
            return [2 /*return*/, Promise.race([promise, timeout])];
        });
    });
}
exports.promiseTimeout = promiseTimeout;
// stringToUint8Array converts a string to a uint8 array
function stringToUint8Array(str) {
    return Uint8Array.from(buffer_1.Buffer.from(str));
}
exports.stringToUint8Array = stringToUint8Array;
// hexToUint8Array converts a hex encoded string to a uint8 array
function hexToUint8Array(str) {
    return new Uint8Array(str.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); }));
}
exports.hexToUint8Array = hexToUint8Array;
// readData is a helper function that uses a FileReader to read the contents of
// the given file
function readData(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = function (error) { return reject(error); };
    });
}
exports.readData = readData;
