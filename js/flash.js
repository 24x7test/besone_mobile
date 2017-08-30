function MS_Flash(fid,src,wid,hei,fvs,wmd) { 
  this.fPrint = ''; 
  this.Id = document.getElementById(fid); 
  this.Src = src; 
  this.Width = wid; 
  this.Height = hei; 
  this.FlashVars = ( typeof fvs != 'undefined')? fvs :''; 
  this.Wmod = ( typeof wmd != 'undefined')? wmd :'';
  this.IEChk = (navigator.appName=="Microsoft Internet Explorer")?true:false;

  if(isObject(Id)) {
    if(IEChk == true){
        fPrint = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" '; 
        fPrint += ' id="'+Id+'"'; 
        fPrint += ' width="'+Width+'"'; 
        fPrint += ' height="'+Height+'">'; 
        fPrint += '<param name="movie" value="'+Src+'">'; 
        fPrint += '<param name="quality" value="high">'; 
        fPrint += '<param name="AllowScriptAccess" value="always" />';
        fPrint += (FlashVars != null) ? '<param name="FlashVars" value="'+FlashVars+'">' : ''; 
        fPrint += (Wmod != null) ? '<param name="wmode" value="'+Wmod+'">' : ''; 
        fPrint += '<embed'; 
        fPrint += ' name="'+Id+'"'; 
        fPrint += ' src="'+Src+'"'; 
        fPrint += (FlashVars != null) ? ' FlashVars="'+FlashVars+'"' : ''; 
        fPrint += (Wmod != null) ? ' wmode="'+Wmod+'"' : ''; 
        fPrint += ' quality="high"'; 
        fPrint += ' pluginspage="http://www.macromedia.com/go/getflashplayer"'; 
        fPrint += ' type="application/x-shockwave-flash"'; 
        fPrint += ' width="'+Width+'"'; 
        fPrint += ' height="'+Height+'"'; 
        fPrint += ' AllowScriptAccess="always"></embed>'; 
        fPrint += '    <div>';
        fPrint += '      <h4>�� �������� ������ ������ �ֽ� ������ Adobe Flash Player�� �ʿ��մϴ�.</h4>';
        fPrint += '      <p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Adobe Flash Player �����ޱ�" width="112" height="33" /></a></p>';
        fPrint += '       </div>';
        fPrint += '</object>'; 
    }else{
        fPrint += '<object type="application/x-shockwave-flash" data="'+Src+'" id="'+Id+'" width="'+Width+'" height="'+Height+'">';
        fPrint += '<param name="quality" value="high">';
        fPrint += '<param name="wmode" value="'+Wmod+'">';
        fPrint += '<param name="AllowScriptAccess" value="always" />';
        fPrint += (FlashVars != null) ? '<param name="FlashVars" value="'+FlashVars+'">' : '';
        fPrint += '<div>';
        fPrint += '<h4>�� �������� ������ ������ �ֽ� ������ Adobe Flash Player�� �ʿ��մϴ�.</h4>';
        fPrint += '<p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Adobe Flash Player �����ޱ�" width="112" height="33" /></a></p>';
        fPrint += '</div>';
        fPrint += '</object>';
    }
    Id.innerHTML = fPrint; 
  } 
} 

function isObject(a) {
    return (a && typeof a == 'object');
}

