"use strict";

let fv, offCanvasEl;

$(function () {
    var dt_basic_table = $(".datatables-basic"),
        dt_basic;

    if (dt_basic_table.length) {
        dt_basic = dt_basic_table.DataTable({
            pageLength: 25,
        });
    }
});

// User Info Toggler
$(document).on("change", ".switch-input", function () {
    let categoryId = $(this).attr("categoryId");
    let status = $(this).prop("checked") ? 1 : 0;
    $.ajax({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        type: "POST",
        url: "/admin/categories/categoryStatus",
        data: { categoryId: categoryId, status: status },
    });
});

// User Delete Button
$(document).on("click", ".item-delete", function () {
    let categoryId = $(this).attr("categoryId");

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
                url: "/admin/categories/categoryDelete/" + categoryId,
                data: { categoryId: categoryId },
                success: function (response) {
                    window.location.reload();
                },
            });
        }
    });
});
