// Exam Chart
const ctx = document.getElementById('examChart').getContext('2d');
const examChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Passed', 'Failed'],
        datasets: [{
            data: [60, 40],
            backgroundColor: ['#2563eb', '#f87171']
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});

// Logout button logic
const logoutBtn = document.querySelector('.logout');
logoutBtn.addEventListener('click', () => {
    // Clear any login info from localStorage/sessionStorage
    localStorage.removeItem('loggedInUser'); // if using localStorage
    sessionStorage.removeItem('loggedInUser'); // if using sessionStorage

    // Redirect to login page
    window.location.href = "index.html";
});
