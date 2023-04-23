let vid=document.getElementById('camera');
if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video:true})
    .then(function(s){
        vid.srcObject=s;
    })
    .catch(function(error){
        console.log(error);
    })
}
else{
    console.log("error");
}