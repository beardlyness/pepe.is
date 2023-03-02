function reloadOnClick() {
    window.location.reload();
}

function copyOnClick() {
    // Get the value field
    var copyText = document.getElementById("share_holder");
  
    // Selector field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For Mobile
  
    // Copy the value inside the input field
    navigator.clipboard.writeText(copyText.value);

    // Alert Model for on Page Copy Prompt
    alert("Copied the text: " + copyText.value);
  }

function tweetOnClick() {
    // Get the value field
    var copyText = document.getElementById("share_holder");

    // Selector field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For Mobile
  
    // Copy the value inside the input field
    navigator.clipboard.writeText(copyText.value);

    // Make Web Tweet with the value inside the copy value
    window.open("https://twitter.com/intent/tweet?text=" + "Look what I got from (https://pepe.is) " + copyText.value)
}

// url Async requesting function
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
    return;
}

// callback for the top 8 GIFs of search
function tenorCallback_search(responsetext)
{
    var response_objects = JSON.parse(responsetext);
    top_10_gifs = response_objects["results"];
    document.getElementById("share_holder").value = top_10_gifs[0]["media"][0]["tinygif"]["url"];
    document.getElementById("share_gif").src = top_10_gifs[0]["media"][0]["tinygif"]["url"];
    document.getElementById("share_uri").href = top_10_gifs[0]["media"][0]["tinygif"]["url"];
    return;
}

// function to call the trending and category endpoints
function grab_data()
{
    var apikey = "LIVDSRZULELA";
    var lmt = 8;
    var search_term = "pepe";
    var search_url = "https://g.tenor.com/v1/random?q=" + search_term + "&key=" +
            apikey + "&limit=" + lmt;
    httpGetAsync(search_url,tenorCallback_search);
    return;
}
grab_data();
