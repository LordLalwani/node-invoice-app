"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInvoiceWithLineItems = exports.removeLineItemsByIdFromInvoice = void 0;
const invoice_1 = __importDefault(require("../classes/invoice"));
const removeLineItemsByIdFromInvoice = (lineItemsIds, invoice) => {
    lineItemsIds.forEach((id) => {
        invoice.removeLineItemById(id);
    });
};
exports.removeLineItemsByIdFromInvoice = removeLineItemsByIdFromInvoice;
const createInvoiceWithLineItems = (lineItems) => {
    const invoice = new invoice_1.default();
    lineItems.forEach((lineItem) => {
        invoice.addLineItem(lineItem);
    });
    return invoice;
};
exports.createInvoiceWithLineItems = createInvoiceWithLineItems;
//# sourceMappingURL=lineItemHelpers.js.map