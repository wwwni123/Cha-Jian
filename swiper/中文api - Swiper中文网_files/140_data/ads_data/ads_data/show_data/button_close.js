	function addCloseButton(button_path){
		var width = document.getElementById('ag_ad').style.width;
		var height = document.getElementById('ag_ad').style.height;
		var close_button = '<div id="cb-x" class="cb-x">';
		
		close_button = close_button + '<a style="cursor: pointer;z-index: 2000"  id="cb-x-a" title="关闭广告">';
		close_button = close_button + '<img src="' + button_path + 'button_close.svg" style="position: relative; cursor: pointer"></a></div>';
		close_button = close_button + '<div id="floatdiv" style="width:' + width + '; height:' + height +';">';
		close_button = close_button + '<div><span id="spclose" class="spclose">已关闭广告展示<a id="btrevert" class="a-revert">撤销</a></span>';
		close_button = close_button + '<span id="spclosefinal" class="spclose">感谢您的反馈<a id="btrevertfinal" class="a-revert">撤销</a></span>';
		close_button = close_button + '<span id="spanq">此推广内容有什么问题</span>';
		close_button = close_button + '<span id="spanreason"><ul id="ulreason"><li><input type="radio" value="11" name="reason" id="rd1"><span>不感兴趣</span></li>';
		close_button = close_button + '<li><input type="radio" value="12" name="reason" id="rd2"><span>视觉干扰</span></li>';
		close_button = close_button + '<li><input type="radio" value="13" name="reason" id="rd3"><span>重复展示</span></li>';
		close_button = close_button + '<li><input type="radio" value="14" name="reason" id="rd4"><span>其他</span></li></ul></span></div></div>';
		document.getElementById("ag_ad").insertAdjacentHTML("beforeEnd",close_button);
		
		document.getElementById('cb-x-a').onclick= function () {
			document.getElementById('floatdiv').style.display='block';
			document.getElementById('spclose').style.display='';
			document.getElementById('spclosefinal').style.display='none';
			document.getElementById('spanq').style.display='';
			document.getElementById('ulreason').style.display='block';
			showEvent(10);
		}

		document.getElementById('btrevert').onclick= function () {
			document.getElementById('floatdiv').style.display='none';
			showEvent(20);
		}
		document.getElementById('btrevertfinal').onclick= function () {
			document.getElementById('floatdiv').style.display='none';
			showEvent(20);
		}

		document.getElementById('rd1').onclick= function () {
			submitReason(this.value);
		}
		document.getElementById('rd2').onclick= function () {
			submitReason(this.value);
		}
		document.getElementById('rd3').onclick= function () {
			submitReason(this.value);
		}
		document.getElementById('rd4').onclick= function () {
			submitReason(this.value);
		}
	}

	function setwh(width,height){
		//set width
		document.body.style.width=width;
		document.body.style.height=height;
		document.getElementById('floatdiv').style.width=width;
		document.getElementById('ag_ad').style.width=width;
		document.getElementById('adimg').style.width=width;
		document.getElementById('floatdiv').style.height=height;
		document.getElementById('ag_ad').style.height=height;
		document.getElementById('adimg').style.height=height;
		//document.getElementById('cb-x-a').click();
		//end
	}

	function submitReason(v){
		document.getElementById('spclose').style.display='none';
		document.getElementById('spclosefinal').style.display='inline';
		document.getElementById('spanq').style.display='none';
		document.getElementById('ulreason').style.display='none';
		showEvent(v);
	}
