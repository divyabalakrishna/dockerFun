function getParaNumber(){
    document.getElementById("genText").style.display="block";
    var no = parseInt(document.getElementById("number").value);
    if(document.getElementById("paragraphs").checked)
        genPara(no);
    else if(document.getElementById("words").checked)
        genWords(no);
    else genLetters(no);
}

function genPara(n){
    var client = new XMLHttpRequest();
    client.open('GET', 'test.txt');
    client.onreadystatechange = function() {
        var n = parseInt(document.getElementById("number").value);
        var str = client.responseText;
        str = str.split("#");
        var output = "";
        var count = 0;
        for(var i=0; i<n; i++){
         if (i == str.length-1)
           i = 0;
         if (count < n){
           if(str[i])
           {
              str[i] = str[i].replace(/(\r\n|\n|\r)/gm,"");
              output += str[i] + "\n" + "\n";
              count++;
           }
         }
         else break;
       }

        document.getElementById("genText").value = output;
    }
    client.send();
}

function genWords(n){
    var client = new XMLHttpRequest();
    client.open('GET', 'test.txt');
    client.onreadystatechange = function() {
        var n = parseInt(document.getElementById("number").value);
        var str = client.responseText;
        str = str.replace(/#/g," ");
        str = str.replace(/(\r\n|\n|\r)/gm," ");
        str = str.split(" ");
        var output = "";
        var count = 0;
        for(var i=0; i<n; i++){
         if (i == str.length-1)
           i = 0;
         if (count < n){
           output += str[i] + " ";
           count++;
         }
         else break;
       }

        document.getElementById("genText").value = output;
    }
    client.send();
}

function genLetters(n){
    var client = new XMLHttpRequest();
    client.open('GET', 'test.txt');
    client.onreadystatechange = function() {
        var n = parseInt(document.getElementById("number").value);
        var str = client.responseText;
        str = str.replace(/#/g," ");
        str = str.replace(/(\r\n|\n|\r)/gm," ");
        str = str.split("");
        var output = "";
        var count = 0;
        for(var i=0; count<n; i++){
         //if (i == str.length-1)
         //  i = 0;
         if (count < n){
           output += str[i];
           if(str[i] && /[a-zA-Z]/.test(str[i])){
             count++;
           }
         }
         else break;
       }

        document.getElementById("genText").value = output;
    }
    client.send();
}
