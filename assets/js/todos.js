$("ul").on("click","li", function() {
    $(this).toggleClass("striked");
})

$("ul").on("click","li span", function(event) {
    $(this).parent().fadeOut("slow", function() {
        $(this).remove();
    });
    
    event.stopPropogation();
})

$("input[type='text']").keypress(function(event) {
    if (event.which === 13)
    {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + " " + todoText + "</li>");
    }
})

$("#addtodo").on("click", function() {
    $("input[type='text']").fadeToggle("slow");
})