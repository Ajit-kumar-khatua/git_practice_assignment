let str="amann";
let str2="";

for(let i=1;i<=str.length;i++){
	str2=str2+str[i];
}
if(str==str2){
	console.log("pallindome");
}else{
	console.log("Not a pallindrome");
}