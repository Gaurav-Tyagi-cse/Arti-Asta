function submitLotteryForms(frm, v) {
    v.validate();
    if(!v.isValid()) {
        return false;
    }


	if ('1' == requireLogin) {
		loginWithPopup('showResults', [frm, v], 'dream11');
		return false;
	} 
	document.frmLottery.submit();
	
}

function showResults(params) {
	document.frmLottery.submit();
}
