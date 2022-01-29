function age() {  
    var select = document.getElementById('day');
    var d1= select.options[select.selectedIndex].text;
    console.log(d1);
    var select1 = document.getElementById('month');
    var m1= select1.options[select1.selectedIndex].value;
    console.log(m1);
    var select2 = document.getElementById('year');
    var y1= select2.options[select2.selectedIndex].text;
    console.log(y1);
    // console.log(m1);
    // console.log(y1);
    var date = new Date();  
    var d2 = date.getDate();  
    var m2 = 1 + date.getMonth();  
    var y2 = date.getFullYear();
    console.log(d2);
    console.log(m2);
    console.log(y2);  
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  
    if(d1 > d2){  
     d2 = d2 + month[m2 - 1];  
     m2 = m2 - 1;  
    }  
    if(m1 > m2){  
     m2 = m2 + 12;  
     y2 = y2 - 1;  
    }  
    var d = d2 - d1;  
    var m = m2 - m1;  
    var y = y2 - y1;
    console.log(y);
    if(y>=13){
        document.getElementById('age').innerHTML = 'You are Elegible'; 
        document.getElementById('age').style.color="green";
    }
    else{
        document.getElementById('age').innerHTML='You are not eligible....You are less than 13';
        document.getElementById('age').style.color="red";
    }  
   }  