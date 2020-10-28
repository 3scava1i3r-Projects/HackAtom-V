/**
 * Initiates a download of the content of the skylink within the browser.
 * @param {string} skylink - 46 character skylink.
 * @param {Object} [customOptions={}] - Additional settings that can optionally be set.
 * @param {string} [customOptions.endpointPath="/"] - The relative URL path of the portal endpoint to contact.
 */
export declare function downloadFile(skylink: string, customOptions?: {}): void;
/**
 * Initiates a download of the content of the skylink at the Handshake domain.
 * @param {string} domain - Handshake domain.
 * @param {Object} [customOptions={}] - Additional settings that can optionally be set.
 * @param {string} [customOptions.endpointPath="/hns"] - The relative URL path of the portal endpoint to contact.
 */
export declare function downloadFileHns(domain: string, customOptions?: {}): Promise<void>;
export declare function getSkylinkUrl(skylink: string, customOptions?: {}): string;
export declare function getHnsUrl(domain: string, customOptions?: {}): string;
export declare function getHnsresUrl(domain: string, customOptions?: {}): string;
export declare function getMetadata(skylink: string, customOptions?: {}): Promise<void>;
/**
 * Opens the content of the skylink within the browser.
 * @param {string} skylink - 46 character skylink.
 * @param {Object} [customOptions={}] - Additional settings that can optionally be set.
 * @param {string} [customOptions.endpointPath="/"] - The relative URL path of the portal endpoint to contact.
 */
export declare function openFile(skylink: string, customOptions?: {}): void;
/**
 * Opens the content of the skylink from the given Handshake domain within the browser.
 * @param {string} domain - Handshake domain.
 * @param {Object} [customOptions={}] - Additional settings that can optionally be set.
 * @param {string} [customOptions.endpointPath="/hns"] - The relative URL path of the portal endpoint to contact.
 */
export declare function openFileHns(domain: string, customOptions?: {}): Promise<void>;
/**
 * @param {string} domain - Handshake resolver domain.
 * @param {Object} [customOptions={}] - Additional settings that can optionally be set.
 * @param {string} [customOptions.endpointPath="/hnsres"] - The relative URL path of the portal endpoint to contact.
 */
export declare function resolveHns(domain: string, customOptions?: {}): Promise<any>;
//# sourceMappingURL=download.d.ts.map