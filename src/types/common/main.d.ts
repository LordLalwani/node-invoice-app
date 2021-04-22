interface I_InvoiceLineItem {
    invoiceLineId: number,
    cost: number,
    quantity: number,
    description: string
}

interface I_Invoice {
    invoiceDate: Date;
    readonly invoiceNumber: string;

    addLineItem: (lineItem: InvoiceLineItem) => void;
    removeLineItemById: (invoiceNumber: number) => void;
    getTotal: () => number;
    mergeInvoice: (invoice: Invoice) => Invoice;
    clone: () => Invoice;
}
