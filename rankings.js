var apiResp;

fetch("https://brscvg5a2a.execute-api.us-east-1.amazonaws.com")
    .then(response => response.json())
    .then(response => { // Not sure of a better way to save the api response so we only have to call it once
        apiResp = response;
        return response;
    })
    .then(response => showTopSongs(response))
    .then(response => populateDropdown(response));


function showTopSongs(response) {
    var songs = []
    for (var round of response["rounds"]) {
        results = round["results"]
        for (var i = 0; i < results.length; i++) {
            songs.push(`${results[i]["number_of_votes"]} Votes: ${results[i]["song"]} - ${results[i]["artist"]} (${results[i]["submitter_name"]})`)
        }
    }

    const scrollableTextBox = document.getElementById("scrollableTextBox");

    // sorts by number of votes
    songs.sort((a, b) => parseInt(b.split(" ")[0]) - parseInt(a.split(" ")[0]));

    scrollableTextBox.value = songs.join("\n")
    return response
}

function populateDropdown(response) {
    var leagueMembers = new Set()
    for (var round of response["rounds"]) {
        results = round["results"]
        for (var i = 0; i < results.length; i++) {
            leagueMembers.add(results[i]["submitter_name"])
        }
    }

    let dropDownDiv = document.getElementById("userDropdown")
    for (let leagueMember of leagueMembers) {
        dropDownItem = document.createElement('button');
        dropDownItem.className = "dropdown-item"
        dropDownItem.setAttribute("onclick", `populateUserSongs(\"${leagueMember}\")`)
        dropDownItem.innerHTML = leagueMember
        dropDownDiv.appendChild(dropDownItem)
    }
}

function populateUserSongs(name) {
    var songs = []
    for (var round of apiResp["rounds"]) {
        results = round["results"]
        for (var i = 0; i < results.length; i++) {
            // Only add songs submitted by user
            if (results[i]["submitter_name"] === name) {
                songs.push(`${results[i]["number_of_votes"]} Votes: ${results[i]["song"]} - ${results[i]["artist"]}`)
            }
        }
    }

    // Clear current hall of fame and set new title
    document.getElementById('hallOfFameTitle').innerHTML = `Top Songs For ${name}`;

    const scrollableTextBox = document.getElementById("scrollableTextBox");

    // sorts by number of votes
    songs.sort((a, b) => parseInt(b.split(" ")[0]) - parseInt(a.split(" ")[0]));
    scrollableTextBox.value = songs.join("\n")
}