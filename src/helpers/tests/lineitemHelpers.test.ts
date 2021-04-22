import * as lineItemHelpers from "../lineItemHelpers"
import Invoice from "../../classes/invoice";
import InvoiceLineItem from "../../classes/invoiceLineItem";

let lineItem0: InvoiceLineItem;
let lineItem1: InvoiceLineItem;
let invoice0: Invoice;
let testingInvoice: Invoice;

beforeEach(() => {
    lineItem0 = new InvoiceLineItem(0, 6, 10, "Bacon Lollipops");
    lineItem1 = new InvoiceLineItem(1, 4, 1, "Whiskey Cake");
    testingInvoice = lineItemHelpers.createInvoiceWithLineItems([lineItem0, lineItem1]);
})
describe("Line item Testing", () => {
    describe("Line item creation functionality", () => {
        test('it should create an invoice with one line item successfully', () => {
            invoice0 = lineItemHelpers.createInvoiceWithLineItems([lineItem0]);
            expect(invoice0.getLineItems()).toStrictEqual([lineItem0]);
        })

        test('it should create an invoice with multiple line items successfully', () => {
            invoice0 = lineItemHelpers.createInvoiceWithLineItems([lineItem0, lineItem1]);
            expect(invoice0.getLineItems()).toStrictEqual([lineItem0, lineItem1]);
        })
    });
    describe("Line item removal functionality", () => {
        test('it should remove single line items by id successfully', () => {
            lineItemHelpers.removeLineItemsByIdFromInvoice([0], testingInvoice);
            expect(testingInvoice.getLineItems()).toStrictEqual([lineItem1]);
        })

        test('it should remove multiple line items by ids successfully', () => {
            lineItemHelpers.removeLineItemsByIdFromInvoice([0, 1], testingInvoice);
            expect(testingInvoice.getLineItems()).toStrictEqual([]);
        })
    });
});