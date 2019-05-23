// DOM elements
$addBtn = $('#addBtn')
$gifArea = $('#gifArea')
$gifText = $('#gifText')
$btnArea = $('#btnArea')

// JS elements
const apiKey = '7NfyKqoRW6mHhbsfWjQPkIeS1zjsYiYW'
let topics = []
let queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + 'cat' + '&api_key=' + apiKey + '&limit=10'

$addBtn.on('click', function () {
    topics.push($gifText.val())
    console.log(topics)
    renderBtn()
})

function renderBtn() {
    $btnArea.empty()
    for (i = 0; i < topics.length; i++) {
        let a = $('<button>')
        a.addClass('m-1 btn btn-dark')
        a.text(topics[i])
        a.attr('gif-name', topics[i])
        $btnArea.append(a)
    }
}

// $.ajax({
//     url: queryURL,
//     method: 'GET'
// }).then(function(response) {
//     let data = response.data
//     console.log(response.data.length)
//     console.log(response.data)
//     for (i=0; i<response.data.lenth; i++) {

//     }
// })