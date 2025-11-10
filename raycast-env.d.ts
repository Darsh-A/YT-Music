/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** YouTube Data API Key - Your YouTube Data API v3 key. Get one at https://console.cloud.google.com/apis/credentials */
  "youtubeApiKey"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-song` command */
  export type SearchSong = ExtensionPreferences & {}
  /** Preferences accessible in the `search-artist` command */
  export type SearchArtist = ExtensionPreferences & {}
  /** Preferences accessible in the `search-playlist` command */
  export type SearchPlaylist = ExtensionPreferences & {}
  /** Preferences accessible in the `search-album` command */
  export type SearchAlbum = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-song` command */
  export type SearchSong = {}
  /** Arguments passed to the `search-artist` command */
  export type SearchArtist = {}
  /** Arguments passed to the `search-playlist` command */
  export type SearchPlaylist = {}
  /** Arguments passed to the `search-album` command */
  export type SearchAlbum = {}
}

