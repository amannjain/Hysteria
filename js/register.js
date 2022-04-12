$(".logbut").click(function(){
    $(".logshow").slideDown();
});
$(".signbut").click(function(){
  $(".logshow").slideUp();
    $(".signshow").slideDown();
});

// JAVASCRIPT CODE FOR LOGIN SECTION
function logs1(){
    var
    check =document.getElementById("Username").value;
    var c1=/^\w+\d+@[a-z]+(\.com|\.in|\.edu\.in)/;
    if(c1.test(check)){
    document.getElementById("logsemail").style.color="Green";
    document.getElementById("logsemail").innerHTML="Correct";
    }
    else{
    document.getElementById("logsemail").style.color="Black";
    document.getElementById("logsemail").innerHTML="Incorrect";
    }
    }
function logs11(){
    var
    email=document.getElementById("Username").value;
    if(check.length==0){
    document.getElementById("logsemail").style.color="Red";
    document.getElementById("logsemail").innerHTML="Fields With * Can't Be Left Empty!!";
    }
    }
function logs2(){
        var
        checkpass=document.getElementById("Password").value;
        var v1=/[A-Z]+/;
        var v2=/[a-z]+/;
        var v3=/[0-9]+/;
        var v4=/[!@#$%^&*]/;
        var len=checkpass.length;
        if(v1.test(checkpass) &&
        v2.test(checkpass) && v3.test(checkpass) && v4.test(checkpass) && 8<=len &&
        len<=20){
        document.getElementById("logspass").style.color="Green";
        document.getElementById("logspass").style.fontSize="20px";
        document.getElementById("logspass").innerHTML="Correct";
        }
        else{
        if(len<8)
        {
        document.getElementById("logspass").style.color="Black";
        document.getElementById("logspass").style.fontSize="20px";
        document.getElementById("logspass").innerHTML="Password Length is Too Less";
        }
        else
        {
        document.getElementById("logspass").style.color="Black";
        document.getElementById("logspass").style.fontSize="14px";
        document.getElementById("logspass").innerHTML="Password Should Have an uppercase, a Lowercase, a Digit and a Special Character";
        }
        }
        }
function logs22(){
        var
        checkpass=document.getElementById("Password").value;
        if(checkpass.length==0)
        {
        document.getElementById("logspass").style.color="Red";
        document.getElementById("logspass").style.fontSize="20px";
        document.getElementById("logspass").innerHTML="Fields With * Can't Be Left Empty!!";
        }
        }
function logs3(){
    var
    final1=document.getElementById("logsemail").innerHTML;
    var
    final2=document.getElementById("logspass").innerHTML;
    var final3="Correct";
    var final4="",final5="Fields With * Can't Be Left Empty!!";
    if(final1===final2 && final1===final3)
        {
        window.alert("ALL DETAILS ARE CORRECT");
        window.open("https://zoom.us/j/97540058367?pwd=OTVjMUdtUW5rRHpqQ3AvY0tNbnhYQT09")
        }
    else{
        if(final1===final4||final2===final4||final1===final5||final2===final5)
        {
        window.alert("SOME FIELDS ARE EMPTY!!");
        }
        else
        {
        window.alert("DETAILS ARE NOT CORRECT!");
        }
        }
}


// JAVASCRIPT CODE FOR SIGNUP SECTION

function signs1(){
    var
    name=document.getElementById("fname").value;
    var np=/(^[A-Z]{1}[a-z]+$|^[A-Z]{1}[a-z]+\s{1}[A-Z]{1}[a-z]+$)/;
    if(np.test(name)){
    document.getElementById("signfname").style.color="Green";
    document.getElementById("signfname").innerHTML="Correct";
    }
    else{
    document.getElementById("signfname").style.color="Black";
    document.getElementById("signfname").innerHTML="Incorrect";
    }
    }
function signs11(){
    var
    name=document.getElementById("fname").value;
    if(name.length==0){
    document.getElementById("signfname").style.color="Red";
    document.getElementById("signfname").innerHTML="Fields With * Can't Be Left Empty!!";
    }
    }
function signs2(){
    var
    name=document.getElementById("lname").value;
    var np=/(^[A-Z]{1}[a-z]+$|^[A-Z]{1}[az]+\s{1}[A-Z]{1}[a-z]+$)/;
    if(np.test(name)){
    document.getElementById("signlname").style.color="Green";
    document.getElementById("signlname").innerHTML="Correct";
    }
    else{
    document.getElementById("signlname").style.color="Black";
    document.getElementById("signlname").innerHTML="Incorrect";
    }
    }
function signs22(){
    var
    name=document.getElementById("lname").value;
    if(name.length==0){
    document.getElementById("signlname").style.color="Red";
    document.getElementById("signlname").innerHTML="Fields With * Can't Be Left Empty!!";
    }
    }

function signs3(){
        var
        email=document.getElementById("username").value;
        var ep=/^\w+\d+@[a-z]+(\.com|\.in|\.edu\.in)/;
        if(ep.test(email)){
        document.getElementById("signemail").style.color="Green";
        document.getElementById("signemail").innerHTML="Correct";
        }
        else{
        document.getElementById("signemail").style.color="Black";
        document.getElementById("signemail").innerHTML="Incorrect";
        }
        }
function signs33(){
        var
        email=document.getElementById("username").value;
        if(email.length==0){
        document.getElementById("signemail").style.color="Red";
        document.getElementById("signemail").innerHTML="Fields With * Can't Be Left Empty!!";
        }
        }
function signs4(){
    var
    password=document.getElementById("pass").value;
    var p1=/[A-Z]+/;
    var p2=/[a-z]+/;
    var p3=/[0-9]+/;
    var p4=/[!@#$%^&*]/;
    var l=password.length;
    if(p1.test(password) &&
    p2.test(password) && p3.test(password) && p4.test(password) && 6<=l &&
    l<=20){
    document.getElementById("signpass").style.color="Green";
    document.getElementById("signpass").style.fontSize="20px";
    document.getElementById("signpass").innerHTML="Correct";
    }
    else{
    if(l<6)
    {
    document.getElementById("signpass").style.color="Black";
    document.getElementById("signpass").style.fontSize="20px";
    document.getElementById("signpass").innerHTML="Password Length is Too Less";
    }
    else
    {
    document.getElementById("signpass").style.color="Black";
    document.getElementById("signpass").style.fontSize="14px";
    document.getElementById("signpass").innerHTML="Password Should Have an uppercase, a Lowercase, a Digit and a Special Character";
    }
    }
    }
function signs44(){
    var
    password=document.getElementById("pass").value;
    if(password.length==0)
    {
    document.getElementById("signpass").style.color="Red";
    document.getElementById("signpass").style.fontSize="20px";
    document.getElementById("signpass").innerHTML="Fields With * Can't Be Left Empty!!";
    }
    }
function signs5(){
    var
    confirmpass=document.getElementById("C_password").value;
    var
    password=document.getElementById("pass").value;
    if(password===confirmpass){
    document.getElementById("signcpass").style.color="Green";
    document.getElementById("signcpass").innerHTML="Correct";
    }
    else{
    document.getElementById("signcpass").style.color="Black";
    document.getElementById("signcpass").innerHTML="Passwords Doesn't Match";
    }
    }
function signs55()
    {
    var
    confirmpass=document.getElementById("C_password").value;
    if(confirmpass.length==0){
    document.getElementById("signcpass").style.color="Red";
    document.getElementById("signcpass").innerHTML="Fields With * Can't Be Left Empty!!";
    }
    }
function signs6(){
    var
    v1=document.getElementById("signfname").innerHTML;
    var
    v2=document.getElementById("signlname").innerHTML;
    var
    v3=document.getElementById("signemail").innerHTML;
    var
    v4=document.getElementById("signpass").innerHTML;
    var
    v5=document.getElementById("signcpass").innerHTML;
    var v6="Correct";
    var v7="",v8="Fields With * Can't Be Left Empty!!";
    if(v1===v2 && v1===v3 && v1===v4 && v1===v5 &&
    v1===v6)
    {
    window.alert("ALL DETAILS ARE CORRECT");
    window.open("https://zoom.us/j/97540058367?pwd=OTVjMUdtUW5rRHpqQ3AvY0tNbnhYQT09")
    }
    else{
    if(v1===v7||v2===v7||v3===v7||v4===v7||v5===v7||v1===v8||v2===v8||v3===v8||v4===v8||v5===v8)
    {
    window.alert("SOME FIELDS ARE EMPTY!!");
    }
    else
    {
    window.alert("DETAILS ARE NOT CORRECT!");
    }
    }
    }