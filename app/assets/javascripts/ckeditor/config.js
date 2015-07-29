/**
 * Created by ok on 15/7/29.
 */

CKEDITOR.editorConfig = function (config) {
    // ... other configuration ...

    config.toolbar_mini = [
        ["Bold",  "Italic",  "Underline",  "Strike",  "-",  "Subscript",  "Superscript"],
    ];
    config.toolbar = "simple";

    // ... rest of the original config.js  ...
}