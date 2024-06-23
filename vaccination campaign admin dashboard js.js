document.addEventListener('DOMContentLoaded', () => {
    let campaigns = [
        {
            id: 1,
            vaccine: "COVID-19 Vaccine",
            time: "10:00 AM - 4:00 PM",
            place: "Community Center",
            center: "Health Clinic A"
        },
        {
            id: 2,
            vaccine: "Flu Vaccine",
            time: "9:00 AM - 3:00 PM",
            place: "Town Hall",
            center: "Health Clinic B"
        },
        {
            id: 3,
            vaccine: "Hepatitis B Vaccine",
            time: "11:00 AM - 5:00 PM",
            place: "School Gym",
            center: "Health Clinic C"
        }
    ];

    const campaignsContainer = document.getElementById('campaigns');
    const campaignForm = document.getElementById('campaign-form');

    const renderCampaigns = () => {
        campaignsContainer.innerHTML = '';
        campaigns.forEach(campaign => {
            const campaignElement = document.createElement('div');
            campaignElement.classList.add('campaign');

            campaignElement.innerHTML = `
                <h2>${campaign.vaccine}</h2>
                <p><strong>Time:</strong> ${campaign.time}</p>
                <p><strong>Place:</strong> ${campaign.place}</p>
                <p><strong>Vaccination Center:</strong> ${campaign.center}</p>
                <button class="update" onclick="updateCampaign(${campaign.id})">Update</button>
                <button onclick="removeCampaign(${campaign.id})">Remove</button>
            `;

            campaignsContainer.appendChild(campaignElement);
        });
    };

    window.removeCampaign = (id) => {
        campaigns = campaigns.filter(campaign => campaign.id !== id);
        renderCampaigns();
    };

    window.updateCampaign = (id) => {
        const campaign = campaigns.find(c => c.id === id);
        if (campaign) {
            document.getElementById('vaccine').value = campaign.vaccine;
            document.getElementById('time').value = campaign.time;
            document.getElementById('place').value = campaign.place;
            document.getElementById('center').value = campaign.center;
            campaignForm.dataset.updateId = id;
        }
    };

    campaignForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const vaccine = document.getElementById('vaccine').value;
        const time = document.getElementById('time').value;
        const place = document.getElementById('place').value;
        const center = document.getElementById('center').value;

        const updateId = campaignForm.dataset.updateId;
        if (updateId) {
            const campaign = campaigns.find(c => c.id === parseInt(updateId));
            campaign.vaccine = vaccine;
            campaign.time = time;
            campaign.place = place;
            campaign.center = center;
            delete campaignForm.dataset.updateId;
        } else {
            const newCampaign = {
                id: campaigns.length ? campaigns[campaigns.length - 1].id + 1 : 1,
                vaccine,
                time,
                place,
                center
            };
            campaigns.push(newCampaign);
        }

        campaignForm.reset();
        renderCampaigns();
    });

    renderCampaigns();
});
