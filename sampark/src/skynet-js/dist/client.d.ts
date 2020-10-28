import { AxiosResponse } from "axios";
import { uploadFile, uploadDirectory, uploadDirectoryRequest, uploadFileRequest } from "./upload";
import { addSkykey, createSkykey, getSkykeyById, getSkykeyByName, getSkykeys } from "./encryption";
import { downloadFile, downloadFileHns, getSkylinkUrl, getHnsUrl, getHnsresUrl, getMetadata, openFile, openFileHns, resolveHns } from "./download";
import { getFile, setFile } from "./skydb";
import { lookupRegistry, updateRegistry } from "./registry";
export declare class SkynetClient {
    portalUrl: string;
    customOptions: Record<string, unknown>;
    /**
     * The Skynet Client which can be used to access Skynet.
     * @constructor
     * @param {string} [portalUrl="https://siasky.net"] - The portal URL to use to access Skynet, if specified. To use the default portal while passing custom options, use "".
     * @param {Object} [customOptions={}] - Configuration for the client.
     * @param {string} [customOptions.method] - HTTP method to use.
     * @param {string} [customOptions.APIKey] - Authentication password to use.
     * @param {string} [customOptions.customUserAgent=""] - Custom user agent header to set.
     * @param {Object} [customOptions.data=null] - Data to send in a POST.
     * @param {string} [customOptions.endpointPath=""] - The relative URL path of the portal endpoint to contact.
     * @param {string} [customOptions.extraPath=""] - Extra path element to append to the URL.
     * @param {Function} [customOptions.onUploadProgress] - Optional callback to track progress.
     * @param {Object} [customOptions.query={}] - Query parameters to include in the URl.
     */
    constructor(portalUrl?: string, customOptions?: {});
    uploadFile: typeof uploadFile;
    uploadDirectory: typeof uploadDirectory;
    uploadDirectoryRequest: typeof uploadDirectoryRequest;
    uploadFileRequest: typeof uploadFileRequest;
    addSkykey: typeof addSkykey;
    createSkykey: typeof createSkykey;
    getSkykeyById: typeof getSkykeyById;
    getSkykeyByName: typeof getSkykeyByName;
    getSkykeys: typeof getSkykeys;
    downloadFile: typeof downloadFile;
    downloadFileHns: typeof downloadFileHns;
    getSkylinkUrl: typeof getSkylinkUrl;
    getHnsUrl: typeof getHnsUrl;
    getHnsresUrl: typeof getHnsresUrl;
    getMetadata: typeof getMetadata;
    openFile: typeof openFile;
    openFileHns: typeof openFileHns;
    resolveHns: typeof resolveHns;
    getFile: typeof getFile;
    setFile: typeof setFile;
    lookupRegistry: typeof lookupRegistry;
    updateRegistry: typeof updateRegistry;
    /**
     * Creates and executes a request.
     * @param {Object} config - Configuration for the request. See docs for constructor for the full list of options.
     */
    executeRequest(config: any): Promise<AxiosResponse>;
}
//# sourceMappingURL=client.d.ts.map