function expand() {
    document.getElementById('expcard').className="none";
    document.getElementById('emb').style.display="block";
    document.getElementById('vidtitle').style.display="none";
    document.getElementById('athr').style.display="none";
    document.getElementById('playbutton').style.display="none";
    document.getElementById('closebutton').style.display="block";
}
function closee() {
    document.getElementById('expcard').className="tofullpagecard";
    document.getElementById('emb').style.display="none";
    document.getElementById('vidtitle').style.display="block";
    document.getElementById('athr').style.display="block";
    document.getElementById('playbutton').style.display="block";
    document.getElementById('closebutton').style.display="none";
}

function initWhatsappChat() {
    'use strict';
    var mobileDetect = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (mobileDetect) {
        $('#float-cta .whatsapp-msg-container').css('display','none');
        $('#float-cta > a').on('click', function(){
            window.location = 'https://api.whatsapp.com/send?phone=123456789';
        });
    } else {
        $('#float-cta > a').click(function(){
            $(this).toggleClass('open');
            $('#float-cta .whatsapp-msg-container').toggleClass('open');
            $('#float-cta').toggleClass('open');
        });
        $('.btn-whatsapp-send').on('click', function(event){
            event.stopPropagation();
        });
        $('.btn-whatsapp-send').click(function() {
            var baseUrl = 'https://web.whatsapp.com/send?phone=123456789&text=';
            var textEncode = encodeURIComponent($('#float-cta .whatsapp-msg-body textarea').val());
            window.open(baseUrl + textEncode, '_blank');
        });
    }
}
initWhatsappChat();

