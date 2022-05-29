$(function() {
    const amenitylist = {}
    $('input').change(function() {
            if (this.checked){
                amenitylist[$(this).attr('data-id')] = ($(this).attr('data-name'));
            } else {
                delete amenitylist[$(this).attr('data-id')];
            }
            const lst = Object.values(amenitylist);
            if (lst.length > 0) {
                $('div.amenities > h4').text(lst.join(', '));
            } else {
                $('div.amenities > h4').html('&nbsp;');
            }
    });
});