function MS_Embed() 
{ 
  var obj = new String; 
  var parameter = new String; 
  var embed = new String; 
  var html = new String; 
  var allParameter = new String; 
  var clsid = new String; 
  var codebase = new String; 
  var pluginspace = new String; 
  var embedType = new String; 
  var src = new String; 
  var width = new String; 
  var height = new String;

    
  this.init = function( s ,w , h, getType ) { 
      getType = (getType != undefined)? getType :'flash'; 
      if ( getType == "flash") 
      { 

        clsid = "D27CDB6E-AE6D-11cf-96B8-444553540000";        
        codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0"; 
        pluginspage = "http://www.macromedia.com/go/getflashplayer"; 
        embedType = "application/x-shockwave-flash"; 
      } 
      /* type �߰� 
      else if ( ) 
      { 
      } 
      */ 
            
      parameter += "<param name='movie' value='"+ s + "'>\n";  
      parameter += "<param name='quality' value='high'>\n";    
      parameter += "<param name='AllowScriptAccess' value='always' />\n";    
      
      src = s; 
      width = w; 
      height = h; 
  } 
  
  this.parameter = function( parm , value ) {      
      parameter += "<param name='"+parm +"' value='"+ value + "'>\n";        
      allParameter += " "+parm + "='"+ value+"'"; 
  }  
  
  this.show = function() { 
      if ( clsid ) 
      { 
        obj = "<object classid=\"clsid:"+ clsid +"\" codebase=\""+ codebase +"\" width='"+ width +"' height='"+ height +"'>\n"; 
      } 
      
      embed = "<embed src='" + src + "' pluginspage='"+ pluginspage + "' type='"+ embedType + "' width='"+ width + "' height='"+ height +"'"+ allParameter +" AllowScriptAccess='always'></embed>\n"; 
      
      if ( obj ) 
      { 
        embed += "</object>\n"; 
      } 
      
      html = obj + parameter + embed; 
      
      document.write( html );  
  } 
  
} 

function activemovie(str, wid, hei) {
   document.write(" <object src='"+str+"' width='"+wid+"' height='"+hei+"'></object>")
}

/**
 * FLASH Create function
 * �� �˻����� TOP10���� �����
 */
function Createflash(widths, heights, movie, ids, vars) {
    var IEChk = (navigator.appName=="Microsoft Internet Explorer")?true:false;
    if(IEChk == true){
        var strflash = "<OBJECT ";
        strflash += "id='" + ids + "' codeBase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0' ";
        strflash += "width='" + widths + "' height='" + heights + "' align='middle' classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'>";
        strflash += "<PARAM NAME='Movie' VALUE='" + movie + "'>";
        strflash += "<PARAM NAME='Src' VALUE='" + movie + "'>";
        if(ids == 'blingeditor') { strflash += "<PARAM NAME='WMode' VALUE='window'>"; }
        else { strflash += "<PARAM NAME='WMode' VALUE='Transparent'>"; }
        strflash += "<PARAM NAME='Play' VALUE='-1'>";
        strflash += "<PARAM NAME='Loop' VALUE='-1'>";
        strflash += "<PARAM NAME='Quality' VALUE='High'>";
        strflash += "<PARAM NAME='SAlign' VALUE=''>";
        if(ids == 'blingeditor') { strflash += "<PARAM NAME='Menu' VALUE='false'>"; }
        else { strflash += "<PARAM NAME='Menu' VALUE='false'>"; }
        strflash += "<PARAM NAME='Base' VALUE=''>";
        strflash += "<PARAM NAME='AllowScriptAccess' VALUE='always'>";
        strflash += "<PARAM NAME='Scale' VALUE='ShowAll'>";
        strflash += "<PARAM NAME='DeviceFont' VALUE='0'>";
        strflash += "<PARAM NAME='EmbedMovie' VALUE='0'>";
        strflash += "<PARAM NAME='BGColor' VALUE=''>";
        strflash += "<PARAM NAME='SWRemote' VALUE=''>";
        strflash += "<PARAM NAME='MovieData' VALUE=''>";
        strflash += "<PARAM NAME='SeamlessTabbing' VALUE='1'>";
        strflash += "<PARAM NAME='Profile' VALUE='0'>";
        strflash += "<PARAM NAME='ProfileAddress' VALUE=''>";
        strflash += "<PARAM NAME='ProfilePort' VALUE='0'>";
        strflash += "<PARAM NAME='_cx' VALUE='25400'>";
        strflash += "<PARAM NAME='_cy' VALUE='9260'>";
        if (vars) { strflash += "<PARAM NAME='FlashVars' VALUE='"+vars+"'>"; }
        
        strflash += "<embed src='" + movie + "' quality='high' wmode='transparent' ";
        strflash += "width='" + widths + "' height='" + heights + "' name='" + ids + "' align='middle'";
        if (vars) { strflash += "FlashVars='" + vars + "' "; }
        strflash += "type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />";
        strflash += '    <div>';
        strflash += '      <h4>�� �������� ������ ������ �ֽ� ������ Adobe Flash Player�� �ʿ��մϴ�.</h4>';
        strflash += '      <p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Adobe Flash Player �����ޱ�" width="112" height="33" /></a></p>';
        strflash += '       </div>';
        strflash += "</OBJECT>";
    }else{
        var strflash = '<object type="application/x-shockwave-flash" data="'+movie+'" id="'+ids+'" width="'+widths+'" height="'+heights+'">';
        strflash += '<param name="quality" value="high">';
        strflash += '<param name="AllowScriptAccess" value="always">';

        if(ids == 'blingeditor') { strflash += "<PARAM NAME='WMode' VALUE='window'>"; }
        else { strflash += "<param NAME='WMode' VALUE='Transparent'>"; }

        strflash += (vars) ? '<param name="FlashVars" value="'+vars+'">' : '';
        strflash += '<div>';
        strflash += '<h4>�� �������� ������ ������ �ֽ� ������ Adobe Flash Player�� �ʿ��մϴ�.</h4>';
        strflash += '<p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Adobe Flash Player �����ޱ�" width="112" height="33" /></a></p>';
        strflash += '</div>';
        strflash += '</object>';
    }

    document.write(strflash);
}

