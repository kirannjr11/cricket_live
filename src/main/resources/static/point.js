$(document).ready(function() {
    $('#point-table-link').click(function(event) {
        event.preventDefault(); // Prevent the default link behavior

        $.ajax({
            url: '/match/point',
            method: 'GET',
            success: function(data) {
                updatePointTable(data);
            },
            error: function(error) {
                console.error('Error fetching point table:', error);
            }
        });
    });

    function updatePointTable(pointTable) {
        const pointTableContainer = $('#point-table');
        pointTableContainer.empty(); // Clear any existing content

        // Assuming pointTable is an array of objects with necessary fields
        let tableHtml = '<table>';
        tableHtml += '<tr><th>Team</th><th>Played</th><th>Won</th><th>Lost</th><th>Tied</th><th>NR</th><th>Points</th><th>NRR</th></tr>';

        pointTable.forEach(team => {
            tableHtml += `<tr>
                <td>${team.name}</td>
                <td>${team.played}</td>
                <td>${team.won}</td>
                <td>${team.lost}</td>
                <td>${team.tied}</td>
                <td>${team.nr}</td>
                <td>${team.points}</td>
                <td>${team.nrr}</td>
            </tr>`;
        });

        tableHtml += '</table>';

        pointTableContainer.append(tableHtml);
        pointTableContainer.show(); // Display the point table container


        $('#matches').hide();
    }

    $(document).ready(function() {

        $('#point-table-link').click(function(e) {
            e.preventDefault();
            $('.point-table').toggle();
        });
    });


});
