
//2) input: Enter no. of series: 5
//output: 0+1+1+2+3 = 7
let n =prompt("enter a number")
let a=0,b=1,res="",sum=0
for(i=1;i<=n;i++){
    res=res+a;
    sum=sum+a;
    if(i<n)
        res+="+"
    let c=a+b
    a=b
    b=c
}
res+=`=${sum}`
console.log(res)

//3) WAP to print the sum of fib in the given number
//input: Enter a number: 4311
//output: 5
num=prompt("enter a number")
sum1=0
for(i of num){
    a=0,b=1
    while(a<i){
        let c=a+b;
        a=b
        b=c
        if(a==i){
            sum1+=Number(i);
            break
        }
    }
}
console.log(sum1)