var prdtt_bak;
function addsub(ono, mode) {
        if (prdtt_bak) {
                var old = document.getElementById("subdesc_"+prdtt_bak);
                old.style.display = "none";
        }

        var obj = document.getElementById("subdesc_"+ono);
        obj.style.display = (mode == 1) ? "block" : "none";
        prdtt_bak = ono;
}

var imgfilter='';
var imgborder='';

var subtitle =  function(evt, target, str, configSetting) {
    if(str==null || str=='') {
        return false;
    }
    
    var config = { 'gapLeft':5 ,'gapTop':5 , 'className':'subtitle','style':{} };
    
    if (configSetting) {
        for (x in configSetting) {
            if(config[x] != undefined) {
                config[x] = configSetting[x];
            }
        }
    }
    //== ������ ����
    this.target = target
    this.str = str
    this.gapLeft = config['gapLeft'];
    this.gapTop = config['gapTop'];
    divsubtitle = document.createElement('div');
    divsubtitle.className = config['className'];
    divsubtitle.innerHTML = this.str;
    //divsubtitle.appendChild(document.createTextNode(this.str));
    this.target.divsubtitle = divsubtitle;
    //== ��Ÿ�� ����
    if (config['style'] != null) {
        for (x in config['style']) {
            divsubtitle.style[x] = config['style'][x];
        }
    }
    divsubtitle.style.display = 'none';
    divsubtitle.style.left = 0;
    divsubtitle.style.right = 0;
    divsubtitle.style.position = 'absolute';

    if (divsubtitle.className == 'subtitle') {
        divsubtitleImg = document.getElementById('subtitle_info').cloneNode(true);
        divsubtitleImg.style.display = 'none';
        divsubtitleImg.style.left = 0;
        divsubtitleImg.style.right = 0;
        divsubtitleImg.style.position = 'absolute';
        document.body.appendChild(divsubtitleImg);
        this.target.divsubtitleImg = divsubtitleImg;
    }

    document.body.appendChild(divsubtitle);
    var _self = this;
    
    this.target.onmouseover = function(evt){
        _self.show(evt, _self.target);
    };
    this.target.onmousemove = function(evt){
        _self.show(evt, _self.target);
    };
    this.target.onmouseout = function(evt){
        _self.hide(evt, _self.target);
    };
    
    if (evt && evt.type == 'mouseover') {
        _self.show(evt, _self.target);
    }
};

