// ==UserScript==
// @name 熊猫书签
// @namespace https://ex.acg.uy/
// @description zh-cn/
// @license WTFPL
// @version 28
// @match https://ex.acg.uy/
// @match *://exhentai.org/*
// @match *://e-hentai.org/*
// @grant none
// ==/UserScript==
 (function(){'use strict';function panda_init(c){if(c>=3){return;};let n=['https://ex.acg.uy/'];let t=setTimeout(function(){clearTimeout(t);panda_init(c+1);},3000);let s=document.createElement('script');s.src=(n[c]?n[c]:n[0])+'panda.js?'+parseInt(Date.parse(new Date())/600000)+c;s.onerror=function(){clearTimeout(t);panda_init(c+1);};s.onload=function(){clearTimeout(t);};s.setAttribute('exkey','cfb712ea2633f9894c5dae23146f78d03512590x322abe39d');document.body.appendChild(s);};if(document.getElementById('expanda')){document.getElementById('expanda').style.display='';}else{panda_init(0);};})();