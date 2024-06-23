document.addEventListener('DOMContentLoaded', () => {
    let centers = [
        {
            id: 1,
            name: "Health Clinic A",
            address: "123 Main St, Cityville",
            phone: "(123) 456-7890",
            hours: "8:00 AM - 6:00 PM"
        },
        {
            id: 2,
            name: "Community Center",
            address: "456 Oak St, Townsville",
            phone: "(234) 567-8901",
            hours: "9:00 AM - 5:00 PM"
        },
        {
            id: 3,
            name: "Town Hall",
            address: "789 Pine St, Villageton",
            phone: "(345) 678-9012",
            hours: "8:30 AM - 4:30 PM"
        },
        {
            id: 4,
            name: "School Gym",
            address: "101 Maple St, Hamletburg",
            phone: "(456) 789-0123",
            hours: "10:00 AM - 4:00 PM"
        },
        {
            id: 5,
            name: "Health Clinic B",
            address: "202 Birch St, Cityville",
            phone: "(567) 890-1234",
            hours: "7:00 AM - 7:00 PM"
        },
        {
            id: 6,
            name: "Local Pharmacy",
            address: "303 Cedar St, Townsville",
            phone: "(678) 901-2345",
            hours: "8:00 AM - 8:00 PM"
        },
        {
            id: 7,
            name: "Mobile Clinic",
            address: "Various Locations, Villageton",
            phone: "(789) 012-3456",
            hours: "9:00 AM - 3:00 PM"
        },
        {
            id: 8,
            name: "Health Clinic C",
            address: "404 Elm St, Hamletburg",
            phone: "(890) 123-4567",
            hours: "8:00 AM - 6:00 PM"
        }
    ];

    const centersContainer = document.getElementById('centers');
    const centerForm = document.getElementById('center-form');

    const renderCenters = () => {
        centersContainer.innerHTML = '';
        centers.forEach(center => {
            const centerElement = document.createElement('div');
            centerElement.classList.add('center');

            centerElement.innerHTML = `
                <h2>${center.name}</h2>
                <p><strong>Address:</strong> ${center.address}</p>
                <p><strong>Phone:</strong> ${center.phone}</p>
                <p><strong>Hours:</strong> ${center.hours}</p>
                <button class="update" onclick="updateCenter(${center.id})">Update</button>
                <button onclick="removeCenter(${center.id})">Remove</button>
            `;

            centersContainer.appendChild(centerElement);
        });
    };

    window.removeCenter = (id) => {
        centers = centers.filter(center => center.id !== id);
        renderCenters();
    };

    window.updateCenter = (id) => {
        const center = centers.find(c => c.id === id);
        if (center) {
            document.getElementById('name').value = center.name;
            document.getElementById('address').value = center.address;
            document.getElementById('phone').value = center.phone;
            document.getElementById('hours').value = center.hours;
            centerForm.dataset.updateId = id;
        }
    };

    centerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const hours = document.getElementById('hours').value;

        const updateId = centerForm.dataset.updateId;
        if (updateId) {
            const center = centers.find(c => c.id === parseInt(updateId));
            center.name = name;
            center.address = address;
            center.phone = phone;
            center.hours = hours;
            delete centerForm.dataset.updateId;
        } else {
            const newCenter = {
                id: centers.length ? centers[centers.length - 1].id + 1 : 1,
                name,
                address,
                phone,
                hours
            };
            centers.push(newCenter);
        }

        centerForm.reset();
        renderCenters();
    });

    renderCenters();
});
