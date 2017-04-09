export interface Car {
    run();
}

export class BMW implements Car{
    run(){
        console.log("BMW RUN")
    };
}

export class KIA implements Car{
    run(){
        console.log("Kia RUN")
    };
}

export class Factory {
    public static create(type){
        if (type == 'bmw') {
            return new BMW();
        }else if(type == 'Kia'){
	    return new KIA();
	}
        return null;
    }
}
