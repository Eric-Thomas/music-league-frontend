const filterSearch = document.getElementById("filterSearch");
const scrollableTextBox = document.getElementById("scrollableTextBox");
var submissions = []

filterSearch.addEventListener("keyup", function() {
    var filter = this.value.toLowerCase().replace(/[\u2018\u2019]/g, "'");
    const filteredData = submissions.filter(item => item.toLowerCase().includes(filter));
    scrollableTextBox.value = filteredData.join("\n");
});

fetch("https://brscvg5a2a.execute-api.us-east-1.amazonaws.com")
    .then(response => response.json())
    .then(response => populateSearchBox(response));

function populateSearchBox(response) {
    for (var round of response["rounds"]) {
        results = round["results"]
        for (var i = 0; i < results.length; i++) {
            submissions.push(`${results[i]["song"]}  - ${results[i]["artist"]} (Submitted by ${results[i]["submitter_name"]} ${results[i]["number_of_votes"]} votes)`)
        }
    }
    scrollableTextBox.value = submissions.join("\n");
}