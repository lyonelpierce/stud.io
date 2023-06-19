document.addEventListener("DOMContentLoaded", function () {
    // Function to handle radio button change event
    $(".radio-option").change(function () {
        // Get the ID of the selected radio button
        var selectedRadio = $(this).attr("id");

        // Hide all forms initially
        // $("#newStudioForm").hide();
        // $("#joinStudioForm").hide();

        // Show the form corresponding to the selected radio button
        if (selectedRadio === "newStudio") {
            $("#joinStudioRadio").removeClass("checked");
            $("#newStudioRadio").addClass("checked");
        } else if (selectedRadio === "joinStudio") {
            $("#newStudioRadio").removeClass("checked");
            $("#joinStudioRadio").addClass("checked");
        }
    });
});
