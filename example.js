// http://codepen.io/anon/pen/nfcjG

function getSelectedText () {
  if (window.getSelection) {
      var range = window.getSelection ();
      return range.toString()
  } 
  else {
      if (document.selection.createRange) {
          var range = document.selection.createRange ();
          return range.text
      }
  }
}

function createTweetLink (text, e) {
  
  var oldTweetLink = document.getElementById("tweetLink");
  if (oldTweetLink != null && typeof oldTweetLink != "undefined"){  
    oldTweetLink.parentNode.removeChild(oldTweetLink);
  }
  
  if (text === "")
    return undefined;
  var newTweetLink = document.createElement("a");
  newTweetLink.href = "http://twitter.com/home?status=" + escape(text);
  newTweetLink.id = "tweetLink";
  newTweetLink.innerHTML = "Tweet";
  var appendedTweetLink = document.getElementById("contentWrapper").appendChild(newTweetLink);
  $(appendedTweetLink).css({"top": e.pageY - 40, "left": e.pageX + 10});
  return newTweetLink;
}

var textParagraph = document.getElementById("textParagraph");
textParagraph.addEventListener("mouseup", function(e){
  tweetLink = createTweetLink(getSelectedText(), e);
}, false);
