window.onload = function(){
	// それぞれのボタンを取得
	var targetBtn1 = document.getElementById("btnTrack");
	var targetBtn2 = document.getElementById("btnBig");
	var targetBtn3 = document.getElementById("btnMiddle");
	var targetBtn4 = document.getElementById("btnSmall");
	var targetBtn5 = document.getElementById("btnBike");

	var targetBtn6 = document.getElementById("btnTrack_N");
	var targetBtn7 = document.getElementById("btnBig_N");
	var targetBtn8 = document.getElementById("btnMiddle_N");
	var targetBtn9 = document.getElementById("btnSmall_N");
	var targetBtn10= document.getElementById("btnBike_N");

	var resetBtn  = document.getElementById("reset")
	var textA  = document.getElementById("memo")


  	document.getElementById("btnTrack").onkeypress = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 13) { // Enterキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnTrack").onkeyup = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 32) { //32はSpaceキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnBig").onkeypress = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 13) { // Enterキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnBig").onkeyup = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 32) { //32はSpaceキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnSmall").onkeypress = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 13) { // Enterキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnSmall").onkeyup = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 32) { //32はSpaceキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnBike").onkeypress = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 13) { // Enterキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnBike").onkeyup = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 32) { //32はSpaceキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}

  	document.getElementById("btnTrack_N").onkeypress = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 13) { // Enterキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnTrack_N").onkeyup = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 32) { //32はSpaceキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnBig_N").onkeypress = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 13) { // Enterキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnBig_N").onkeyup = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 32) { //32はSpaceキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnSmall_N").onkeypress = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 13) { // Enterキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnSmall_N").onkeyup = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 32) { //32はSpaceキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnBike_N").onkeypress = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 13) { // Enterキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}
  	document.getElementById("btnBike_N").onkeyup = (e) => {
    	const key = e.keyCode || e.charCode || 0;
    	if (key == 32) { //32はSpaceキーのキーコード
      		e.preventDefault(); // アクションを行わない
    	}
  	}


	// targetBtnの値を取得
	var num1  = targetBtn1.value;
	var name1 = targetBtn1.name;
	var num2  = targetBtn2.value;
	var name2 = targetBtn2.name;
//	var num3  = targetBtn3.value;
//	var name3 = targetBtn3.name;
	var num4  = targetBtn4.value;
	var name4 = targetBtn4.name;
	var num5  = targetBtn5.value;
	var name5 = targetBtn5.name;
	var num6  = targetBtn6.value;
	var name6 = targetBtn6.name;
	var num7  = targetBtn7.value;
	var name7 = targetBtn7.name;
//	var num8  = targetBtn8.value;
//	var name8 = targetBtn8.name;
	var num9  = targetBtn9.value;
	var name9 = targetBtn9.name;
	var num10  = targetBtn10.value;
	var name10 = targetBtn10.name;


	// targetBtnをクリックしたとき
	targetBtn1.onclick = function(){
		num1++;
		targetBtn1.value = name1 + num1;
	}
	// targetBtnをクリックしたとき
	targetBtn2.onclick = function(){
		num2++;
		targetBtn2.value = num2;
	}
	// targetBtnをクリックしたとき
//	targetBtn3.onclick = function(){
//		num3++;
//		targetBtn3.value = num3;
//	}
	// targetBtn4をクリックしたとき
	targetBtn4.onclick = function(){
		num4++;
		targetBtn4.value = num4;
	}
	// targetBtn5をクリックしたとき
	targetBtn5.onclick = function(){
		num5++;
		targetBtn5.value = num5;
	}

	// target6Btnをクリックしたとき
	targetBtn6.onclick = function(){
		num1--;
		if(num1<=0) num1=0;
		targetBtn1.value = num1;
	}
	// target7Btnをクリックしたとき
	targetBtn7.onclick = function(){
		num2--;
		if(num2<=0) num2=0;
		targetBtn2.value = num2;
	}

	// target8Btnをクリックしたとき
//	targetBtn8.onclick = function(){
//		num3--;
//		if(num3<=0) num3=0;
//		targetBtn3.value = num3;
//	}
	// target9Btnをクリックしたとき

	targetBtn9.onclick = function(){
		num4--;
		if(num4<=0) num4=0;
		targetBtn4.value = num4;
	}

	// target10Btnをクリックしたとき
	targetBtn10.onclick = function(){
		num5--;
		if(num5<=0) num5=0;
		targetBtn5.value = num5;
	}
	
	// resetBtnをクリックしたとき
	resetBtn.onclick = function(){
		textA.value = textA.value + "\n" + "輸送車:" + num1 + ",大型:" + num2 + ",小型:" + num4 + ",バイク:" + num5 +"\x0a";

		num1 = 0;
		targetBtn1.value = name1 + num1;
		num2 = 0;
		targetBtn2.value = name2 + num2;
//		num3 = 0;
//		targetBtn3.value = name3 + num3;
		num4 = 0;
		targetBtn4.value = name4 + num4;
		num5 = 0;
		targetBtn5.value = name5 + num5;


	}
	
	// 初期設定
	targetBtn1.value = name1 + num1; //輸送車
	targetBtn2.value = name2 + num2; //大型
//	targetBtn3.value = name3 + num3; //中型
	targetBtn4.value = name4 + num4; //小型
	targetBtn5.value = name5 + num5; //バイク


}
