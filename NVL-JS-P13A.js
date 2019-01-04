var primos=[];
var n=10;
var i=0;
var a=0;
function primos(n){
	do{
		if(i==2){
			push.primos(i);
			a++;
		}
		if(i>2&&i%2!=0){
			push.primos(i);
			a++;
		}
	 i++;	
	}while(a<n);
}
