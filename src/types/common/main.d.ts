interface I_InvoiceLineItem {
    invoiceLineId: number,
    cost: number,
    quantity: number,
    description: string
}

interface I_Invoice {
    invoiceDate: Date;
    region: string;
    readonly invoiceNumber: string;
    tax: number;

    addLineItem: (lineItem: InvoiceLineItem) => void;
    removeLineItemById: (invoiceNumber: number) => void;
    changeRegion: (regionCode: sting) => void;
    getTotal: () => number;
    mergeInvoice: (invoice: Invoice) => Invoice;
    clone: () => Invoice;
}
