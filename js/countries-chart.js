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
    type: 'pie',
    data: {
    labels: ['Polska', 'Rumunia', 'Bułgaria', 'Węgry', 'Czechy', 'Litwa', 'Grecja', 'Słowacja', 'Chorwacja', 'Portugalia', 'Łotwa', 'Estonia', 'Słowenia', 'Cypr', 'Malta'],
    datasets: [{
            label: '% funduszy',
            data: [27.3, 26.2, 7.1, 6.9, 6.2, 4.0, 3.9, 3.8, 3.5, 3.5, 3.4, 2.3, 1.3, 0.4, 0.3],
            backgroundColor: [
                '#ae1515', //1
                '#be3535', //2
                '#ce5555', //3
                '#de7575', //4
                '#ee9595', //5
                '#f4aa06', //6
                '#f4ba26', //7
                '#f4ca46', //8
                '#f4da66', //9
                '#f4ea86', //10
                '#c4a5f2', //11
                '#c4b5f2', //12
                '#c4c5f2',//13
                '#c4d5f2',//14
                '#c4e5f2'//15
            ],
            borderColor: [
                '#ae1515', //1
                '#be3535', //2
                '#ce5555', //3
                '#de7575', //4
                '#ee9595', //5
                '#f4aa06', //6
                '#f4ba26', //7
                '#f4ca46', //8
                '#f4da66', //9
                '#f4ea86', //10
                '#c4a5f2', //11
                '#c4b5f2', //12
                '#c4c5f2',//13
                '#c4d5f2',//14
                '#c4e5f2'//15
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
