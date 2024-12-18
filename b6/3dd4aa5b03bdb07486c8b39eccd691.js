function showMantraPricing(mantraId) {
	$('#buy-modal .modal-body').htmls('Loading..');
	$('#buy-modal').modal('show');
	tscom.ajax(tscom.makeUrl('Mantra', 'pricingContent', [mantraId]), '', function(t) {
		$('#buy-modal .modal-body').htmls(t);
	});
}


