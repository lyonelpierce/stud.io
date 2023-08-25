"use strict";

let fv, offCanvasEl;

$(function () {
    var dt_basic_table = $(".datatables-basic"),
        dt_basic;

    if (dt_basic_table.length) {
        dt_basic = dt_basic_table.DataTable();
    }
});

// Category Status Toggler
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

// Category Add Button
$(document).on("click", ".item-add", function () {
    $("#addCategorySidebarLabel").text("Nueva Categoría");
    $("#categorySection").val("");
    $("#categoryName").val("");
    $("#categoryDescription").val("");
    $("#categoryButton").text("Crear");
    $("#existingImage").attr("hidden", true);
});

// Category Edit Button
$(document).on("click", ".item-update", function () {
    let categoryId = $(this).attr("categoryId");
    $.ajax({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        type: "GET",
        url: "/admin/categories/categoryUpdate/" + categoryId,
        success: function (response) {
            $("#addCategorySidebarLabel").text("Editar Categoría");
            $("#newcategory").attr(
                "action",
                "/admin/categories/categoryUpdate/" + categoryId
            );
            $("#categorySection").val(response.section_id);
            $("#categoryName").val(response.name);
            $("#categoryDescription").val(response.description);
            $("#categoryButton").text("Editar");
            if (response.image) {
                let imageUrl = `/catalog/categories/images/` + response.image;
                $("#existingImage").attr("src", imageUrl).removeAttr("hidden");
            } else {
                $("#existingImage").attr("hidden", true);
            }
        },
    });
});

// Category Delete Button
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
