## How to Create a New Bookmarklet (All Browsers)

### 1. Open your browser’s Bookmark Manager:
 - **Chromium Browsers (Chrome, Edge, Brave, etc.)**:  
   `CTRL + SHIFT + O` (Windows/Linux)  
   `CMD + OPTION + B` (Mac)
 - **Firefox**:  
   `Ctrl + Shift + B` or open `Library → Bookmarks → Manage Bookmarks`
 - **Safari**:  
   Go to `Bookmarks → Edit Bookmarks`

### 2. Create a New Bookmark:
 - Look for a button like **"Add new bookmark"**, **"New"**, or right-click inside the bookmark manager and select **"Add Page..."** or **"New Bookmark"**.

### 3. Fill in the bookmark details:
 - **Name**: Whatever you want (e.g., `Save Notes`)
 - **Url**: Paste your bookmarklet reference / code

### 4. Save it, and you're done.  
Click it any time to run your code on the current page.

---

### Example Bookmarklet

Hello Word Bookmarklet:
```js
javascript:(()=>{alert("Hello, World!")})()
```

---

## IMPORTANT NOTES

- **Mobile browsers** usually don't support bookmarklets directly.
- Some sites may **block bookmarklets** using Content Security Policies (CSP).
- If nothing happens, check the **console for errors**.