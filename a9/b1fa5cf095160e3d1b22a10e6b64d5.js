$(document).ready(function () {

    $(':input[name="dob_na"]').on('change', function(){
        if($(this).is(":checked")){
            $('select[name="native_dob"]').val('');
            $('select[name="native_dob_mt"]').val('');
            $('select[name="native_dob_yr"]').val('');
        }
    });

    $(':input[name="tob_na"]').on('change', function(){
        if($(this).is(":checked")){
            $('select[name="native_tob"]').val('');
            $('select[name="native_tob_mn"]').val('');
            $('select[name="native_tob_ampm"]').val('0');
        }
    });


    $('.dt-picker-select').on('change', function(){
        var fldName = $(this).attr('name');
        if('native_dob' == fldName || 'native_dob_mt' == fldName || 'native_dob_yr' == fldName){
            $(':input[name="dob_na"]').prop('checked', false);
        }

        if('native_tob' == fldName || 'native_tob_mn' == fldName || 'native_tob_ampm' == fldName){
            $(':input[name="tob_na"]').prop('checked', false);
        }
    });
});

function addToCart(frm) {
	var $frm = $(frm);
	
	if (!$frm.validate()) {
		return false;
	}
	
	var data = tscom.frmData(frm);
	
	tscom.ajax(tscom.makeUrl('Yantra', 'addToCart'), data, function(t) {
		if(0 == t.status){
            var h = '<div class="dlg-cntnt"><p>' + t.msg + 
        '</p><br><a onclick="$(document).trigger(\'close.facebox\');" href="javascript:void(0)" class="btn btn-primary">OK</a> </div>';
        $.facebox(h, 'w700');   
        return false;
        }
        window.location.href = tscom.makeUrl('Cart');
	}, {tsOutMode: 'json'});
}
