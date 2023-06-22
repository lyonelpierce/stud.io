$(document).ready(function () {
    var divsToHide = $("#newStudioForm div:not(:has(input[type=radio]))")
        .not(":has(button[type=submit])")
        .not(":last");

    var studioDiv = $("#studioCityDiv");

    // Bind the change event handler
    $("input[name=studioRadio]").change(function () {
        if ($(this).val() === "joinStudio") {
            studioDiv.show();
            divsToHide.hide();
        } else {
            studioDiv.hide();
            divsToHide.show();
        }
    });

    // Trigger the change event on page load
    $("input[name=studioRadio]:checked").trigger("change");
});
