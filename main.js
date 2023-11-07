status1 =" ";
object= [ ];
function setup(){
    canvas = createcanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(400,400);
}
function draw(){
image(video,0,0,400,400);
if(status1!=" "){
    coco.detect(video,gotresult);
    for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML = "object detected";
        fill("red");
        percentage =floor(object[i].confidence*100)+"%";
        text(object[i].label+" "+percentage,object[i].x,object[i].y);
        noFill();
        stroke("red");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
        if(object[i].label==object_name){
            video.stop();
            coco.detect(gotresult);
            document.getElementById("status").innerHTML=object_name+" FOUND ";
            synth = window.speechSynthesis;
            utterthis =  new SpeechSynthesisUtterance(object_name+"found");
            synth.speak(utterthis);
        }
    }
}
function gotresult(result,error){
    if(error){
        console.log(error);

    }
    else{
        console.log(result);
        object=result;
    }
}
}
function start(){
    coco = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status : object detecting";
    object_name = document.getElementById(name-of-objects).value;
}
function modelloaded(){
    console.log("loaded");
    status1  = true;
}