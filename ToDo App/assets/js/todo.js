// Check off Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("complete")
});

// Click to delete todo
$("ul").on("click", "span", function(event){
    // Must specify parent to remove entire li
    $(this).parent().fadeOut("slow", function(){
        // No need for parent because it is specified above.
        $(this).remove();
    });
    event.stopPropagation();
});

// Add a todo of value t when enter is pressed
$("input[type='text']").keypress(function(e){
    if (e.which === 13){                    // On Enter keypress
        var newTodoText = $(this).val();
        $(this).val("");                    // Reset the input field
        $("#list").append("<li><span><i class='fa fa-trash'></i></span> " + newTodoText + "</li>");
    }
});

// Hide / Show the add todo input field
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});
