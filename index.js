var logoNum = true;
function prepareButton(){
    if(logoNum){
        document.getElementById("logo1").style.display = "none";
        document.getElementById("logo2").style.display = "block";
        logoNum=false;
    }else{
        document.getElementById("logo1").style.display = "block";
        document.getElementById("logo2").style.display = "none";
        logoNum=true;
    }
}