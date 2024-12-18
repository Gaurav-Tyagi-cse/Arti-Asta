function isPujaSelected(frm) {
	var pujas = $(':checkbox[name="recommend_for[]"]', $(frm)).serialize();
	if (pujas == '') {
		alert('Please select at least one area for puja.');
		return false;
	}
	return true;
}

$(document).ready(function(){
	var frm = document.frmReportData;
	$(frm.native_place).autocomplete({
		source: function(request, response) {
			$.getJSON(tscom.makeUrl('Login', 'suggestCity', [request.term], false, false),
				function(data) {
					response(data);
			});
		},
		autoFocus: true,
		change: function (event, ui) {
			$(this).val((ui.item ? ui.item.label : ""));
			if ($(this).val() == '') {
				alert('Please type the city name and select an option from suggestions.');
			}
		},
		select: function(event, ui) {
			tscom.ajax(tscom.makeUrl('FreeAstrology', 'cityData', [ui.item.city_id]), '', function(t) {
				$(frm.native_longitude).val(t.data.longitude);
				$(frm.native_longitude_dir).val(t.data.longitude_dir);

				$(frm.native_latitude).val(t.data.latitude);
				$(frm.native_latitude_dir).val(t.data.latitude_dir);

				$(frm.native_timezone).val(t.data.timezone);
				$(frm.native_country).val(t.data.country);
			}, {tsOutMode: 'json'});
		}
	});
	
	if ($(frm.native_place_second).length) {
		$(frm.native_place_second).autocomplete({
			source: function(request, response) {
				$.getJSON(tscom.makeUrl('Login', 'suggestCity', [request.term], false, false),
					function(data) {
						response(data);
				});
			},
			autoFocus: true,
			change: function (event, ui) {
				$(this).val((ui.item ? ui.item.label: ""));
				if ($(this).val() == '') {
					alert('Please type the city name and select an option from suggestions.');
				}
			},
			select: function(event, ui) {
				tscom.ajax(tscom.makeUrl('FreeAstrology', 'cityData', [ui.item.city_id]), '', function(t) {
					$(frm.native_longitude_second).val(t.data.longitude);
					$(frm.native_longitude_second_dir).val(t.data.longitude_dir);

					$(frm.native_latitude_second).val(t.data.latitude);
					$(frm.native_latitude_second_dir).val(t.data.latitude_dir);

					$(frm.native_timezone_second).val(t.data.timezone);
				}, {tsOutMode: 'json'});
			}
		});
	}

	
	
});


