function showYantraPricing(yantraId) {
	$('#buy-modal .modal-body').htmls('Loading..');
	$('#buy-modal').modal('show');
	tscom.ajax(tscom.makeUrl('Yantra', 'pricingContent', [yantraId]), '', function(t) {
		$('#buy-modal .modal-body').htmls(t);
	});
}
