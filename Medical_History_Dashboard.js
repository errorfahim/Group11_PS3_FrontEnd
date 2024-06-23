document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('View record functionality is not implemented.');
        });
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Edit record functionality is not implemented.');
        });
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this record?')) {
                alert('Record removed successfully.');
            }
        });
    });

    document.querySelectorAll('.disable-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Disable record functionality is not implemented.');
        });
    });
});
