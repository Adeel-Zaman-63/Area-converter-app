document.addEventListener("DOMContentLoaded", function () {
    const inputArea = document.getElementById("input-area");
    const fromScale = document.getElementById("from-scale");
    const resultElements = {
        marla: document.getElementById("marla-result"),
        squareFeet: document.getElementById("square-feet-result"),
        // Add more elements for other area scales
    };

    function convertArea() {
        const area = parseFloat(inputArea.value);
        const from = fromScale.value;

        const convertedAreas = {
            marla: area,
            squareFeet: 0,
            // Define conversion factors for other area scales here
        };

        if (from === "marla") {
            convertedAreas.squareFeet = area * 272.25; // Conversion factor for Marla to Square Feet
            // Calculate conversions for other scales if needed
        } else if (from === "square-feet") {
            convertedAreas.marla = area / 272.25; // Reverse conversion factor
            // Calculate conversions for other scales if needed
        }
        // Update other conversion calculations

        for (const scale in resultElements) {
            resultElements[scale].textContent = convertedAreas[scale].toFixed(2);
        }
    }

    inputArea.addEventListener("input", convertArea);
    fromScale.addEventListener("change", convertArea);
});
