import { pki } from "node-forge";
export declare const FILEID_V1 = 1;
export declare enum FileType {
    Invalid = 0,
    PublicUnencrypted = 1
}
export declare function getFile(user: User, fileID: FileID): Promise<SkyFile>;
export declare function setFile(user: User, fileID: FileID, file: SkyFile): Promise<boolean>;
export declare class FileID {
    applicationID: string;
    fileType: FileType;
    filename: string;
    version: number;
    constructor(applicationID: string, fileType: FileType, filename: string);
}
export declare class User {
    id: string;
    publicKey: pki.ed25519.NativeBuffer;
    protected secretKey: pki.ed25519.NativeBuffer;
    constructor(username: string, password: string);
    sign(options: pki.ed25519.ToNativeBufferParameters): pki.ed25519.NativeBuffer;
}
export declare class SkyFile {
    file: File;
    constructor(file: File);
}
//# sourceMappingURL=skydb.d.ts.map