document.getElementById("myForm").addEventListener("submit", savebookmark);


function savebookmark(e) {

    //get form values
    var siteName = document.getElementById("siteName").value;
    var siteUrl = document.getElementById("siteUrl").value;
    
    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    /*
    //local storage test
    localStorage.setItem("test", "hello world");
    console.log(localStorage.getItem("test"));
    localStorage.removeItem("test");
    console.log(localStorage.getItem("test"));

    console.log(bookmark);
    */

    //test if bookmarks is null
    if(localStorage.getItem("bookmarks") === null ){
        var bookmarks = [];
        //add to array
        bookmarks.push(bookmark);
        //set to local stoage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }else{
        //get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        //add bookmarks to the array
        bookmarks.push(bookmark);
        //reset back to localstorage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
    
//fetch bookmarks
function fetchBookmarks() {
    //get bookmarks from localstorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    //get output id
    var bookmarksresults = document.getElementById("bookmarksResults");
    //build output
    bookmarksresults.innerHTML = "";
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksresults.innerHTML += '<div class="well'>+
                                      "<h3>"+name+
                                      '<a class="btn btn-default" target="_blank" href="'+url+'" >visit</a> '
                                      "</h3>"+
                                      "</div>";
    }
   
}




    //Prevent form from submitting
    e.preventDefault();
   
}