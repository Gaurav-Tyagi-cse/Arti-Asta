function submitEmailHoroscopeRequest(frm, v) {
    v.validate();
    if(!v.isValid()) {
        return ;
    }

    tscom.updateWithAjax(tscom.makeUrl('FreeAstrology', 'submitEmailHoroscopeRequest'), tscom.frmData(frm), function(t) {
        var h = '<div class="dlg-hdng text-center"><h5>Free Horoscope on Email Request</h5></div><div class="dlg-cntnt text-center pb-3"><p>' + t.msg + '</p>' + 
        '<a onclick="$(document).trigger(\'close.facebox\');" href="javascript:void(0)" class="btn btn-primary solution-btn">OK</a></div>';
		$.facebox(h, 'w900');
    });
}
