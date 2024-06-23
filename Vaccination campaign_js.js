document.addEventListener('DOMContentLoaded', () => {
    const campaigns = [
        {
            vaccine: "COVID-19 Vaccine",
            time: "10:00 AM - 4:00 PM",
            place: "Community Center",
            center: "Health Clinic A"
        },
        {
            vaccine: "Flu Vaccine",
            time: "9:00 AM - 3:00 PM",
            place: "Town Hall",
            center: "Health Clinic B"
        },
        {
            vaccine: "Hepatitis B Vaccine",
            time: "11:00 AM - 5:00 PM",
            place: "School Gym",
            center: "Health Clinic C"
        }
        // Add more campaigns as needed
    ];

    const campaignsContainer = document.getElementById('campaigns');

    campaigns.forEach(campaign => {
        const campaignElement = document.createElement('div');
        campaignElement.classList.add('campaign');

        campaignElement.innerHTML = `
            <h2>${campaign.vaccine}</h2>
            <p><strong>Time:</strong> ${campaign.time}</p>
            <p><strong>Place:</strong> ${campaign.place}</p>
            <p><strong>Vaccination Center:</strong> ${campaign.center}</p>
        `;

        campaignsContainer.appendChild(campaignElement);
    });
});
