function submitLotteryForms(frm, v) {
  v.validate();
  if(!v.isValid()) {
      return false;
  }


if ('1' == requireLogin) {
		loginWithPopup('showResults', [frm, v], 'lottery-lucky-numbers');
    return false;
	} 

  document.frmLottery.submit();

}

function showResults(params) {
  document.frmLottery.submit();
}

function getLotteryNumber(frm, v) {
    v.validate();
    if(!v.isValid()) {
        return ;
    }

    tscom.updateWithAjax(tscom.makeUrl('LotteryLuckyNumbers', 'getLotteryNumber'), tscom.frmData(frm), function(t) {
        if (t.status == 0) {
            alert(t.msg);
            return ;
          }

          var txtNumbers = '';
        for (const i in t.numbers) {
          if (i == 1) {
            txtNumbers += t.numbers[i]; 
          } else {
            txtNumbers += ' ' +t.numbers[i]; 
          }
          
        }
        var h = '<div class="dlg-hdng text-center"><h5>Your Lucky Number</h5></div><div class="dlg-cntnt text-center pb-3"><p>' + txtNumbers + '</p>' + 
        '</div>';
		$.facebox(h);
        
    });
}
