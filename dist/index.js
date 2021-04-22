"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_1 = __importDefault(require("./classes/invoice"));
const invoiceLineItem_1 = __importDefault(require("./classes/invoiceLineItem"));
const invoiceHelpers_1 = require("./helpers/invoiceHelpers");
const lineItemHelpers_1 = require("./helpers/lineItemHelpers");
const main = () => {
    console.log("Welcome to Xero Tech Test!");
    // --------- ADDING ONE LINE ITEM TO INVOICE -------------
    const lineItem0 = new invoiceLineItem_1.default(1, 6.99, 1, "Apple");
    const testingInvoice0 = lineItemHelpers_1.createInvoiceWithLineItems([lineItem0]);
    console.log(testingInvoice0.getLineItems());
    // --------------------------------------------------------------
    // --------- ADDING ONE OR MORE LINE ITEMS TO INVOICE -------------
    const lineItem1 = new invoiceLineItem_1.default(1, 10.21, 4, "Banana");
    const lineItem2 = new invoiceLineItem_1.default(2, 5.21, 1, "Orange");
    const lineItem3 = new invoiceLineItem_1.default(3, 6.21, 5, "Pineapple");
    const testingInvoice1 = lineItemHelpers_1.createInvoiceWithLineItems([lineItem1, lineItem2, lineItem3]);
    console.log(testingInvoice1.getTotal());
    // --------------------------------------------------------------
    // --------- REMOVE ONE OR MORE LINE ITEMS OF INVOICES -------------
    const testingInvoice2 = new invoice_1.default();
    testingInvoice2.addLineItem(new invoiceLineItem_1.default(1, 10.21, 1, "Orange"));
    testingInvoice2.addLineItem(new invoiceLineItem_1.default(2, 10.99, 5, "Banana"));
    // solution for multiple line items removals
    lineItemHelpers_1.removeLineItemsByIdFromInvoice([1], testingInvoice2);
    console.log(testingInvoice2.getTotal());
    // You can also directly access removeLineItemById from the invoice class for singular removals.
    // testingInvoice2.removeLineItemById(1);
    // console.log(testingInvoice2.getTotal());
    // --------------------------------------------------------------
    // --------- MERGING OF INVOICES ------------------------
    const testingInvoice3 = new invoice_1.default();
    testingInvoice3.addLineItem(new invoiceLineItem_1.default(1, 10.21, 1, "Blueberries"));
    const testingInvoice4 = new invoice_1.default();
    testingInvoice4.addLineItem(new invoiceLineItem_1.default(2, 5.29, 4, "Orange"));
    testingInvoice4.addLineItem(new invoiceLineItem_1.default(3, 9.99, 1, "Banana"));
    const mergedInvoice = invoiceHelpers_1.mergeInvoices([testingInvoice3, testingInvoice4]);
    console.log(mergedInvoice.getTotal());
    // --------------------------------------------------------------
    // --------- CLONING --------------------------------------
    const testingInvoice5 = new invoice_1.default();
    testingInvoice5.addLineItem(new invoiceLineItem_1.default(1, 0.99, 5, "Onion"));
    testingInvoice5.addLineItem(new invoiceLineItem_1.default(2, 10.49, 2, "Watermelon"));
    const clonedInvoice = invoiceHelpers_1.cloneInvoice(testingInvoice5);
    console.log(clonedInvoice.getTotal());
    // --------------------------------------------------------------
    // --------- CONVERTING INVOICE TO STRING ----------------
    const testingInvoice6 = new invoice_1.default(new Date(), "1000", [
        new invoiceLineItem_1.default(1, 1.99, 20, "Peer"),
    ]);
    const stringifiedInvoice = invoiceHelpers_1.invoiceToString(testingInvoice6);
    console.log(stringifiedInvoice);
    // --------------------------------------------------------------
};
main();
//# sourceMappingURL=index.js.map