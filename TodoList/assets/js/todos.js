$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


//click on x to delect to do
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
      $(this).remove();  
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        var todoText = $(this).val();

        $(this).val("");
        $("ul").append("<li><span>x</span> " + todoText + "</li>");
    }
});