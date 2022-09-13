let num=13;
let count=1;

for(let i=0;i<13;i++){
	if(i/13==0){
		count++;
	}
}
if(count==2){
	console.log("No is prime");
}else{
	console.log("No is not prime");
}