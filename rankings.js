var apiResp;

fetch("https://brscvg5a2a.execute-api.us-east-1.amazonaws.com")
    .then(response => response.json())
    .then(response => { // Not sure of a better way to save the api response so we only have to call it once
        apiResp = response;
        return response;
    })
    .then(response => showTopSongs(response))
    .then(response => showContSongs(response))
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

function showContUserSongs(name){
    var songs = []
    for (var round of apiResp["rounds"]) {
        results = round["results"]
        for (var i = 0; i < results.length; i++) {
            if (results[i]["number_of_votes"] >= results[i]["voters"].length || results[i]["submitter_name"] != name){
                continue
            }
            score =  results[i]["voters"].length - Math.abs(results[i]["number_of_votes"])
            if (score == 0){
                continue
            }
            songs.push(`${score} ${results[i]["voters"].length} Voters, ${results[i]["number_of_votes"]} Votes: ${results[i]["song"]} - ${results[i]["artist"]} (${results[i]["submitter_name"]})`)
        }
    }

    // Clear current hall of fame and set new title
    document.getElementById('controversyTitle').innerHTML = `Most Controversial For ${name}`;

    const scrollableTextBox = document.getElementById("box2");

    // sorts by number of votes
    songs.sort((a, b) => parseInt(b.split(" ")[0]) - parseInt(a.split(" ")[0]));

    //remove controversy score for viewing pleasure
    for (var i = 0; i < songs.length; i++){
        songs[i] = songs[i].substring(songs[i].indexOf(' ') + 1)
    }
    
    scrollableTextBox.value = songs.join("\n")
}

function showContSongs(response) {
    var songs = []
    for (var round of response["rounds"]) {
        results = round["results"]
        for (var i = 0; i < results.length; i++) {
            if (results[i]["number_of_votes"] >= results[i]["voters"].length){
                continue
            }
            score =  results[i]["voters"].length - Math.abs(results[i]["number_of_votes"])
            if (score == 0){
                continue
            }
            songs.push(`${score} ${results[i]["voters"].length} Voters, ${results[i]["number_of_votes"]} Votes: ${results[i]["song"]} - ${results[i]["artist"]} (${results[i]["submitter_name"]})`)
        }
    }

    const scrollableTextBox = document.getElementById("box2");

    // sorts by number of votes
    songs.sort((a, b) => parseInt(b.split(" ")[0]) - parseInt(a.split(" ")[0]));
    //remove controversy score for viewing pleasure
    for (var i = 0; i < songs.length; i++){
        songs[i] = songs[i].substring(songs[i].indexOf(' ') + 1)
    }

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
    showContUserSongs(name)
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
