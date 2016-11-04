function getParaNumber(){
    document.getElementById("genText").style.display="block";
    var no = parseInt(document.getElementById("number").value);
    genPara(no);
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
           str[i] = str[i].replace(/(\r\n|\n|\r)/gm,"");
           output += str[i] + "\n" + "\n";
           count++;
         }
         else break;
       }

        document.getElementById("genText").value = output;
    }
    client.send();
}

