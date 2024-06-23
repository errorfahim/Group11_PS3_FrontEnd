document.addEventListener('DOMContentLoaded', () => {
    const vaccines = [
        {
            name: "COVID-19 Vaccine",
            manufacturer: "Pfizer",
            quantity: 1200,
            expiryDate: "2024-12-31"
        },
        {
            name: "Flu Vaccine",
            manufacturer: "Sanofi",
            quantity: 500,
            expiryDate: "2023-11-30"
        },
        {
            name: "Hepatitis B Vaccine",
            manufacturer: "GlaxoSmithKline",
            quantity: 300,
            expiryDate: "2025-01-15"
        },
        {
            name: "Measles Vaccine",
            manufacturer: "Merck",
            quantity: 400,
            expiryDate: "2024-06-30"
        },
        {
            name: "Mumps Vaccine",
            manufacturer: "Merck",
            quantity: 350,
            expiryDate: "2024-08-20"
        },
        {
            name: "Rubella Vaccine",
            manufacturer: "Merck",
            quantity: 375,
            expiryDate: "2024-09-15"
        },
        {
            name: "Polio Vaccine",
            manufacturer: "Sanofi",
            quantity: 450,
            expiryDate: "2024-07-22"
        },
        {
            name: "HPV Vaccine",
            manufacturer: "Merck",
            quantity: 600,
            expiryDate: "2025-05-30"
        },
        {
            name: "Tetanus Vaccine",
            manufacturer: "GlaxoSmithKline",
            quantity: 550,
            expiryDate: "2025-03-25"
        },
        {
            name: "Chickenpox Vaccine",
            manufacturer: "Merck",
            quantity: 200,
            expiryDate: "2024-10-12"
        }
    ];

    const inventoryContainer = document.getElementById('inventory');

    vaccines.forEach(vaccine => {
        const vaccineElement = document.createElement('div');
        vaccineElement.classList.add('vaccine');

        vaccineElement.innerHTML = `
            <h2>${vaccine.name}</h2>
            <p><strong>Manufacturer:</strong> ${vaccine.manufacturer}</p>
            <p><strong>Quantity:</strong> ${vaccine.quantity}</p>
            <p><strong>Expiry Date:</strong> ${vaccine.expiryDate}</p>
        `;

        inventoryContainer.appendChild(vaccineElement);
    });
});
