import InvoiceLineItem from "./invoiceLineItem";
import { taxValue } from "../constants/taxValues"

class Invoice implements I_Invoice {

    readonly invoiceDate: Date;
    readonly invoiceNumber: string;
    private lineItems: InvoiceLineItem[];
    region: string;
    tax: number; // come back to number type, perhaps float or another is better
    grossValue: number;
    netValue: number;



    constructor(invoiceDate = new Date(), invoiceNumber = "", lineItems = [] as InvoiceLineItem[], region = "NZL", tax = 0) {
        this.invoiceDate = invoiceDate;
        this.invoiceNumber = invoiceNumber;
        this.lineItems = lineItems;
        this.region = region;
        this.tax = tax;
        this.grossValue = 0;
        this.netValue = 0;
    }

    addLineItem(lineItem: InvoiceLineItem): void {
        this.lineItems.push(lineItem);
    }

    updateTax(regionCode?: string): void {
        if (!regionCode) {
            regionCode = this.region;
        }
        const taxPercentage = taxValue[regionCode];

        const preTaxValue = this.getTotal()
        this.tax = ((preTaxValue / 100) * taxPercentage)
        this.grossValue = preTaxValue + this.tax;
        this.netValue = preTaxValue
    }

    changeRegion(regionCode: string): void {
        this.region = regionCode;
    }

    removeLineItemById(id: number): void {
        this.lineItems.splice(this.lineItems.findIndex(line => line.invoiceLineId === id), 1);
    }

    getLineItems(): InvoiceLineItem[] {
        return this.lineItems;
    }

    getTotal(): number {
        return this.lineItems.reduce((total, line) => total + (line.cost * line.quantity), 0);
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
