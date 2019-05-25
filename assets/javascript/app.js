// DOM elements
$addBtn = $('#addBtn')
$gifArea = $('#gifArea')
$gifText = $('#gifText')
$btnArea = $('#btnArea')

// JS elements
const apiKey = '7NfyKqoRW6mHhbsfWjQPkIeS1zjsYiYW'
let topics = []
let queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + gifName + '&api_key=' + apiKey + '&limit=10'

// prevents user from spamming blank input, also pushes all inputs to array as upper case
$addBtn.on('click', function () {
    if ($gifText.val() === '') {
        return false
    }
    else {
    topics.push($gifText.val().toUpperCase())
    console.log(topics)
    renderBtn()
    }
    $gifText.val('')
})

// function to render button
function renderBtn() {
    $btnArea.empty()
    for (i = 0; i < topics.length; i++) {
        let a = $('<button>')
        a.addClass('m-1 btn btn-dark gifNewBtn')
        a.text(topics[i])
        a.attr('gif-name', topics[i])
        a.attr('id', topics[i])
        $btnArea.append(a)
    }
}

$(document).on('click', '.gifNewBtn', displayGifStats)

function displayGifStats() {
    let gifName = $(this).attr('gif-name')
    console.log(gifName)

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    let data = response.data
    console.log(response.data.length)
    console.log(response.data)
    for (i=0; i<response.data.lenth; i++) {

    }
})
}