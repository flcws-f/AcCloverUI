//bgColor弹窗背景颜色、title标题、titleColor标题颜色、lineColor标题内容分隔线颜色、content内容、contentColor内容颜色、cbv是否显示关闭按钮（如果不设置的话，可以点击弹窗外的区域关闭）。
var acc={
dlg:function(bgColor,title,titleColor,lineColor,content,contentColor,cbv){
$("body").before("<div id='sm' style='width:100%;height:100%;background-color:rgba(189,189,189,0.9);position:fixed;' onclick=$('#dialog').remove();$('#sm').remove();></div><dialog id='dialog' open='open' style='background-color:"+bgColor+";width:100%;margin-top:50%;text-align:center;position:fixed;'><p style='color: "+titleColor+";'>"+title+"</p><hr style='border-color:"+lineColor+";'/><p style='color:"+contentColor+";'>"+content+"</p></dialog>");
if(cbv==true){
$("#sm").append("<button style='position:fixed;right:0px;' onclick=$('#sm').remove();$('#dialog').remove();>&#9932</button>");
$("#sm").removeAttr("onclick");
}
},
allBefore:function(element,addContent){
var a=$(element).html();
var b=addContent+a;
$(element).html(b);
},
color16:function(){//十六进制颜色随机
			var r = Math.floor(Math.random()*256);
			var g = Math.floor(Math.random()*256);
			var b = Math.floor(Math.random()*256);
			var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
			return color;
		},
randomtc:function(element){
$(element).css('color',acc.color16());
},
drag:function(element,clickAction){
$(element).click(clickAction);
var flag = 0; //标记是拖曳还是点击
        var oDiv = document.querySelector(element);
        var disX, moveX, L, T, starX, starY, starXEnd, starYEnd;
        oDiv.addEventListener('touchstart', function (e) {
            
            flag = 0;
            e.preventDefault();//阻止触摸时页面的滚动，缩放
            disX = e.touches[0].clientX - this.offsetLeft;
            disY = e.touches[0].clientY - this.offsetTop;
            
           

            //手指按下时的坐标
            starX = e.touches[0].clientX;
            starY = e.touches[0].clientY;
           
        });
        oDiv.addEventListener('touchmove', function (e) {
            flag = 1;
            L = e.touches[0].clientX - disX;
            T = e.touches[0].clientY - disY;
            //移动时 当前位置与起始位置之间的差值
            starXEnd = e.touches[0].clientX - starX;
            starYEnd = e.touches[0].clientY - starY;
         
            if (L < 0) {//限制拖拽的X范围，不能拖出屏幕
                L = 0;
            } else if (L > document.documentElement.clientWidth - this.offsetWidth) {
                L = document.documentElement.clientWidth - this.offsetWidth;
            }
            if (T < 0) {//限制拖拽的Y范围，不能拖出屏幕
                T = 0;
            } else if (T > document.documentElement.clientHeight - this.offsetHeight) {
                T = document.documentElement.clientHeight - this.offsetHeight;
            }
            moveX = L + 'px';
            moveY = T + 'px';
            this.style.left = moveX;
            this.style.top = moveY;
        });
window.addEventListener('touchend',function(e){
if (flag===0){
setTimeout(0,clickAction);
}
});
},
addProgress:function(element,addValue){
$(element).attr("value",parseInt($(element).attr("value"))+parseInt(addValue));
}
}
var safe={
unie:function(string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  const charCodes = new Uint8Array(codeUnits.buffer);
  let result = '';
  for (let i = 0; i < charCodes.byteLength; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
},
b64e:function(text){
const converted = safe.unie(text);
const encoded = btoa(converted);
return encoded;
}
}