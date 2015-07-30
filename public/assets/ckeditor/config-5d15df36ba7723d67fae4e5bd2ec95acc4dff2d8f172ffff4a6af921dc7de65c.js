/**
 * Created by ok on 15/7/29.
 */


CKEDITOR.editorConfig = function (config) {
    config.language = 'zh';
    config.assets_plugins = ['image', 'smiley'];
    //config.filebrowserBrowseUrl = "/ckeditor/attachment_files";
    //config.filebrowserFlashBrowseUrl = "/ckeditor/attachment_files";
    //config.filebrowserFlashUploadUrl = "/ckeditor/attachment_files";
    //config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";
    //config.filebrowserImageBrowseUrl = "/ckeditor/pictures";
    //config.filebrowserImageUploadUrl = "/ckeditor/pictures";
    //config.filebrowserUploadUrl = "/ckeditor/attachment_files";
    //// ... other configuration ...
    //
    //config.toolbar_mini = [
    //    ["Bold",  "Italic",  "Underline",  "Strike",  "-",  "Subscript",  "Superscript"],
    //];
    config.toolbar = "basic";

    // ... rest of the original config.js  ...
}
