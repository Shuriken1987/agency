$(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 50){
        $('.sticky').addClass('stickyAdd');
    }
    else
    $('.sticky').removeClass('stickyAdd');
})


/////////////////////////
const headline = "Full digital service";
let i = 0;
const typing = () => {
    if(i < headline.length){
        document.querySelector('.tipkajuciNaslov').innerHTML += headline.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
}

typing();