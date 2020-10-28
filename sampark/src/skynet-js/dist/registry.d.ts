import { pki } from "node-forge";
import { FileID, User } from "./skydb";
export declare type RegistryValue = {
    tweak: Uint8Array;
    data: string;
    revision: number;
};
export declare type SignedRegistryValue = {
    value: RegistryValue;
    signature: pki.ed25519.NativeBuffer;
};
export declare function lookupRegistry(user: User, fileID: FileID, customOptions?: {}): Promise<SignedRegistryValue | null>;
export declare function updateRegistry(user: User, fileID: FileID, srv: SignedRegistryValue, customOptions?: {}): Promise<boolean>;
//# sourceMappingURL=registry.d.ts.map