subtitle.prototype.show = function(evt, target) {
    if(window.event) { evt = window.event; }
    if(target.divsubtitle) {
        var scrollLeft = Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
        var scrollTop = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
        var scrollWdith = Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);
        var scrollHeight = Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);

        target.divsubtitle.style.display = 'block';
        var divRight = evt.clientX + target.divsubtitle.offsetWidth;
        var divBottom = target.divsubtitle.offsetTop+target.divsubtitle.offsetHeight;
        var x = evt.clientX+this.gapLeft+(scrollLeft-80);
        if (divsubtitle.className == 'subtitle') {
            var y = evt.clientY+this.gapTop+scrollTop-143;
        }else {
            var y = evt.clientY+this.gapTop+scrollTop;
        }

        if(divRight + scrollLeft + this.gapLeft + 20 >= scrollWdith) {
            x = (scrollWdith - target.divsubtitle.offsetWidth - 100 );
        }

        target.divsubtitle.style.left = x+'px';
        target.divsubtitle.style.top = y+'px';

        if (divsubtitle.className == 'subtitle') {
            target.divsubtitleImg.style.left = x+'px';
            target.divsubtitleImg.style.top = y+'px';
            target.divsubtitleImg.style.display = 'block';
            if(imgfilter!='') target.style.filter=imgfilter;
            if(imgborder!='') target.style.borderColor=imgborder;
        }
    }
};

subtitle.prototype.hide = function(evt,target) {
    if(target.divsubtitle) {
        target.divsubtitle.style.display = 'none';
        if (divsubtitle.className == 'subtitle') {
            target.divsubtitleImg.style.display = 'none';
            imgfilter = target.style.filter;
            imgborder = target.style.borderColor;
            target.style.filter='';
            target.style.borderColor='transparent';
        }
    }
};

var decode_6484bd9924_ac = '109;97;107;101;115;104;111;112;46;99;111;46;107;114';
var decode_6484bd9924_split = decode_6484bd9924_ac.split(';');
var decode_6484bd9924_data = '';
for (i=0;i<decode_6484bd9924_split.length;i++) {
     decode_6484bd9924_data += String.fromCharCode(decode_6484bd9924_split[i]);
}
var decode_c00a40f376_ac = '104;116;116;112;115;58;47;47;115;115;108;46;109;97;107;101;115;104;111;112;46;99;111;46;107;114;47;115;115;108;47;109;115;101;99;117;114;101;95;115;115;108;46;104;116;109;108';

var decode_c00a40f376_split = decode_c00a40f376_ac.split(';');
var decode_c00a40f376_data = '';
for (i=0;i<decode_c00a40f376_split.length;i++) {
     decode_c00a40f376_data += String.fromCharCode(decode_c00a40f376_split[i]);
}

var decode_328746c29d_ac = '104;116;116;112;115;58;47;47;104;116;116;112;115;46;109;97;107;101;115;104;111;112;46;99;111;46;107;114;47;115;115;108;47;115;101;114;118;101;114;47;102;115;101;99;117;114;101;46;106;115';
var decode_328746c29d_split = decode_328746c29d_ac.split(';');
var decode_328746c29d_data = '';
for (i=0;i<decode_328746c29d_split.length;i++) {
     decode_328746c29d_data += String.fromCharCode(decode_328746c29d_split[i]);
}

function getCookieMS(name) {
    lims = document.cookie;
    var index = lims.indexOf(name + "=");
    if (index == -1) return null;
    index = lims.indexOf("=", index) + 1; // first character
    var endstr = lims.indexOf(";", index);
    if (endstr == -1) endstr = lims.length; // last character
    return unescape(lims.substring(index, endstr));
}

function flash_imgsize_in(){
     document.getElementById('flashdetail').className = 'flashnavion';
}
function flash_imgsize_out(){
     document.getElementById('flashdetail').className = 'flashnavi';
}


