var display = $("#display");
//var buttons=Array.from($(".button"));
// for(var i=0;i<buttons.length;i++){
// console.log(buttons[i]);
// $(".button").on("click",function(){
//     console.log("clicked");
//     console.log($(this).html());
// });
// }


var string = "";
$(".button").on("click", (e) => {
    switch (e.target.innerText) {
        case "C":
            string = "";
            display.text(string);
            break;
        case "=":
            try {
                string = eval(string);
                display.text(string);
            } catch (error) {
                string = "";
                display.text("Error!");
            }
            break;
        case "←":
            if (string) {
                string = string.slice(0, -1);
                display.text(string);
            }
            break;
        default:
            string += e.target.innerText;
            display.text(string);
    }
});