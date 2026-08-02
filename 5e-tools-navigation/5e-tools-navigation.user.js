// ==UserScript==
// @name         5e.tools Navigation
// @namespace    https://github.com/malijaffri/userscripts
// @version      1.0.2
// @description  Improves keyboard navigation on 5e.tools.
//
// @author       malijaffri
// @license      BSD-3-Clause
//
// @match        *://5e.tools/*
// @run-at       document-idle
// @grant        none
//
// @homepageURL  https://github.com/malijaffri/userscripts/tree/main/5e-tools-navigation
// @supportURL   https://github.com/malijaffri/userscripts/issues
// @downloadURL  https://raw.githubusercontent.com/malijaffri/userscripts/main/5e-tools-navigation/5e-tools-navigation.user.js
// @updateURL    https://raw.githubusercontent.com/malijaffri/userscripts/main/5e-tools-navigation/5e-tools-navigation.user.js
// ==/UserScript==

(() => {
  "use strict";

  let activationTimer;

  document.addEventListener("keydown", (event) => {
    const isArrowUp = event.key === "ArrowUp";
    const isArrowDown = event.key === "ArrowDown";
    const isPageUp = event.key === "PageUp";
    const isPageDown = event.key === "PageDown";
    if (!isArrowUp && !isPageUp && !isArrowDown && !isPageDown) return;

    const current = document.querySelector(".list-multi-selected");
    if (current === null) return;

    const target = (() => {
      if (isArrowUp) return current.previousElementSibling;
      else if (isArrowDown) return current.nextElementSibling;
      else {
        const siblings = current.parentElement?.children;
        if (siblings === undefined) return null;

        let currentIdx = 0;
        let sibling = current;
        while ((sibling = sibling.previousElementSibling)) currentIdx++;

        const delta = 30;
        return siblings[isPageUp ? Math.max(currentIdx - delta, 0) : Math.min(currentIdx + delta, siblings.length - 1)];
      }
    })();
    if (target === null) return;

    target.click();

    clearTimeout(activationTimer);
    activationTimer = setTimeout(() => target.children[0]?.click(), 150);

    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });

    event.preventDefault();
  });
})();
