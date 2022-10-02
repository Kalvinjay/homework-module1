$(document).ready(function(){
    $(document).bind("click", function(e) {
         $(e.target).closest("td").toggleClass("highlight");
    });
});
  
    document.getElementById("unselectable"). onselectstart = function () {
        return false;
    }
