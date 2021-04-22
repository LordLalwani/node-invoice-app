import Invoice from "../invoice"
import * as invoiceHelpers from "../../helpers/invoiceHelpers"
import * as lineItemHelpers from "../../helpers/lineItemHelpers"
import InvoiceLineItem from "../invoiceLineItem";

jest.mock('../invoice');

let testingInvoice: Invoice;
let testingLineItem: InvoiceLineItem;

beforeEach(() => {
    testingLineItem = new InvoiceLineItem(1, 10.21, 4, "Jelly");
    testingInvoice = new Invoice();
    testingInvoice.clone = jest.fn();
    testingInvoice.mergeInvoice = jest.fn();
    testingInvoice.addLineItem = jest.fn();
    testingInvoice.removeLineItemById = jest.fn();
})

describe('Invoice class testing', () => {
    describe('Helpers should call the right class functions (routing)', () => {
        it('invoiceHelpers.cloneInvoice should call Invoice.clone', () => {
            const clonedInvoice = invoiceHelpers.cloneInvoice(testingInvoice);
            expect(testingInvoice.clone).toHaveBeenCalledTimes(1);

            expect(testingInvoice.mergeInvoice).not.toHaveBeenCalled();
            expect(testingInvoice.addLineItem).not.toHaveBeenCalled();
            expect(testingInvoice.removeLineItemById).not.toHaveBeenCalled();
        });
        it('invoiceHelpers.mergeInvoices should call Invoice.mergeInvoice', () => {
            const mergedInvoice = invoiceHelpers.mergeInvoices([testingInvoice]);
            expect(mergedInvoice.mergeInvoice).toHaveBeenCalledTimes(1);

            expect(mergedInvoice.clone).not.toHaveBeenCalled();
            expect(mergedInvoice.addLineItem).not.toHaveBeenCalled();
            expect(mergedInvoice.removeLineItemById).not.toHaveBeenCalled();
        });

        it('lineItemHelpers.createInvoiceWithLineItems should call Invoice.addLineItem', () => {
            const testingInvoice2 = lineItemHelpers.createInvoiceWithLineItems([testingLineItem]);
            expect(testingInvoice2.addLineItem).toHaveBeenCalledTimes(1);

            expect(testingInvoice2.clone).not.toHaveBeenCalled();
            expect(testingInvoice2.mergeInvoice).not.toHaveBeenCalled();
            expect(testingInvoice2.removeLineItemById).not.toHaveBeenCalled();
        });
        it('lineItemHelpers.removeLineItemsByIdFromInvoice should call Invoice.addLineItem', () => {
            lineItemHelpers.removeLineItemsByIdFromInvoice([1], testingInvoice);
            expect(testingInvoice.removeLineItemById).toHaveBeenCalledTimes(1);

            expect(testingInvoice.clone).not.toHaveBeenCalled();
            expect(testingInvoice.mergeInvoice).not.toHaveBeenCalled();
            expect(testingInvoice.addLineItem).not.toHaveBeenCalled();
        });
    });
});
