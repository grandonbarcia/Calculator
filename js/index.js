$( document ).ready(function() {
    
    var op = "";
    var flag = 0;
  
    $("#btn1").click(function(){
      
      
      op += "1";
      textArea.value = op;
        
    });
    
    $("#btn2").click(function(){
      
      op += "2";
      textArea.value = op;
    });
  
    $("#btn3").click(function(){
      
      op += "3";
      textArea.value = op;
    });
  
    $("#btn4").click(function(){
      
      op += "4";
      textArea.value = op;
    });
  
    $("#btn5").click(function(){
      
      op += "5";
      textArea.value = op;
    });
    
    $("#btn6").click(function(){
      
      op += "6";
      textArea.value = op;
    });
  
    $("#btn7").click(function(){
      
      op += "7";
      textArea.value = op;
    });
  
    $("#btn8").click(function(){
      
      op += "8";
      textArea.value = op;
    });
  
  $("#btn9").click(function(){
      
     op += "9";
     textArea.value = op;
    });
  
  $("#btn0").click(function(){
      
     op += "0";
     textArea.value = op;
    });
  
    $("#plus").click(function(){
      
      if (!isNaN(textArea.value[textArea.value.length-1]))
        {
          
          op += "+";
          textArea.value = op;
        }
      else 
        {
          
        }
    });
  
    $("#minus").click(function(){
      
      
          op += "-";
          textArea.value = op;
        
      
      
    });
  
    $("#divide").click(function(){
      
      if (!isNaN(textArea.value[textArea.value.length-1]))
        {
          
          op += "/";
          textArea.value = op;
        }
      else 
        {
          
        }
    });
  
    $("#multiply").click(function(){
      
      if (!isNaN(textArea.value[textArea.value.length-1]))
        {
          
          op += "*";
          textArea.value = op;
        }
      else 
        {
          
        }
    });
  
    $("#enter").click(function(){
      
      textArea.value = eval(op);
      op = eval(op);
    });
  
    $("#clearEverything").click(function(){
      
      textArea.value = "";
      op = "";
    });
  
    $("#modulus").click(function(){
      
      
      op += "%";
      texArea.value = op;
    });
  
    
  
    
  
});