(() => {
   if (window.__BOOSTMYEXAMS_RAN__) {alert("BoostMyExams already running");return};
   window.__BOOSTMYEXAMS_RAN__ = true;

   const keys = ["SME.revision-note-views", "SME.topic-question-part-solution-views"];
   const clearKeys = (showAlert = false) => {
      keys.forEach(k => localStorage?.removeItem(k));
      if (showAlert) alert("Keys Cleared");
   };

   const originalSetItem = localStorage.setItem;
   localStorage.setItem = function (key, value) {
      if (keys.includes(key)) {
         console.log(`Blocked ${key}`);
         return;
      }
      originalSetItem.apply(this, arguments);
   };

   clearKeys();
   console.log("BoostMyExams: Initial Cleanup Complete");



   const injectUI = () => {
      if (document.querySelector(".boostmyexams_refreshBtn")) return;

      const courseNavDesktop = document.querySelector(".CourseNavigationDesktop_sideBar__0jpAp");
      if (!courseNavDesktop) return;

      courseNavDesktop.insertAdjacentHTML("beforeend", `
         <div class="border-bottom w-100"></div>
         <button aria-label="Mock Exams" title="Refresh BoostMyExams"
            class="btn justify-content-center btn-primary ButtonIcon_large__4yD66 ButtonIcon_rounded__TLKY_ ButtonIcon_button__8mJq7 boostmyexams_refreshBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="lucide lucide-rotate-cw">
               <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
               <path d="M21 3v5h-5"/>
            </svg>
         </button>
      `);

      document.querySelector(".boostmyexams_refreshBtn").onclick = () => clearKeys(true);

      console.log("BoostMyExams: UI injected");
   };

   const observer = new MutationObserver(() => injectUI());
   observer.observe(document.body, { childList: true, subtree: true });

   injectUI();

   if (!document.querySelector("#SaveMyExamsNotesAnswers")) {
      const style = document.createElement("style");
      style.id = "SaveMyExamsNotesAnswers";
      style.textContent = `
         [class*='FeatureSliderCTA_container__'] {
            display: none !important;
         }
      `;
      document.head.appendChild(style);
   }
})();