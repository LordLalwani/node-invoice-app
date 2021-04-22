"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Invoice {
    constructor(invoiceDate = new Date(), invoiceNumber = "", lineItems = []) {
        this.invoiceDate = invoiceDate;
        this.invoiceNumber = invoiceNumber;
        this.lineItems = lineItems;
    }
    addLineItem(lineItem) {
        this.lineItems.push(lineItem);
    }
    removeLineItemById(id) {
        this.lineItems.splice(this.lineItems.findIndex(line => line.invoiceLineId === id), 1);
    }
    getLineItems() {
        return this.lineItems;
    }
    getTotal() {
        return this.lineItems.reduce((total, line) => total + line.cost, 0);
    }
    mergeInvoice(invoice) {
        this.lineItems = [...this.lineItems, ...invoice.lineItems];
        return this;
    }
    clone() {
        return this;
    }
}
exports.default = Invoice;
//# sourceMappingURL=invoice.js.map