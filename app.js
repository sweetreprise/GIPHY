async function searchGIF() {
    let config = {
        params: {
            tag: `${$('#search')[0].value}`,
            api_key: "6qahPjYEe2wyuH4XR1tIe8864MhnLuhJ"
        }
    }
    
    console.log($('#search'));
    let response = await axios.get('https://api.giphy.com/v1/gifs/random', config);
    renderGIFs(response.data.data.image_url)
}

function renderGIFs(GIF) {
    $('#container').append(`<img src=${GIF}>`)
}

$('#search-gif').on('click', e => {
    e.preventDefault();
    searchGIF();
});

$('#remove-gif').on('click', e => {
    e.preventDefault();
    $('#container').empty();
});
