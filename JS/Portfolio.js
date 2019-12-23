// adds smooth scrolling to all links
$(document).ready(function(){
    $("a").on('click', function(event) {

        if (this.Link !== "") {
            event.preventDefault();

            var Link = this.Link;

            $('html, body').animate({
                scrollTop: $(Link).offset().top
            }, 2000, function() {
                window.location.Link = Link;            
            });
        }
    });
});

// opens and closes contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    this.Close();
}