import { TextEncoder, TextDecoder } from "util"; // Node.js built-in module

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
