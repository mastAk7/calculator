var string = "";
function calc(e){
    if($(e).text() == '='){
        string = eval(string);
        $(".main-output input").val(string);
    } else if($(e).text() == "AC"){
        string = "";
        $(".main-output input").val(string);
        var s = eval(string);
        $(".output input").val(s);
    } else if($(e).text() == "X"){
        string = string.slice(0,-1);
        $(".main-output input").val(string);
        var s = eval(string);
        $(".output input").val(s);
    } else if($(e).text() == "*" || $(e).text() == "-" || $(e).text() == "+" || $(e).text() == "/"){
        if (string.slice(-1) == "*" || string.slice(-1) == "-" || string.slice(-1) == "+" || string.slice(-1) == "/"){
            string= string.slice(0, -1) + $(e).text();
        } else{
            string += $(e).text();
        }
        $(".main-output input").val(string);
    } else{
        string += $(e).text();
        $(".main-output input").val(string);
        var s = eval(string);
        $(".output input").val(s);
    }
};

$(document).keydown(function (e) { 
    if(e.key== "+"){
        calc("#pl");
    }
    else if(e.key== "-"){
        calc("#su");
    }
    else if(e.key== "*"){
        calc("#mu");
    }
    else if(e.key== "/"){
        calc("#di");
    }
    else if(e.key== "."){
        calc("#dot");
    }
    else if(e.key== "Enter"){
        calc("#eq");
    }
    else if(e.key== "Backspace"){
        calc("#AC");
    }
    else if(e.key== "ArrowLeft"){
        calc("#X");
    }
    else{
        calc("#"+e.key);
    }
    console.log(e.key)
});

$(".btn").click(function (){
    calc(this);
});