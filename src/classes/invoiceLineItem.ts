class InvoiceLineItem implements I_InvoiceLineItem {

    readonly invoiceLineId: number;
    cost: number;
    quantity: number
    description: string;

    constructor(invoiceLineId: number, cost: number, quantity: number, description: string) {
        this.invoiceLineId = invoiceLineId;
        this.cost = cost;
        this.quantity = quantity;
        this.description = description;
    }
}

export default InvoiceLineItem;
