function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bkaDrKcBl/model.json", modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        var random_number_r = Math.floor(Math.random()* 175) +1;
        var random_number_g = Math.floor(Math.random()* 175) +1;
        var random_number_b = Math.floor(Math.random()* 175) +1;
        document.getElementById("result_label").innerHTML = "Posso ouvir: " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Precisão:" + (results[0].confidence*100)
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+" , " +random_number_g+" , "+random_number_b+")"

         img = document.getElementById('alien1');
         img1 = document.getElementById('alien2');
         img2 = document.getElementById('alien3');
         img3 = document.getElementById('alien4');

        if(results[0].label == "Palmas"){
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }
         else if(results[0].label == "Sino"){
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
         }
         else if(results[0].label == "Estalos"){
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
         }
         else {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
         }
    }
}