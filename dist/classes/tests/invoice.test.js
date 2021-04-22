"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_1 = __importDefault(require("../invoice"));
const invoiceHelpers = __importStar(require("../../helpers/invoiceHelpers"));
const lineItemHelpers = __importStar(require("../../helpers/lineItemHelpers"));
const invoiceLineItem_1 = __importDefault(require("../invoiceLineItem"));
jest.mock('../invoice');
let testingInvoice;
let testingLineItem;
beforeEach(() => {
    testingLineItem = new invoiceLineItem_1.default(1, 10.21, 4, "Jelly");
    testingInvoice = new invoice_1.default();
    testingInvoice.clone = jest.fn();
    testingInvoice.mergeInvoice = jest.fn();
    testingInvoice.addLineItem = jest.fn();
    testingInvoice.removeLineItemById = jest.fn();
});
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
//# sourceMappingURL=invoice.test.js.map