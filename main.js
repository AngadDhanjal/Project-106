//https://teachablemachine.withgoogle.com/models/Nl0878igW/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Nl0878igW/model.json',modelReady)
}

function modelReady()
{
    classifier.classfify(gotResults);
}