import Invoice from "../classes/invoice"
import InvoiceLineItem from "../classes/invoiceLineItem";

export const removeLineItemsByIdFromInvoice = (lineItemsIds: number[], invoice: Invoice): void => {
    lineItemsIds.forEach((id: number) => {
        invoice.removeLineItemById(id);
    })
}

export const createInvoiceWithLineItems = (lineItems: InvoiceLineItem[]): Invoice => {
    const invoice = new Invoice();

    lineItems.forEach((lineItem: InvoiceLineItem) => {
        invoice.addLineItem(lineItem);
    })

    return invoice;
}