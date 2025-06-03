import type { Options } from "prettier";

declare module "@nxlibs/prettier-config" {
  const config: Options;
  export = config;
}
