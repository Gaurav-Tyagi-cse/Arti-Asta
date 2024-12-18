function showPujaPricing(pujaId, pujaName) {
	$('#buy-modal .modal-body').htmls('Loading..');
    $('#buy-modal .modal-title').text(pujaName);
	$('#buy-modal').modal('show');
	tscom.ajax(tscom.makeUrl('PujaHomam', 'pricingContent', [pujaId]), '', function(t) {
		$('#buy-modal .modal-body').htmls(t);
	});
}

