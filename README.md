# Userscripts

A collection of browser userscripts I've written to improve websites I use regularly.

All scripts are written to be lightweight, dependency-free, and compatible with modern userscript managers such as:

* [Violentmonkey](<https://violentmonkey.github.io>)
* [Tampermonkey](<https://www.tampermonkey.net>)
* [FireMonkey](<https://addons.mozilla.org/firefox/addon/firemonkey>) (FireFox-only)
* [Greasemonkey](<https://addons.mozilla.org/firefox/addon/greasemonkey>) (FireFox-only)

## Installation

1. Install a userscript manager for your browser.
2. Open the `*.user.js` file for the script you want to install.
3. If viewing the file on GitHub, click **Raw**. Your userscript manager should prompt you to install it.

### Chromium users

Recent Chromium-based browsers (Chrome, Chromium, Edge, Brave, Vivaldi, etc.) require an additional permission before userscripts can run.

If a script doesn't appear to execute:

1. Open `chrome://extensions`.
2. Select your userscript manager (e.g. Tampermonkey).
3. Click **Details**.
4. Enable **Allow User Scripts**.

## Scripts

| Script                                                       | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [**5e.tools Navigation**](<https://github.com/malijaffri/userscripts/tree/main/5e-tools-navigation>) | Improves keyboard navigation on 5e.tools by adding Arrow Up/Down and Page Up/Down navigation between list entries. |

## Compatibility

Scripts are developed and tested primarily with:

* Violentmonkey on Firefox
* Tampermonkey on Chromium

Unless otherwise noted, they avoid manager-specific APIs and should work on any modern userscript manager.

## License

Copyright (c) 2026 malijaffri

BSD 3-Clause License. See the `LICENSE` file for details.
