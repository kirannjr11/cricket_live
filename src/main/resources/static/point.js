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
        let tableHtml = '<table class="point-table">';
        tableHtml += '<tr><th>Team</th><th>Played</th><th>Won</th><th>Lost</th><th>Tied</th><th>NR</th><th>Points</th><th>NRR</th></tr>';

        pointTable.forEach(team => {
            let rowClass = '';
            if (team.points >= 14) {
                rowClass = 'qualified';
            } else {
                rowClass = 'eliminated';
            }

            tableHtml += `<tr class="${rowClass}">
                <td>${team.Name}</td>
                <td>${team.Mat}</td>
                <td>${team.Won}</td>
                <td>${team.Lost}</td>
                <td>${team.Tied}</td>
                <td>${team.NR}</td>
                <td>${team.Pts}</td>
                <td>${team.NRR}</td>
            </tr>`;
        });

        tableHtml += '</table>';

        pointTableContainer.append(tableHtml);
        pointTableContainer.show(); // Display the point table container

        $('#matches').hide();
    }
});