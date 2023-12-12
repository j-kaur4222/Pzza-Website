$(document).ready(function() {
    // Toggle visibility of answers when clicking on questions
    $('.question').on('click', function() {
        var answer = $(this).next('.answer');
        answer.slideToggle();
    });
});
$("#btn").click(function(){
    var url = "contact.html";
$(location).attr('href',url);
});
