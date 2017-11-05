export class DeliveryInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    zip: string;

    constructor(init?:Partial<DeliveryInfo>) {
        Object.assign(this, init);
    }
}
