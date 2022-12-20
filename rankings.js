var apiResp;

fetch("https://brscvg5a2a.execute-api.us-east-1.amazonaws.com")
    .then(response => response.json())
    .then(response => { // Not sure of a better way to save the api response so we only have to call it once
        apiResp = response;
        return response;
    })
    .then(response => show_top_10(response))
    .then(response => populate_dropdown(response));


function show_top_10(response) {
    var listItems = []
    for (const [roundName, results] of Object.entries(apiResp)) {
        for (var i = 0; i < results.length; i++) {
            listItems.push(`${results[i]["number_of_votes"]} Votes: ${results[i]["song"]} - ${results[i]["artist"]} (${results[i]["submitter_name"]})`)
        }
    }

    const scrollableTextBox = document.getElementById("scrollableTextBox");

    // sorts by number of votes
    listItems.sort((a, b) => parseInt(b.split(" ")[0]) - parseInt(a.split(" ")[0]));
    for (const listItem of listItems) {
        var childDiv = document.createElement('span');
        childDiv.className = "songRow"
        childDiv.innerHTML = listItem
    }
    scrollableTextBox.value = listItems.join("\n")
    return response
}

function populate_dropdown(response) {
    var leagueMembers = new Set()
    for (const [roundName, results] of Object.entries(response)) {
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
    var listItems = []
    for (const [roundName, results] of Object.entries(apiResp)) {
        for (var i = 0; i < results.length; i++) {
            // Only add songs submitted by user
            if (results[i]["submitter_name"] === name) {
                listItems.push(`${results[i]["number_of_votes"]} Votes: ${results[i]["song"]} - ${results[i]["artist"]}`)
            }
        }
    }

    // Clear current hall of fame and set new title
    document.getElementById('hallOfFameTitle').innerHTML = `Top Songs For ${name}`;

    const scrollableTextBox = document.getElementById("scrollableTextBox");

    // sorts by number of votes
    listItems.sort((a, b) => parseInt(b.split(" ")[0]) - parseInt(a.split(" ")[0]));
    for (const listItem of listItems) {
        var childDiv = document.createElement('span');
        childDiv.className = "songRow"
        childDiv.innerHTML = listItem
    }
    scrollableTextBox.value = listItems.join("\n")
}