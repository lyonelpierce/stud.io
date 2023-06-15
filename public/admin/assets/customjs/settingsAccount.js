document.addEventListener("DOMContentLoaded", function () {
    $(".select2").select2();
    // Get the state and city dropdown elements
    var stateDropdown = document.getElementById("state");
    var cityDropdown = document.getElementById("city");

    // Add an event listener to the state dropdown
    $("#state").on("change", function () {
        var stateName = stateDropdown.value;

        // Clear the city dropdown options
        cityDropdown.innerHTML =
            '<option value="" disabled>Seleccionar Ciudad</option>';

        // Fetch cities for the selected state using AJAX
        if (stateName) {
            fetch("/cities/" + stateName)
                .then((response) => response.json())
                .then((data) => {
                    // Populate the city dropdown with the retrieved cities
                    data.forEach((city) => {
                        var option = document.createElement("option");
                        option.value = city.name;
                        option.textContent = city.name;
                        cityDropdown.appendChild(option);
                    });
                });
        }
    });
});
