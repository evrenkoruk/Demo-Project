// Calling the function
$(function() {
    $('.toggle-nav').click(function() {
        toggleNavigation();
    });
});
 
// The toggleNav function itself
function toggleNavigation() {
    if ($('#container').hasClass('display-nav')) {
        // Close Nav
        $('#container').removeClass('display-nav');
    } else {
        // Open Nav
        $('#container').addClass('display-nav');
    }
}

// SLiding codes
$("#toggle>li>div").click(function () {
    if (false == $(this).next().is(':visible')) {
        $('#toggle ul').slideUp();
    }
 
    var $currIcon=$(this).find(&amp;quot;span.the-btn&amp;quot;);
 
    $(&amp;quot;span.the-btn&amp;quot;).not($currIcon).addClass('fa-plus').removeClass('fa-minus');
 
    $currIcon.toggleClass('fa-minus fa-plus');
 
    $(this).next().slideToggle();
 
    $(&amp;quot;#toggle &amp;gt; li &amp;gt; div&amp;quot;).removeClass(&amp;quot;active&amp;quot;);
    $(this).addClass('active');
 
});