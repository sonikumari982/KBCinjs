let que_list=["Who Invented computer","Who invented Internet","When was python developed","what is the fullform of www."]
let opt_list=[["Vint cerf","Mark Jukerberg","Charls babbage","Robert Vintage"],["Vint cerf","vinton cerf", "Guido","John babbage"],["21 feb","20 feb","20 march","19 jan"],["world web wide","world wide web","world web webside","world wide webside"]]
let ans_list=[3,1,2,2]
    var insilization=0
    var amount=0
    while (insilization<(que_list)){
        console.log(que_list[insilization])
        var option=opt_list[insilization]
        secinsilization=0
        while (secinsilization<len(option)){
            console.log(option[secinsilization])
            secinsilization++}
        var ip=require("readline-sync")
        var enter=Number(ip.question("enter the option......"))
        if (ans_list[insilization]==enter){
            amount=500*(insilization+1)
            console.log("right answere you win",amount)}
        else{
            console.log("rong ansser\ngame over","your total amount",amount)
            break}

        insilization++}