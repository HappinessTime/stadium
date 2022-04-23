//var ipAddr="localhost:8080"
//var ipAddr = "10.28.191.210:8080"
var  ipAddr = "10.28.243.58:8080"
function getSessionId(){
    var c_name = 'JSESSIONID';
    if(document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=")
        if(c_start!=-1){
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if(c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
}