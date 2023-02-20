var apiResp;
var userImages = {
    "Duddy": "https://musicleague-user-assets.b-cdn.net/users/7640ed5cbd03492e8404b49c80b9112a/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=19292a52-2cd2-41f9-8d53-c524a0e35708&width=300",
    "Taylor Nowak": "https://musicleague-user-assets.b-cdn.net/users/c862cbac8a574537b53a851ed7b9e8db/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=d065162e-7f08-44e7-aceb-14ec7d7eee92&width=300",
    "Sam Haugh": "https://musicleague-user-assets.b-cdn.net/users/321fcf115c9840c784898b9cc0423f46/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=3fc8e357-2628-4e75-a6ac-1f4625bee8d6&width=300",
    "Ian": "https://musicleague-user-assets.b-cdn.net/users/3e52d3d25c984bd0a543fedcb305ee88/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=cccd38ec-be87-4267-ac3f-8d9c59c560f0&width=300",
    "brycecmeade": "https://musicleague-user-assets.b-cdn.net/users/5ba3c2472e6442038a7a144497880f6e/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=37e360be-d9ac-47dc-9f2a-613fa64531c0&width=300",
    "Michael Huang": "https://musicleague-user-assets.b-cdn.net/users/958062759f774e4b9bba21a6655e07b5/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=a011b55e-e824-4b97-a515-79170b32a581&width=300",
    "shanice": "https://musicleague-user-assets.b-cdn.net/users/a55b366fe07a4aefb21e8c8bfb0d66e3/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=9e5cce75-fb5a-4761-8df0-48fc109ac2c9&width=300",
    "matthewrodigo1": "https://musicleague-user-assets.b-cdn.net/users/ad45516d90ca453eb8e2f6c45c46aef2/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=34916d45-7880-4f9e-b0ae-abe9a4fefa56&width=300",
    "Brandon Morrow": "https://musicleague-user-assets.b-cdn.net/users/b3e088fa81bd42a2ae8aef8fccf3758b/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=59367fc1-6dff-4ffb-b014-210cf2d6abd9&width=300",
    "David Gamero": "https://musicleague-user-assets.b-cdn.net/users/b7d6fc7b4c9f43d794adb2da04db4d03/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=7e301f70-90bf-4277-b050-fa0a8db4f75d&width=300",
    "Morgan": "https://musicleague-user-assets.b-cdn.net/users/e48d80b5ac384fdf8ab8045291b2e7c6/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=1e76f706-d2f4-462f-8eff-68a3b403d6d8&width=300",
    "Daniy Bigd": "https://musicleague-user-assets.b-cdn.net/users/072ab05450064c5698e7c078d8b6bb63/images/profile?aspect_ratio=1%3A1&generated=1&height=300&optimizer=image&quality=70&v=240c9129-894c-42f5-ae56-c4ca9e2c3b4c&width=300",
    "JP": "https://musicleague-user-assets.b-cdn.net/users/ee269fb504d34c9d8fcc5f570917fc58/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=62544e4b-8c73-4cb7-8b26-c75d9f0d3295&width=300",
    "Max Springer": "https://musicleague-user-assets.b-cdn.net/users/d5cd292834c5404f9f18db59e7f0d005/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=212eb4e5-3e58-4930-9ee6-89f2f9ac1251&width=300",
    "Jake Alzapiedi": "https://musicleague-user-assets.b-cdn.net/users/383fcb98b3324a3e81d0ebc558789e6e/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=6cad1277-c4db-4e9f-bb32-b5b3537118c6&width=300",
    "Christian Morales": "https://musicleague-user-assets.b-cdn.net/users/f133690f994d4577b98bea4821919637/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=895f84ee-ac81-429d-9bb1-a7d27f0d7934&width=300",
    "Ryan Van Curen": "https://musicleague-user-assets.b-cdn.net/users/c4f075d75aca409e81cfa2ced375d473/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=bef29858-94af-40a5-90e4-89bad7aa85fc&width=300",
    "Ava Jeanette": "https://musicleague-user-assets.b-cdn.net/users/88e6219ea4c5425e857e3303fd87aff3/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=eb150509-59a3-4158-a337-333100e90b7d&width=300",
    "1225667425": "https://musicleague-user-assets.b-cdn.net/users/38f4206134d04cf38c401600289fe6e8/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=f127f6ad-dd06-47d8-ae08-e5fdaa6902cc&width=300",
    "Jack Bardash": "https://musicleague-user-assets.b-cdn.net/users/9ec0dd4281ec4c94aabbfa3fce7e4c49/images/profile?aspect_ratio=1%3A1&height=300&optimizer=image&quality=70&v=2265fcb3-f945-4ff6-ac35-76e416916d63&width=300"
}
var leagueMembers = new Set()

