/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import { PrismaBase } from '../../interfaces';

/**
 * The studio command allows you to interact with and manage your data interactively. It does this by starting a local web server with a web app configured with your project's data schema and records.
 */
export interface StudioExecutorSchema extends PrismaBase {
  /**
   * The browser to auto-open Studio in.
   */
  browser?: string;
  /**
   * The port number to start Studio on.
   */
  port?: number;
}
