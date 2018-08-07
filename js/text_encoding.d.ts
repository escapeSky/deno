/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

type BufferSource = ArrayBufferView | ArrayBuffer;

interface TextDecodeOptions {
  stream?: boolean;
}

interface TextDecoderOptions {
  fatal?: boolean;
  ignoreBOM?: boolean;
}

interface TextDecoder {
  /**
   * Returns encoding's name, lowercased.
   */
  readonly encoding: string;
  /**
   * Returns true if error mode is "fatal", and false
   * otherwise.
   */
  readonly fatal: boolean;
  /**
   * Returns true if ignore BOM flag is set, and false otherwise.
   */
  readonly ignoreBOM: boolean;
  /**
   * Returns the result of running encoding's decoder. The
   * method can be invoked zero or more times with options's stream set to
   * true, and then once without options's stream (or set to false), to process
   * a fragmented stream. If the invocation without options's stream (or set to
   * false) has no input, it's clearest to omit both arguments.
   * var string = "", decoder = new TextDecoder(encoding), buffer;
   * while(buffer = next_chunk()) {
   * string += decoder.decode(buffer, {stream:true});
   * }
   * string += decoder.decode(); // end-of-stream
   * If the error mode is "fatal" and encoding's decoder returns error, throws a TypeError.
   */
  decode(input?: BufferSource, options?: TextDecodeOptions): string;
}

interface TextEncoder {
  /**
   * Returns "utf-8".
   */
  readonly encoding: string;
  /**
   * Returns the result of running UTF-8's encoder.
   */
  encode(input?: string): Uint8Array;
}

declare module "text-encoding" {
  export let TextDecoder: {
    prototype: TextDecoder;
    new (label?: string, options?: TextDecoderOptions): TextDecoder;
  };

  export let TextEncoder: {
    prototype: TextEncoder;
    new (): TextEncoder;
  };
}
