"use strict";

let fv, offCanvasEl;

$(function () {
    var dt_basic_table = $(".datatables-basic"),
        dt_basic;

    if (dt_basic_table.length) {
        dt_basic = dt_basic_table.DataTable();
    }
});

// Product Status Toggler
$(document).on("change", "#statusSwitch", function () {
    let productId = $(this).attr("productId");
    let status = $(this).prop("checked") ? 1 : 0;
    $.ajax({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        type: "POST",
        url: "/admin/products/productStatus",
        data: { productId: productId, status: status },
    });
});

// Product Update Button
$(document).on("click", ".item-update", function () {
    let productId = $(this).attr("productId");
    $.ajax({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        type: "GET",
        url: "/admin/products/productUpdate/" + productId,
        success: function (response) {
            $("#newProduct").attr(
                "action",
                "/admin/products/productUpdate/" + productId
            );
            $("#productSection").val(response.section_id);
            $("#productCategory").val(response.category_id);
            $("#productName").val(response.product_name);
            $("#productDescription").val(response.product_description);
            $("#productPrice").val(response.product_price);
            $("#productDiscount").val(response.product_discount);
            $("#productInventory").val(response.product_inventory);
            $("#metaTitle").val(response.meta_title);
            $("#metaDescription").val(response.meta_description);
            $("#metaKeyword").val(response.meta_keywords);
            $("#isFeatured").prop("checked", response.is_featured === "Yes");
            if (response.product_image) {
                let imageUrl =
                    `/catalog/products/images/` + response.product_image;
                $("#existingImage").attr("src", imageUrl).removeAttr("hidden");
            } else {
                $("#existingImage").attr("hidden", true);
            }
        },
    });
});

// Product Delete Button
$(document).on("click", ".item-delete", function () {
    let productId = $(this).attr("productId");

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
                url: "/admin/products/productDelete/" + productId,
                data: { productId: productId },
                success: function (response) {
                    window.location.reload();
                },
            });
        }
    });
});
