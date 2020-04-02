interface Calculator {
    calculation(): void
}

class InterestCalculator implements Calculator {
    constructor(public p:number, public n: number, public r:number) {}

    //interest calculation
    calculation(): void {
        console.log("Interest is", (this.p * this.n * this.r)/100 )
    }
}

class ShapeCalculator implements Calculator {
    constructor(public radius:number) {}

    //shape calculation
    calculation(): void {
        console.log("Perimeter is", (2 * Math.PI * this.radius)/100 )
    }
}

let intCal = new InterestCalculator(10, 10, 10);
intCal.calculation();

let shapeCal = new ShapeCalculator(100);
shapeCal.calculation();