javascript:(function () {
    if (!window.location.href.includes("savemyexams")) {alert("This script can only be run on savemyexams.com");return};

    if (window.__SMENA_SCRIPT_EXECUTED__) {
        alert("Script already executed");
        return;
    } else {
        alert("Running SaveMyExams Notes & Answers");
        window.__SMENA_SCRIPT_EXECUTED__ = true;
    }

    const styles = `
        <style id="SaveMyExamsNotesAnswers">
            [class*='FeatureSliderCTA_container__'] {
                display: none !important;
            }
        </style>
    `;
    document.head.insertAdjacentHTML("afterbegin", styles);

    const keys = ["SME.revision-note-views", "SME.topic-question-part-solution-views"];
    /* Initial Cleanup */
    keys.forEach(k => localStorage.removeItem(k));
    console.log("Initial Cleanup Complete");
    /* Block Future Invocations */
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
        if (keys.includes(key)) {console.log(`Blocked ${key}`);return}
        originalSetItem.apply(this, arguments);
    };
})();