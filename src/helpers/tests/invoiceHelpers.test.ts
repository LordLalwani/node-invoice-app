import * as invoiceHelpers from "../invoiceHelpers"
import * as lineItemHelpers from "../lineItemHelpers"
import Invoice from "../../classes/invoice";
import InvoiceLineItem from "../../classes/invoiceLineItem";

let lineItem0: InvoiceLineItem;
let lineItem1: InvoiceLineItem;
let invoice0: Invoice;
let invoice1: Invoice;

beforeEach(() => {
    lineItem0 = new InvoiceLineItem(0, 6, 10, "Bacon Lollipops");
    invoice0 = lineItemHelpers.createInvoiceWithLineItems([lineItem0]);

    lineItem1 = new InvoiceLineItem(1, 4, 1, "Whiskey Cake");
    invoice1 = lineItemHelpers.createInvoiceWithLineItems([lineItem1]);
})

describe("Invoice Testing", () => {
    describe("Invoice merging functionality", () => {
        test('it should not alter invoices when only one invoice is merged (into itself)', () => {
            const mergedInvoice = invoiceHelpers.mergeInvoices([invoice0]);
            const expectedResult = [...invoice0.getLineItems()];

            expect(mergedInvoice.getLineItems()).toStrictEqual(expectedResult);
        })

        test('it should merge invoice 0 & 1 and we should expect joint line items as a result', () => {
            const mergedInvoice = invoiceHelpers.mergeInvoices([invoice0, invoice1]);
            const expectedResult = [...invoice0.getLineItems(), ...invoice1.getLineItems()];

            expect(mergedInvoice.getLineItems()).toStrictEqual(expectedResult);
        })

        test('it should merge invoice 0 & 1 and we should expect the price of each line item to be summed up as a result', () => {
            const mergedInvoice = invoiceHelpers.mergeInvoices([invoice0, invoice1]);

            expect(mergedInvoice.getTotal()).toStrictEqual(10);
        })
    });

    describe("Invoice cloning functionality", () => {
        test('it should clone an invoice successfully', () => {
            const clonedInvoice = invoiceHelpers.cloneInvoice(invoice0);

            expect(clonedInvoice).toStrictEqual(invoice0);
        })
    });

    describe("Invoice to string functionality", () => {
        test('it should convert an invoice to string successfully', () => {
            const stringifiedInvoice = invoiceHelpers.invoiceToString(invoice0);
            const expectedResult = JSON.stringify(invoice0)

            expect(stringifiedInvoice).toStrictEqual(expectedResult);
        })
    });
});