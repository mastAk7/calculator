var string = "";
$(".btn").click(function (){
    if($(this).text() == '='){
        string = eval(string);
        $(".main-output input").val(string);
    } else if($(this).text() == "AC"){
        string = "";
        $(".main-output input").val(string);
    }
    else{
        string += $(this).text();
        $(".main-output input").val(string);
        var s = eval(string);
        $(".output input").val(s);
    }
    console.log(string);
});