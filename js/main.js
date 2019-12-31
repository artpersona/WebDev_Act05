


var prefix;

function toggleLike(e){
    
    var img1 = document.getElementById(e.target.id);
    var temp = e.target.id;
    temp = temp.charAt(temp.length-1);
    temp = "DL"+temp;
    var img2 = document.getElementById(temp);
    
    if(stringEndsWith(img1.src, "images/like.png")&&stringEndsWith(img2.src,"images/dislike.png")){
       
        document.getElementById(e.target.id).src = prefix+"images/likeClicked.png";
    }
    else if(stringEndsWith(img1.src, "images/like.png")&&stringEndsWith(img2.src,"images/dislikedClicked.png")){
       
        document.getElementById(e.target.id).src = prefix+"images/likeClicked.png";
        document.getElementById(temp).src = prefix+"images/dislike.png";
    }
    else{
        
        document.getElementById(e.target.id).src = prefix+"like.png";
    }
}

function toggleDislike(e){
    
    var img1 = document.getElementById(e.target.id);
    var temp = e.target.id;
    temp = temp.charAt(temp.length-1);
    temp = "L"+temp;
    var img2 = document.getElementById(temp);
  
    if(stringEndsWith(img1.src, "images/dislike.png")&&stringEndsWith(img2.src,"images/like.png")){
       
        document.getElementById(e.target.id).src = prefix+"images/dislikedClicked.png";
    }
    else if(stringEndsWith(img1.src, "images/dislike.png")&&stringEndsWith(img2.src,"images/likeClicked.png")){
      
        document.getElementById(e.target.id).src = prefix+"images/dislikedClicked.png";
        document.getElementById(temp).src = prefix+"images/like.png";
    }
    else{
        
        document.getElementById(e.target.id).src = prefix+"islike.png";
    }
}





function stringEndsWith(string, suffix) {
    prefix = string.substring(0,string.length-suffix.length);
    return string.indexOf(suffix, string.length - suffix.length) !== -1;
}

37
15