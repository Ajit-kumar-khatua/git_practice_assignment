let num=13;
let count=0;

for(let i=1;i<=13;i++){
	if(13%i==0){
		count++;
	}
}
if(count==2){
	console.log("No is prime");
}else{
	console.log("No is not prime");
}