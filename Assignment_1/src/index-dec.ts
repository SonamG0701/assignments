function Logger(config: any) {
    return function (target: any) {
        console.log("Customer with name", `${config.firstName} ${config.lastName} and Customer Id ${config.custId} did transaction on ${new Date()}`);
    }
}

function logMethod(
    target: Object,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor): PropertyDescriptor {    
    const method = propertyDesciptor.value;

    propertyDesciptor.value = function (...args: any[]) {        
        const params = args.map(a => JSON.stringify(a)).join();        
        const result = method.apply(this, args);

        // convert result to string
        const r = JSON.stringify(result);

        // display in console the function call details
        console.log(`Transaction done for customer with id: ${params}`);

        // return the result of invoking the method
        return result;
    }
    return propertyDesciptor;
};

type customerType = {
    firstName: string;
    lastName: string;
    custId: number;
}

function Info(customerInfo: customerType) {
    
    return function (target: any) {        
        Object.defineProperty(target.prototype, 'customerInfo', { value: customerInfo })
    }
}

@Info({firstName:'Sonam', lastName:'Gupta', custId: 1})
class Customer {
    
    @logMethod
    customerTransaction(custId: number) {
        console.log('Transaction completed');
    }
}

let cus = new Customer() as any;
console.log(` ${cus.customerInfo.firstName}`)
cus.customerTransaction(`${cus.customerInfo.custId}`);