document.addEventListener('DOMContentLoaded', () => {
    const centers = [
        {
            name: "Health Clinic A",
            address: "123 Main St, Cityville",
            phone: "(123) 456-7890",
            hours: "8:00 AM - 6:00 PM"
        },
        {
            name: "Community Center",
            address: "456 Oak St, Townsville",
            phone: "(234) 567-8901",
            hours: "9:00 AM - 5:00 PM"
        },
        {
            name: "Town Hall",
            address: "789 Pine St, Villageton",
            phone: "(345) 678-9012",
            hours: "8:30 AM - 4:30 PM"
        },
        {
            name: "School Gym",
            address: "101 Maple St, Hamletburg",
            phone: "(456) 789-0123",
            hours: "10:00 AM - 4:00 PM"
        },
        {
            name: "Health Clinic B",
            address: "202 Birch St, Cityville",
            phone: "(567) 890-1234",
            hours: "7:00 AM - 7:00 PM"
        },
        {
            name: "Local Pharmacy",
            address: "303 Cedar St, Townsville",
            phone: "(678) 901-2345",
            hours: "8:00 AM - 8:00 PM"
        },
        {
            name: "Mobile Clinic",
            address: "Various Locations, Villageton",
            phone: "(789) 012-3456",
            hours: "9:00 AM - 3:00 PM"
        },
        {
            name: "Health Clinic C",
            address: "404 Elm St, Hamletburg",
            phone: "(890) 123-4567",
            hours: "8:00 AM - 6:00 PM"
        }
    ];

    const centersContainer = document.getElementById('centers');

    centers.forEach(center => {
        const centerElement = document.createElement('div');
        centerElement.classList.add('center');

        centerElement.innerHTML = `
            <h2>${center.name}</h2>
            <p><strong>Address:</strong> ${center.address}</p>
            <p><strong>Phone:</strong> ${center.phone}</p>
            <p><strong>Hours:</strong> ${center.hours}</p>
        `;

        centersContainer.appendChild(centerElement);
    });
});
