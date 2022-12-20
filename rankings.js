fetch("https://brscvg5a2a.execute-api.us-east-1.amazonaws.com")
    .then(response => response.json())
    .then(response => show_top_10(response))
    .then(response => populate_dropdown(response));


function show_top_10(response) {
    var listItems = []
    for (const [roundName, results] of Object.entries(response)) {
        for (var i = 0; i < results.length; i++) {
            //gathers votes, songs, and submitter for hall of fame
            const listItem = document.createElement('div');
            listItem.className = "songRow"
            listItem.innerHTML = `
              <span class="votes">${results[i]["number_of_votes"] + " Votes: "}</span>
              <span class="name">${results[i]["song"] + " - " + results[i]["artist"] + " (" + results[i]["submitter_name"] + ")"}</span>
            `;
            listItem.setAttribute('data-number', results[i]["number_of_votes"]); // store the number in a data attribute
            listItems.push(listItem)
        }
    }

    //sorts hall of fame
    listItems.sort((a, b) => b.getAttribute('data-number') - a.getAttribute('data-number'));
    var count = 0;
    for (const listItem of listItems) {
        // Only list top 10
        if (count > 10) {
            break;
        }
        document.getElementById('rankings').appendChild(listItem);
        count++;
    }
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
        dropDownItem = document.createElement('a');
        dropDownItem.className = "dropdown-item"
        dropDownItem.innerHTML = leagueMember
        dropDownDiv.appendChild(dropDownItem)
    }
}