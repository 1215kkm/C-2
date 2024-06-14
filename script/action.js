/* fade */
setInterval(function(){
    $('.fade li').eq(0).fadeIn(500).delay(2000).fadeOut(500).delay(6000)
    $('.fade li').eq(1).delay(3000).fadeIn(500).delay(2000).fadeOut(500).delay(3000)
    $('.fade li').eq(2).delay(6000).fadeIn(500).delay(2000).fadeOut(500)
});


/* popup */
$('.notice li').eq(0).click(function(){
    $('.modal').fadeIn();
})

$('.popup a').click(function(){
    $('.modal').fadeOut();
})


