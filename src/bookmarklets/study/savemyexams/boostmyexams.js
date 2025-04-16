(() => {
   if (window.__BOOSTMYEXAMS_RAN__) {alert("BoostMyExams already running");return};
   window.__BOOSTMYEXAMS_RAN__ = true;

   const info = {
      "SME.revision-note-views": 0,
      "SME.topic-question-part-solution-views": 0
   };

   function showToast(message, duration = 3000) {
      let toast = document.querySelector(".boostmyexams_toast");

      if (!toast) {
         toast = document.createElement("div");
         toast.className = "ExamSpecificationInformation_button__b8Dt_ boostmyexams_toast";
         document.body.appendChild(toast);
      }
      if (toast._hideTimeout) clearTimeout(toast._hideTimeout);

      toast.className = "ExamSpecificationInformation_button__b8Dt_ boostmyexams_toast";

      message = message.replace(/\n/g, "<br>");

      toast.innerHTML = `
      <p style="font-size:1.5em;font-weight:bold;margin:0 0 0.5em 0;">BoostMyExams</p>
      <div>${message}</div>
   `;
      toast.style = `
      display: block !important;
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      padding: 1rem !important;
      border-radius: 8px;
      z-index: 9999;
      font-family: sans-serif;
      font-size: 1.375em;
      width: fit-content;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.75);
      opacity: 0;
      transition: all 0.2s ease-out;
   `;

      document.body.appendChild(toast);

      requestAnimationFrame(() => {
         toast.style.opacity = "1";
      });

      toast._hideTimeout = setTimeout(() => {
         toast.style.opacity = "0";
         toast._hideTimeout = setTimeout(() => {
            toast.remove();
         }, 200);
      }, duration);
   }



   const keys = Object.keys(info);

   const clearKeys = (showAlert = false, updateInfo = true) => {
      keys.forEach(k => {
         localStorage?.removeItem(k);
         if (updateInfo) info[k] = 0;
      });
      if (showAlert) alert("Keys Cleared");
   };

   const showInfo = () => {
      const total = keys.reduce((sum, k) => sum + info[k], 0);
      showToast(`Notes Unlocked: ${total}`)
   };

   const originalSetItem = localStorage.setItem;
   const debounceTimers = {};
   const DEBOUNCE_MS = 300;
   localStorage.setItem = function (key, value) {
      if (keys.includes(key)) {
         if (debounceTimers[key]) return;

         debounceTimers[key] = setTimeout(() => {
            debounceTimers[key] = null;
         }, DEBOUNCE_MS);

         console.log(`Blocked ${key}`);
         info[key]++;
         return;
      }
      originalSetItem.apply(this, arguments);
   };



   clearKeys(false, false);
   console.log("BoostMyExams: Initial Cleanup Complete");

   const injectUI = () => {
      if (document.querySelector(".boostmyexams")) return;

      const courseNavMobile = document.querySelector(".CourseNavigationMobile_container__rRwbf")
      // btn btn-primary boostmyexams boostmyexams_refreshBtn my-2 btn-lg justify-content-center my-2 me-2

      //TODO: Add courseNavMobile UI

      // if (courseNavMobile) {
      //    const topicsBtn = courseNavMobile.querySelector("button");
      //    topicsBtn.insertAdjacentHTML("beforebegin", `
      //
      //          <button aria-label="Mock Exams" title="Refresh BoostMyExams"
      //             class="btn btn-primary boostmyexams boostmyexams_refreshBtn my-2 btn-lg justify-content-center my-2 me-2 boostmyexams boostmyexams_refreshBtn">
      //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      //                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      //                class="lucide lucide-rotate-cw">
      //                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
      //                <path d="M21 3v5h-5"/>
      //             </svg>
      //          </button>
      //    `);
      //    // topicsBtn.insertAdjacentHTML("afterend", `</div>`)
      //    document.querySelector(".boostmyexams_refreshBtn").onclick = () => clearKeys(true);
      // }

      const courseNavDesktop = document.querySelector(".CourseNavigationDesktop_sideBar__0jpAp");
      if (courseNavDesktop) {
         courseNavDesktop.insertAdjacentHTML("beforeend", `
            <div class="border-bottom w-100"></div>
            <button aria-label="Mock Exams" title="Refresh BoostMyExams"
               class="btn justify-content-center btn-primary ButtonIcon_large__4yD66 ButtonIcon_rounded__TLKY_ ButtonIcon_button__8mJq7 boostmyexams boostmyexams_refreshBtn">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-rotate-cw">
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                  <path d="M21 3v5h-5"/>
               </svg>
            </button>
            <button aria-label="Mock Exams" title="Refresh BoostMyExams"
               class="btn justify-content-center btn-neutral ButtonIcon_large__4yD66 ButtonIcon_rounded__TLKY_ ButtonIcon_button__8mJq7 boostmyexams boostmyexams_infoBtn">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-rotate-cw">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/><path d="M12 8h.01"/>
               </svg>
            </button>
         `);
         document.querySelector(".boostmyexams_refreshBtn").onclick = () => clearKeys(true);
         document.querySelector(".boostmyexams_infoBtn").onclick = () => showInfo();
      }

      console.log("BoostMyExams: UI injected");
   };

   const observer = new MutationObserver(() => injectUI());
   observer.observe(document.body, { childList: true, subtree: true });

   injectUI();

   if (!document.querySelector("#BoostMyExams_Style")) {
      const style = `
      <style id="BoostMyExams_Style">
         [class*='StaticBanner_banner'] {
            display: none !important;
         }
         .Wrapper_wrapper__raXe4:has(> div > div[class*='FeatureSliderCTA_container__UFYyV']) {
            display: none !important;
         }
         .boostmyexams_refreshBtn {
            & > svg {
               transition: rotate .15s ease-out;
            }
            &:hover > svg {
               rotate: 45deg;
            }
            &:active > svg {
               rotate: 75deg;
            }
         }
       </style>
      `;
      document.head.insertAdjacentHTML("beforeend", style);
   }
})();