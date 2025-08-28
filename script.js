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
