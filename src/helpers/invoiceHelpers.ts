import Invoice from "../classes/invoice";

export const mergeInvoices = (invoicesToMerge: Invoice[]): Invoice => {
    const mergedInvoice = new Invoice();

    invoicesToMerge.forEach((invoice: Invoice) => {
        mergedInvoice.mergeInvoice(invoice);
    })

    return mergedInvoice;
}

export const cloneInvoice = (invoiceToClone: Invoice): Invoice => {
    return invoiceToClone.clone();
}

export const invoiceToString = (invoice: Invoice): string => {
    return JSON.stringify(invoice);
}