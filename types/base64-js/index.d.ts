// Type definitions for base64-js 1.2
// Project: https://github.com/beatgammit/base64-js
// Definitions by: Peter Safranek <https://github.com/pe8ter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module byte64js {
    export function byteLength(encoded: string): number;
    export function toByteArray(encoded: string): Uint8Array;
    export function fromByteArray(bytes: Uint8Array): string;
}

declare module "byte64js" {
    export = byte64js
}
