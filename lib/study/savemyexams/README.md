# About
BoostMyExams lets you view as many notes and answers as you need — No Limits, No BS
======
# Install
## Userscript
[![Download](https://img.shields.io/badge/Install%20BoostMyExams-Userscript-000000?style=for-the-badge&logo=tampermonkey&logoColor=white)](https://yourdomain.com/BoostMyExams.user.js)
------
## Bookmarklet
Create a New Bookmark <sup>[[?]](../../../../guides/Creating%20a%20Bookmarklet.md)</sup> and paste the following into the URL <sup>[[?]](../../../../guides/Creating%20a%20Bookmarklet.md#3-fill-in-the-bookmark-details)</sup> field:
```javascript
javascript:(s=>{(s=document.createElement("script")).src="https://cdn.jsdelivr.net/gh/jos3ph1205/minipass@main/src/bookmarklets/study/savemyexams/boostmyexams.js?"+Date.now(),document.body.appendChild(s)})();
```