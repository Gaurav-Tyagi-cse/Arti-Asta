function discountCouponForm() {
	$.facebox(function() {
		tscom.ajax(tscom.makeUrl('Cart', 'discountCouponForm'), '', function(t) {
			var h = '<div class="dlg-hdng">Apply Discount Coupon</div><div class="dlg-cntnt">' + t + '</div>';
			$.facebox(h, 'w900');

			var frm = $('#facebox form')[0];
			$('input[type="reset"]', $(frm)).click(function() { $(document).trigger('close.facebox') });
			var validator = $(frm).validation({errordisplay: 3});
			$(frm).submit(function(e) {
				e.preventDefault();

				validator.validate();
				if (!validator.isValid()) return;

				var data = tscom.frmData(frm);
				tscom.updateWithAjax(tscom.makeUrl('Cart', 'applyDiscountCoupon'), data, function(t) {
					$(document).trigger('close.facebox');
					location.reload();
				});
			});
		});
	});
};

function applyDiscountCoupon() {
	var frm = $('form')[0];
	console.log(frm);
	
	var validator = $(frm).validation({errordisplay: 3});

	validator.validate();
	if (!validator.isValid()) return;

	var data = tscom.frmData(frm);
	console.log(data);
	tscom.updateWithAjax(tscom.makeUrl('Cart', 'applyDiscountCoupon'), data, function(t) {
		location.reload();
	});

};

function removeDiscountCoupon() {
	tscom.updateWithAjax(tscom.makeUrl('Cart', 'removeDiscountCoupon'), '', function(t) {
		$(document).trigger('close.facebox');
		location.reload();
	});
}

function removeCartItem(index) {
	window.location = tscom.makeUrl('Cart', 'removeItem', [index]);
}

function customConfirm(msgstr, stringFunction, param) {
	var h = '<div class="dlg-hdng">Confirmation</div><div class="dlg-cntnt"><p>' + msgstr + 
	'</p><br><a onclick="$(document).trigger(\'close.facebox\'); window[\'' + stringFunction + '\'](' + param + ');" href="javascript:void(0)" class="btn btn-primary">OK</a> <a href="javascript:void(0)" onclick="$(document).trigger(\'close.facebox\');" class="btn btn btn-danger">Cancel</a></div>';
	$.facebox(h, 'w700');
}

$(document).ready(function () {
	if(moveToLogin){
		$('#btn_proceed').trigger('click');
	}
});

