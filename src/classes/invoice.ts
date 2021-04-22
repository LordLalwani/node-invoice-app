import InvoiceLineItem from "./invoiceLineItem";

class Invoice implements I_Invoice {

    readonly invoiceDate: Date;
    readonly invoiceNumber: string;
    private lineItems: InvoiceLineItem[];

    constructor(invoiceDate = new Date(), invoiceNumber = "", lineItems = [] as InvoiceLineItem[]) {
        this.invoiceDate = invoiceDate;
        this.invoiceNumber = invoiceNumber;
        this.lineItems = lineItems;
    }

    addLineItem(lineItem: InvoiceLineItem): void {
        this.lineItems.push(lineItem);
    }

    removeLineItemById(id: number): void {
        this.lineItems.splice(this.lineItems.findIndex(line => line.invoiceLineId === id), 1);
    }

    getLineItems(): InvoiceLineItem[] {
        return this.lineItems;
    }

    getTotal(): number {
        return this.lineItems.reduce((total, line) => total + line.cost, 0);
    }

    mergeInvoice(invoice: Invoice): Invoice {
        this.lineItems = [...this.lineItems, ...invoice.lineItems];
        return this;
    }

    clone(): Invoice {
        return this;
    }
}

export default Invoice;
