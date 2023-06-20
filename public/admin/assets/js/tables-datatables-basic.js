/**
 * DataTables Basic
 */

"use strict";

let fv, offCanvasEl;
document.addEventListener("DOMContentLoaded", function (e) {
    (function () {
        const formAddNewRecord = document.getElementById("form-add-new-record");

        setTimeout(() => {
            const newRecord = document.querySelector(".create-new"),
                offCanvasElement = document.querySelector("#add-new-record");

            // To open offCanvas, to add new record
            if (newRecord) {
                newRecord.addEventListener("click", function () {
                    offCanvasEl = new bootstrap.Offcanvas(offCanvasElement);
                    // Empty fields on offCanvas open
                    (offCanvasElement.querySelector(".dt-full-name").value =
                        ""),
                        (offCanvasElement.querySelector(".dt-post").value = ""),
                        (offCanvasElement.querySelector(".dt-email").value =
                            ""),
                        (offCanvasElement.querySelector(".dt-date").value = ""),
                        (offCanvasElement.querySelector(".dt-salary").value =
                            "");
                    // Open offCanvas with form
                    offCanvasEl.show();
                });
            }
        }, 200);

        // Form validation for Add new record
        // fv = FormValidation.formValidation(formAddNewRecord, {
        //     fields: {
        //         basicFullname: {
        //             validators: {
        //                 notEmpty: {
        //                     message: "The name is required",
        //                 },
        //             },
        //         },
        //         basicPost: {
        //             validators: {
        //                 notEmpty: {
        //                     message: "Post field is required",
        //                 },
        //             },
        //         },
        //         basicEmail: {
        //             validators: {
        //                 notEmpty: {
        //                     message: "The Email is required",
        //                 },
        //                 emailAddress: {
        //                     message: "The value is not a valid email address",
        //                 },
        //             },
        //         },
        //         basicDate: {
        //             validators: {
        //                 notEmpty: {
        //                     message: "Joining Date is required",
        //                 },
        //                 date: {
        //                     format: "MM/DD/YYYY",
        //                     message: "The value is not a valid date",
        //                 },
        //             },
        //         },
        //         basicSalary: {
        //             validators: {
        //                 notEmpty: {
        //                     message: "Basic Salary is required",
        //                 },
        //             },
        //         },
        //     },
        //     plugins: {
        //         trigger: new FormValidation.plugins.Trigger(),
        //         bootstrap5: new FormValidation.plugins.Bootstrap5({
        //             // Use this for enabling/changing valid/invalid class
        //             // eleInvalidClass: '',
        //             eleValidClass: "",
        //             rowSelector: ".col-sm-12",
        //         }),
        //         submitButton: new FormValidation.plugins.SubmitButton(),
        //         // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
        //         autoFocus: new FormValidation.plugins.AutoFocus(),
        //     },
        //     init: (instance) => {
        //         instance.on("plugins.message.placed", function (e) {
        //             if (
        //                 e.element.parentElement.classList.contains(
        //                     "input-group"
        //                 )
        //             ) {
        //                 e.element.parentElement.insertAdjacentElement(
        //                     "afterend",
        //                     e.messageElement
        //                 );
        //             }
        //         });
        //     },
        // });

        // // FlatPickr Initialization & Validation
        // flatpickr(formAddNewRecord.querySelector('[name="basicDate"]'), {
        //     enableTime: false,
        //     // See https://flatpickr.js.org/formatting/
        //     dateFormat: "m/d/Y",
        //     // After selecting a date, we need to revalidate the field
        //     onChange: function () {
        //         fv.revalidateField("basicDate");
        //     },
        // });
    })();
});

// datatable (jquery)
$(function () {
    var dt_basic_table = $(".datatables-basic"),
        dt_complex_header_table = $(".dt-complex-header"),
        dt_row_grouping_table = $(".dt-row-grouping"),
        dt_multilingual_table = $(".dt-multilingual"),
        dt_basic;

    // DataTable with buttons
    // --------------------------------------------------------------------

    if (dt_basic_table.length) {
        dt_basic = dt_basic_table.DataTable({
            dom: '<"card-header flex-column flex-md-row"<"head-label text-center"><"dt-action-buttons text-end pt-3 pt-md-0"B>><"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
            displayLength: 10,
            lengthMenu: [7, 10, 25, 50, 75, 100],
            buttons: [
                {
                    text: '<i class="ti ti-plus me-sm-1"></i> <span class="d-none d-sm-inline-block">Añadir Tatuador</span>',
                    className: "create-new btn btn-primary",
                },
            ],
            responsive: {
                details: {
                    display: $.fn.dataTable.Responsive.display.modal({
                        header: function (row) {
                            var data = row.data();
                            return "Details of " + data["full_name"];
                        },
                    }),
                    type: "column",
                    renderer: function (api, rowIdx, columns) {
                        var data = $.map(columns, function (col, i) {
                            return col.title !== "" // ? Do not show row in modal popup if title is blank (for check box)
                                ? '<tr data-dt-row="' +
                                      col.rowIndex +
                                      '" data-dt-column="' +
                                      col.columnIndex +
                                      '">' +
                                      "<td>" +
                                      col.title +
                                      ":" +
                                      "</td> " +
                                      "<td>" +
                                      col.data +
                                      "</td>" +
                                      "</tr>"
                                : "";
                        }).join("");

                        return data
                            ? $('<table class="table"/><tbody />').append(data)
                            : false;
                    },
                },
            },
        });
        $("div.head-label").html(
            '<h5 class="card-title mb-0">Lista de Tatuadores</h5>'
        );
    }
});
