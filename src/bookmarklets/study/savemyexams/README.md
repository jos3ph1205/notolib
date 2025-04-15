## Description
BoostMyExams allows you to view as many notes and answers as you need.

## Install

[Create a New Bookmark](../../../../guides/Creating%20a%20Bookmarklet.md) and paste the following into the [URL](../../../../guides/Creating%20a%20Bookmarklet.md#3-fill-in-the-bookmark-details) field:

```javascript
javascript:(s=>{(s=document.createElement("script")).src="https://cdn.jsdelivr.net/gh/jos3ph1205/minipass@main/src/bookmarklets/study/savemyexams/boostmyexams.js?"+Date.now(),document.body.appendChild(s)})();
```