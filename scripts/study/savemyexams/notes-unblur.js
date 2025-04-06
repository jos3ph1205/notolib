javascript:(function(){
    document.body.insertAdjacentHTML("afterend", `
        <script>
            console.log("Hello, world!")
        </script>
    `);
    /* STYLES */
    document.head.insertAdjacentHTML("afterbegin", `
        <style>
            [class*="revision-notes_blur"] {
                max-height: none !important;
                overflow: visible !important;
            }
            [class*="revision-notes_blur"]::after {
                content: none !important;
                background: none !important;
            }
            [class^="LimitWall_signUpWrapper"] {
                display: none !important;
            }
        </style>
    `);
    /* SCRIPT */
    document.head.insertAdjacentHTML("beforeend", `
        <script>
            document.onload = () => {
                console.log("Hello, world!")
            }
        </script>
    `)
})();