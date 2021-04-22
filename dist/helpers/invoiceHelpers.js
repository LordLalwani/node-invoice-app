"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceToString = exports.cloneInvoice = exports.mergeInvoices = void 0;
const invoice_1 = __importDefault(require("../classes/invoice"));
const mergeInvoices = (invoicesToMerge) => {
    const mergedInvoice = new invoice_1.default();
    invoicesToMerge.forEach((invoice) => {
        mergedInvoice.mergeInvoice(invoice);
    });
    return mergedInvoice;
};
exports.mergeInvoices = mergeInvoices;
const cloneInvoice = (invoiceToClone) => {
    return invoiceToClone.clone();
};
exports.cloneInvoice = cloneInvoice;
const invoiceToString = (invoice) => {
    return JSON.stringify(invoice);
};
exports.invoiceToString = invoiceToString;
//# sourceMappingURL=invoiceHelpers.js.map