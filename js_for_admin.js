document.addEventListener('DOMContentLoaded', () => {
    const users = [
        { id: 1, name: 'Sirin', regNo: 'REG001', email: 'Sirin@gmail.com', phone: '23456781', status: 'Active', created: '2023-06-20' },
        { id: 2, name: 'Makrem', regNo: 'REG002', email: 'makrem@gmail.com', phone: '12345678', status: 'Active', created: '2023-06-20' },
        { id: 3, name: 'Fathi', regNo: 'REG003', email: 'fathi@gmail.com', phone: '98765432', status: 'Inactive', created: '2023-06-20' },
        { id: 4, name: 'Ahmed', regNo: 'REG004', email: 'ahmed@gmail.com', phone: '87654321', status: 'Active', created: '2023-06-20' },
    ];

    const userTableBody = document.getElementById('userTableBody');

    users.forEach((user, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.regNo}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.status}</td>
            <td>${user.created}</td>
            <td class="action-buttons">
                <button class="view" onclick="viewUser(${user.id})">View</button>
                <button class="edit" onclick="editUser(${user.id})">Edit</button>
                <button class="remove" onclick="removeUser(${user.id})">Remove</button>
                <button class="disable" onclick="disableUser(${user.id})">Disable</button>
            </td>
        `;

        userTableBody.appendChild(row);
    });
});

function viewUser(id) {
    alert(`View details for user with ID ${id}`);
}

function editUser(id) {
    alert(`Edit details for user with ID ${id}`);
}

function removeUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        alert(`User with ID ${id} has been deleted`);
    }
}

function disableUser(id) {
    alert(`User with ID ${id} has been disabled`);
}
