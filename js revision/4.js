class Cal{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }

    add(){
        return this.a+this.b;
    }
    sub(){
        return this.a-this.b;
    }
    multi(){
        return this.a*this.b;
    }
    div(){
        return this.a/this.b;
    }
}
class Mycal extends Cal{

}
let obj=new Mycal(100,29)
console.log(obj.add())
console.log(obj.sub())
console.log(obj.multi())
console.log(obj.div())