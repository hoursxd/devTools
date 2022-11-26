function timestamp(){
    setInterval("$('#now_timestamp').val(Math.round(new Date().getTime()/1000));",1000);
    function timestamptostr(timestampStr) {
		var  timestamp = parseInt(timestampStr);
		if(timestampStr.length<11){
			timestamp = parseInt(timestampStr) * 1000;
		}
         d = new Date(timestamp);
         var jstimestamp = (d.getFullYear())+"-"+(d.getMonth()+1)+"-"+(d.getDate())+" "+(d.getHours())+":"+(d.getMinutes())+":"+(d.getSeconds());
         return jstimestamp;
    }
    $('#unixtime').val(Math.round(new Date().getTime()/1000));

    $('#toGMT').click(function(){
        $('#result_GMT').val(timestamptostr($('#unixtime').val()));
    })
    
    var now_strTime = timestamptostr(Math.round(new Date().getTime()/1000));
    var arr = new Array();
    arr = now_strTime.split(' ');
    YMD = arr[0].split('-');
    HIS = arr[1].split(':');
    $('#year').val(YMD[0]);
    $('#month').val(YMD[1]);
    $('#day').val(YMD[2]);
    $('#hour').val(HIS[0]);
    $('#minute').val(HIS[1]);
    $('#second').val(HIS[2]);

    $('#toUNIX').click(function(){
        var utime = new Date(Date.UTC($('#year').val(), $('#month').val() - 1, $('#day').val(), $('#hour').val()-8, $('#minute').val(), $('#second').val()));
        $('#result_unix').val(utime.getTime()/1000);
    })
}

$(function(){
    timestamp();
})