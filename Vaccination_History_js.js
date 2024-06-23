document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('vaccination-form');
    const updateButton = document.getElementById('update-button');
    
    form.addEventListener('submit', event => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const vaccine = document.getElementById('vaccine').value;
        const dose1Date = document.getElementById('dose1-date').value;
        const dose2Date = document.getElementById('dose2-date').value;
        const boosterDate = document.getElementById('booster-date').value;

        alert(`Name: ${name}\nEmail: ${email}\nVaccine: ${vaccine}\nFirst Dose: ${dose1Date}\nSecond Dose: ${dose2Date}\nBooster Dose: ${boosterDate}`);
        
        // Add your form submission logic here, such as sending the data to a server
    });

    updateButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const vaccine = document.getElementById('vaccine').value;
        const dose1Date = document.getElementById('dose1-date').value;
        const dose2Date = document.getElementById('dose2-date').value;
        const boosterDate = document.getElementById('booster-date').value;

        alert(`Updating information...\nName: ${name}\nEmail: ${email}\nVaccine: ${vaccine}\nFirst Dose: ${dose1Date}\nSecond Dose: ${dose2Date}\nBooster Dose: ${boosterDate}`);
        
        // Add your update logic here, such as sending the data to a server for updating
    });
});
