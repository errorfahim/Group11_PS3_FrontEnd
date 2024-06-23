document.addEventListener('DOMContentLoaded', () => {
    let vaccines = [
        {
            id: 1,
            name: "COVID-19 Vaccine",
            manufacturer: "Pfizer",
            quantity: 1200,
            expiryDate: "2024-12-31"
        },
        {
            id: 2,
            name: "Flu Vaccine",
            manufacturer: "Sanofi",
            quantity: 500,
            expiryDate: "2023-11-30"
        },
        {
            id: 3,
            name: "Hepatitis B Vaccine",
            manufacturer: "GlaxoSmithKline",
            quantity: 300,
            expiryDate: "2025-01-15"
        },
        {
            id: 4,
            name: "Measles Vaccine",
            manufacturer: "Merck",
            quantity: 400,
            expiryDate: "2024-06-30"
        },
        {
            id: 5,
            name: "Mumps Vaccine",
            manufacturer: "Merck",
            quantity: 350,
            expiryDate: "2024-08-20"
        },
        {
            id: 6,
            name: "Rubella Vaccine",
            manufacturer: "Merck",
            quantity: 375,
            expiryDate: "2024-09-15"
        },
        {
            id: 7,
            name: "Polio Vaccine",
            manufacturer: "Sanofi",
            quantity: 450,
            expiryDate: "2024-07-22"
        },
        {
            id: 8,
            name: "HPV Vaccine",
            manufacturer: "Merck",
            quantity: 600,
            expiryDate: "2025-05-30"
        },
        {
            id: 9,
            name: "Tetanus Vaccine",
            manufacturer: "GlaxoSmithKline",
            quantity: 550,
            expiryDate: "2025-03-25"
        },
        {
            id: 10,
            name: "Chickenpox Vaccine",
            manufacturer: "Merck",
            quantity: 200,
            expiryDate: "2024-10-12"
        }
    ];

    const inventoryContainer = document.getElementById('inventory');
    const inventoryForm = document.getElementById('inventory-form');

    const renderInventory = () => {
        inventoryContainer.innerHTML = '';
        vaccines.forEach(vaccine => {
            const vaccineElement = document.createElement('div');
            vaccineElement.classList.add('vaccine');

            vaccineElement.innerHTML = `
                <h2>${vaccine.name}</h2>
                <p><strong>Manufacturer:</strong> ${vaccine.manufacturer}</p>
                <p><strong>Quantity:</strong> ${vaccine.quantity}</p>
                <p><strong>Expiry Date:</strong> ${vaccine.expiryDate}</p>
                <button class="update" onclick="updateVaccine(${vaccine.id})">Update</button>
                <button onclick="removeVaccine(${vaccine.id})">Remove</button>
            `;

            inventoryContainer.appendChild(vaccineElement);
        });
    };

    window.removeVaccine = (id) => {
        vaccines = vaccines.filter(vaccine => vaccine.id !== id);
        renderInventory();
    };

    window.updateVaccine = (id) => {
        const vaccine = vaccines.find(v => v.id === id);
        if (vaccine) {
            document.getElementById('name').value = vaccine.name;
            document.getElementById('manufacturer').value = vaccine.manufacturer;
            document.getElementById('quantity').value = vaccine.quantity;
            document.getElementById('expiryDate').value = vaccine.expiryDate;
            inventoryForm.dataset.updateId = id;
        }
    };

    inventoryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const manufacturer = document.getElementById('manufacturer').value;
        const quantity = document.getElementById('quantity').value;
        const expiryDate = document.getElementById('expiryDate').value;

        const updateId = inventoryForm.dataset.updateId;
        if (updateId) {
            const vaccine = vaccines.find(v => v.id === parseInt(updateId));
            vaccine.name = name;
            vaccine.manufacturer = manufacturer;
            vaccine.quantity = parseInt(quantity);
            vaccine.expiryDate = expiryDate;
            delete inventoryForm.dataset.updateId;
        } else {
            const newVaccine = {
                id: vaccines.length ? vaccines[vaccines.length - 1].id + 1 : 1,
                name,
                manufacturer,
                quantity: parseInt(quantity),
                expiryDate
            };
            vaccines.push(newVaccine);
        }

        inventoryForm.reset();
        renderInventory();
    });

    renderInventory();
});
