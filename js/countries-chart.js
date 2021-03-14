// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'doughnut',

//     // The data for our dataset
//     data: {
//         labels: ['Bułgaria', 'Chorwacja', 'Cypr', 'Czechy', 'Estonia', 'Grecja', 'Węgry', 'Łotwa', 'Litwa', 'Malta', 'Polska', 'Portugalia', 'Rumunia', 'Słowacja', 'Słowenia'],
//         datasets: [{
//             label: 'Beneficjenci Funudszy Norweskich i EOG',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: ['Bułgaria', 'Chorwacja', 'Cypr', 'Czechy', 'Estonia', 'Grecja', 'Węgry', 'Łotwa', 'Litwa', 'Malta', 'Polska', 'Portugalia', 'Rumunia', 'Słowacja', 'Słowenia'],
    datasets: [{
            label: '% funduszy',
            data: [7.1, 3.5, 0.4, 6.2, 2.3, 3.9, 6.9, 3.4, 4, 0.3, 27.3, 3.5, 26.2, 3.8, 1.3],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
