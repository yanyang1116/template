/**
 * @file
 * 补充一些没有类型，第三方模块申明
 *
 * 这个文件，不能 import 任何东西，不然会变成私有模块（记一笔，之前知道但是老忘记，导致问题看了很久）
 * 用 ///
 */

/// <reference types="prettier" />

declare module '@nxlibs/prettier-config' {
	const config: Prettier.Config;
	export = config;
}
