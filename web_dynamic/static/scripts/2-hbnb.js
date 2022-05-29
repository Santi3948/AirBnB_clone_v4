$(function() {

    $.ajax({
        type: 'GET',
        url: 'http://0.0.0.0:5001/api/v1/status/',
        success: function(status) {
            if (status.status == 'OK') {
                $('div#api_status').addClass('available')
                $('div#api_status').css({'background-color':'#ff545f'})
            } else {
                $('div#api_status').removeClass('available')
            }
        }
    })
});