import Invoice from "./classes/invoice";
import InvoiceLineItem from "./classes/invoiceLineItem";
import { mergeInvoices, cloneInvoice, invoiceToString } from "./helpers/invoiceHelpers"
import { removeLineItemsByIdFromInvoice, createInvoiceWithLineItems } from "./helpers/lineItemHelpers";

const main = () => {
    console.log("Welcome!");

    // // --------- ADDING ONE LINE ITEM TO INVOICE -------------
    // const lineItem0 = new InvoiceLineItem(1, 6.99, 1, "Apple");
    // const testingInvoice0 = createInvoiceWithLineItems([lineItem0]);
    // console.log(testingInvoice0.getLineItems());
    // // --------------------------------------------------------------

    // // --------- ADDING ONE OR MORE LINE ITEMS TO INVOICE -------------
    // const lineItem1 = new InvoiceLineItem(1, 10.21, 4, "Banana");
    // const lineItem2 = new InvoiceLineItem(2, 5.21, 1, "Orange");
    // const lineItem3 = new InvoiceLineItem(3, 6.21, 5, "Pineapple");

    // const testingInvoice1 = createInvoiceWithLineItems([lineItem1, lineItem2, lineItem3]);
    // console.log(testingInvoice1.getTotal());
    // // --------------------------------------------------------------

    // // --------- REMOVE ONE OR MORE LINE ITEMS OF INVOICES -------------
    // const testingInvoice2 = new Invoice();
    // testingInvoice2.addLineItem(new InvoiceLineItem(1, 10.21, 1, "Orange"));
    // testingInvoice2.addLineItem(new InvoiceLineItem(2, 10.99, 5, "Banana"));

    // // solution for multiple line items removals
    // removeLineItemsByIdFromInvoice([1], testingInvoice2);
    // console.log(testingInvoice2.getTotal());

    // // You can also directly access removeLineItemById from the invoice class for singular removals.
    // // testingInvoice2.removeLineItemById(1);
    // // console.log(testingInvoice2.getTotal());
    // // --------------------------------------------------------------

    // // --------- MERGING OF INVOICES ------------------------
    // const testingInvoice3 = new Invoice();
    // testingInvoice3.addLineItem(new InvoiceLineItem(1, 10.21, 1, "Blueberries"));
    // const testingInvoice4 = new Invoice();
    // testingInvoice4.addLineItem(new InvoiceLineItem(2, 5.29, 4, "Orange"));
    // testingInvoice4.addLineItem(new InvoiceLineItem(3, 9.99, 1, "Banana"));

    // const mergedInvoice = mergeInvoices([testingInvoice3, testingInvoice4]);
    // console.log(mergedInvoice.getTotal());
    // // --------------------------------------------------------------

    // // --------- CLONING --------------------------------------
    // const testingInvoice5 = new Invoice();
    // testingInvoice5.addLineItem(new InvoiceLineItem(1, 0.99, 5, "Onion"));
    // testingInvoice5.addLineItem(new InvoiceLineItem(2, 10.49, 2, "Watermelon"));

    // const clonedInvoice = cloneInvoice(testingInvoice5);
    // console.log(clonedInvoice.getTotal());
    // --------------------------------------------------------------

    // --------- CONVERTING INVOICE TO STRING ----------------
    const testingInvoice6 = new Invoice(new Date(), "1000", [
        new InvoiceLineItem(1, 1.99, 20, "Peer"),
    ]);


    testingInvoice6.updateTax();
    const stringifiedInvoice = invoiceToString(testingInvoice6);
    console.log(stringifiedInvoice);
    // --------------------------------------------------------------
}

main();