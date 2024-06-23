document.addEventListener('DOMContentLoaded', () => {
    const viewButtons = document.querySelectorAll('.view-btn');
    const editButtons = document.querySelectorAll('.edit-btn');
    const removeButtons = document.querySelectorAll('.remove-btn');
    const updateButtons = document.querySelectorAll('.update-btn');

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            const name = row.cells[1].innerText;
            const email = row.cells[2].innerText;
            const vaccine = row.cells[3].innerText;
            const dose1Date = row.cells[4].innerText;
            const dose2Date = row.cells[5].innerText;
            const boosterDate = row.cells[6].innerText;

            alert(`Viewing info for ${name}:\nEmail: ${email}\nVaccine: ${vaccine}\nFirst Dose: ${dose1Date}\nSecond Dose: ${dose2Date}\nBooster Dose: ${boosterDate}`);
        });
    });

    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            // Logic to edit the row data
            alert('Edit functionality not implemented.');
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            row.remove();
            alert('Record removed.');
        });
    });

    updateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            // Logic to update the row data
            alert('Update functionality not implemented.');
        });
    });
});