fetch("https://brscvg5a2a.execute-api.us-east-1.amazonaws.com")
    .then(response => response.json())
    .then(response => { // Not sure of a better way to save the api response so we only have to call it once
        apiResp = response;
        return response;
    })
    .then(response => populateLeagueMembers(response))
    .then(response => populateDropdown());

function populateLeagueMembers(response) {
    for (var round of response["rounds"]) {
        results = round["results"]
        for (var i = 0; i < results.length; i++) {
            leagueMembers.add(results[i]["submitter_name"])
        }
    }

    return response;
}

function populateDropdown() {
    let dropDownDiv = document.getElementById("userDropdown");
    for (let leagueMember of leagueMembers) {
        dropDownItem = document.createElement('button');
        dropDownItem.className = "dropdown-item"
        dropDownItem.setAttribute("onclick", `populateCompare(\"${leagueMember}\")`);
        dropDownItem.innerHTML = leagueMember
        dropDownDiv.appendChild(dropDownItem);
    }
}

function populateCompare(member) {
    // Clear current compare
    let comparisonDiv = document.getElementById("memberComparisonDiv");
    comparisonDiv.innerHTML = ""

    // Set title
    let title = `<h1 id="compareTitle" class="col-10 title">${member}</h1>`;
    let compareTitle = document.getElementById("compareTitle");
    compareTitle.innerHTML = title;

    rows = getComparisonRows(member);
    for (let rowDiv of rows) {
        comparisonDiv.appendChild(rowDiv);
    }

}

function getComparisonRows(member) {
    rows = []
    for (let leagueMemberToCompare of leagueMembers) {
        if (leagueMemberToCompare !== member) {
            let rowDiv = document.createElement('div');
            rowDiv.setAttribute("class", "row d-flex justify-content-between align-items-center")
            addMemberColumn(rowDiv, member);
            addVotingSimilarityColumn(rowDiv, member, leagueMemberToCompare);
            addMemberColumn(rowDiv, leagueMemberToCompare);
            rows.push(rowDiv);
        }
    }

    rows.sort((a, b) => b.getElementsByTagName("h4")[0].innerText.split(" ")[0] - a.getElementsByTagName("h4")[0].innerText.split(" ")[0])
    return rows
}

function addVotingSimilarityColumn(rowDiv, member1, member2) {
    let column = document.createElement('div');
    column.setAttribute("class", "col-4 p-2 my-2 d-flex justify-content-center");
    let votingSimilarity = document.createElement("h4");
    votingSimilarity.innerText = `${getVotingSimilarity(member1, member2)} similar votes`;
    votingSimilarity.setAttribute("class", "purpleText")
    column.appendChild(votingSimilarity);
    rowDiv.appendChild(column);
}

function getVotingSimilarity(member1, member2) {
    let totalCommonVotes = 0;
    for (var round of apiResp["rounds"]) {
        let round_name = round["round_name"];
        results = round["results"];
        for (var i = 0; i < results.length; i++) {
            let song = results[i]["song"];
            let member1votes = 0;
            let member2votes = 0;
            for (var voter of results[i]["voters"]) {
                if (voter["voter_name"] === member1) {
                    member1votes = voter["num_of_votes"]
                } else if (voter["voter_name"] === member2) {
                    member2votes = voter["num_of_votes"];
                }
            }
            // Check if both positive or both negative
            // We don't want to count +2 and -1 as a common vote
            // We do want to count +2 and +1 as 1 common votes
            // We do want to count -1 and -1 as 1 common votes
            if ((member1votes > 0 && member2votes > 0) || (member1votes < 0 && member2votes < 0)) {
                // Take the absolute value of min so -1 and -1 count as 1 common votes for negative case
                // +3 and +2 would count as 2 common votes
                let songCommonVotes = Math.abs(Math.min(member1votes, member2votes));
                console.log(`${member1} and ${member2} shared ${songCommonVotes} on ${song} in ${round_name} round`);
                totalCommonVotes += Math.abs(Math.min(member1votes, member2votes));
            }
        }
    }

    return totalCommonVotes;
}

function addMemberColumn(rowDiv, voteGiverMember) {
    let column = document.createElement('div');
    column.setAttribute("class", "col-4 p-2 my-2 card purpleShadow");
    column.appendChild(getImage(voteGiverMember));
    column.appendChild(getCardBody(voteGiverMember));

    rowDiv.appendChild(column);
}

function getImage(member) {
    let image = document.createElement("img");
    image.setAttribute("src", userImages[member]);
    image.setAttribute("class", "card-img-top");
    image.setAttribute("alt", `${member}`);
    return image
}

function getCardBody(voteGiverMember) {
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerHTML = `${voteGiverMember}`
    cardBody.appendChild(cardTitle);
    return cardBody;

}