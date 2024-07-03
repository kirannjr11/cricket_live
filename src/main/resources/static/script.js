$(document).ready(function() {
    function fetchLiveMatches() {
        $.ajax({
            url: '/match/live',
            method: 'GET',
            success: function(data) {
                console.log('Data fetched successfully:', data);
                updateMatches(data);
            },
            error: function(error) {
                console.error('Error fetching live matches:', error);
            }
        });
    }

    function updateMatches(matches) {
        const matchesContainer = $('#matches');
        matchesContainer.empty();

        matches.forEach(match => {
            console.log('Processing match:', match);
            const matchCard = `
                <div class="match-card">
                    <h2>${match.teamHeading}</h2>
                    <p>${match.matchNumberVenue}</p>
                    <p>Bowl Team: ${match.bowlTeam} - ${match.bowlTeamScore}</p>
                    <p>Batting Team: ${match.battingTeam} - ${match.battingTeamScore}</p>
                    <p class="status">${match.liveText}</p>
                    <p><a href="${match.matchLink}">Match Link</a></p>
                </div>
            `;
            matchesContainer.append(matchCard);
        });
         $('#matches').show();
         $('#point-table').hide();
    }


    fetchLiveMatches();


    setInterval(fetchLiveMatches, 30000);

    $('#liveScore').click(function(event) {
        event.preventDefault();
        fetchLiveMatches();
    });
});
