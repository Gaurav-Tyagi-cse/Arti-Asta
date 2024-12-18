$(document).ready(function(){
	var frm = document.frmRegister;
	$(frm.city).autocomplete({
		source: function(request, response) {
			$.getJSON(tscom.makeUrl('Login', 'suggestCity', [request.term], false, false),
				function(data) {
					response(data);
			});
		},
		autoFocus: true,
		select: function(event, ui) {
			$(frm.user_city).val(ui.item.city_id);
		},
		change: function (event, ui) {
            if (!ui.item) {
                 $(this).val('');
             }
        }
	});
	
//	var registrationValidator = $(frm).validation({errordisplay: 3});
//	$(frm).submit(function(e) {
//		e.preventDefault();
//
//		registrationValidator.validate();
//		if (!registrationValidator.isValid()) return;
//		
//		var data = tscom.frmData(frm);
//		tscom.updateWithAjax(tscom.makeUrl('Login', 'register'), data, function(t) {
//			
//		});
//	});
});
