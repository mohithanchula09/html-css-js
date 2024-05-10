class Fun{
    constructor()
    {
        console.log("Janasena Party")
        this.a=3;
        this.b=3;
    }
}

class Crazy extends Fun{
    constructor(c,d){
       
                  super()
                 console.log("PRP")
                 this.c=c;
                 this.d=d;

                 }
}

//let obj1=new Fun(100,200)
let obj=new Crazy(10,20)
console.log(obj)
