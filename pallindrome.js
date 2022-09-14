let count=0;
let str="aman";
let str2="";

for(let i=str.length-1;i>=0;i--)
{
	str2=str2+str[i];

  for(let j=0;j<=i;j++)
  {
    if(str[i]==str2[j])
    {
	  count++;
    }
    else
    {
	  count=0;
    } 
  }
}
if(count==str.length)
{
console.log("pallindrome")
}
else 
{
console.log("not a pallindrome")

}
