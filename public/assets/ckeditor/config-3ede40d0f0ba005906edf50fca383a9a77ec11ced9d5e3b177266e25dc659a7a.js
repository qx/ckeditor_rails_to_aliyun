/**
 * Created by ok on 15/7/29.
 */


CKEDITOR.editorConfig = function (config) {
    //// ... other configuration ...
    //
    //config.toolbar_mini = [
    //    ["Bold",  "Italic",  "Underline",  "Strike",  "-",  "Subscript",  "Superscript"],
    //];
    config.toolbar = "basic";
    config.extraPlugins = 'imgupload'

    // ... rest of the original config.js  ...
}
