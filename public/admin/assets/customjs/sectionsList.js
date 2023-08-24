"use strict";

let fv, offCanvasEl;

$(function () {
    var dt_basic_table = $(".datatables-basic"),
        dt_basic;

    if (dt_basic_table.length) {
        dt_basic = dt_basic_table.DataTable();
    }
});

// User Info Toggler
$(document).on("change", ".switch-input", function () {
    let sectionId = $(this).attr("sectionId");
    let status = $(this).prop("checked") ? 1 : 0;
    $.ajax({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        type: "POST",
        url: "/admin/sections/sectionStatus",
        data: { sectionId: sectionId, status: status },
    });
});
// Section Add Button
$(document).on("click", ".item-add", function () {
    $("#addSectionSidebarLabel").text("Nueva Sección");
    $("#sectionName").val("");
    $("#sectionDescription").val("");
    $("#sectionButton").text("Crear");
});

// Section Edit Button
$(document).on("click", ".item-update", function () {
    let sectionId = $(this).attr("sectionId");
    $.ajax({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        type: "GET",
        url: "/admin/sections/sectionUpdate/" + sectionId,
        success: function (response) {
            $("#addSectionSidebarLabel").text("Editar Sección");
            $("#newsection").attr(
                "action",
                "/admin/sections/sectionUpdate/" + sectionId
            );
            $("#sectionName").val(response.name);
            $("#sectionDescription").val(response.description);
            $("#sectionButton").text("Editar");
        },
    });
});

// Section Delete Button
$(document).on("click", ".item-delete", function () {
    let sectionId = $(this).attr("sectionId");

    // Display the confirmation dialog
    Swal.fire({
        title: "Estas seguro?",
        text: "No seras capaz de revertir estos cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "Cancelar",
        customClass: {
            confirmButton: "btn btn-primary me-1",
            cancelButton: "btn btn-label-secondary",
        },
        buttonsStyling: false,
    }).then((result) => {
        // If the user clicks the confirm button
        if (result.isConfirmed) {
            // Send the AJAX request to delete the user
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                type: "DELETE",
                url: "/admin/sections/sectionDelete/" + sectionId,
                data: { sectionId: sectionId },
                success: function (response) {
                    window.location.reload();
                },
            });
        }
    });
});
