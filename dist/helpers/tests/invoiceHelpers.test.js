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
const invoiceHelpers = __importStar(require("../invoiceHelpers"));
const lineItemHelpers = __importStar(require("../lineItemHelpers"));
const invoiceLineItem_1 = __importDefault(require("../../classes/invoiceLineItem"));
let lineItem0;
let lineItem1;
let invoice0;
let invoice1;
beforeEach(() => {
    lineItem0 = new invoiceLineItem_1.default(0, 6, 10, "Bacon Lollipops");
    invoice0 = lineItemHelpers.createInvoiceWithLineItems([lineItem0]);
    lineItem1 = new invoiceLineItem_1.default(1, 4, 1, "Whiskey Cake");
    invoice1 = lineItemHelpers.createInvoiceWithLineItems([lineItem1]);
});
describe("Invoice Testing", () => {
    describe("Invoice merging functionality", () => {
        test('it should not alter invoices when only one invoice is merged (into itself)', () => {
            const mergedInvoice = invoiceHelpers.mergeInvoices([invoice0]);
            const expectedResult = [...invoice0.getLineItems()];
            expect(mergedInvoice.getLineItems()).toStrictEqual(expectedResult);
        });
        test('it should merge invoice 0 & 1 and we should expect joint line items as a result', () => {
            const mergedInvoice = invoiceHelpers.mergeInvoices([invoice0, invoice1]);
            const expectedResult = [...invoice0.getLineItems(), ...invoice1.getLineItems()];
            expect(mergedInvoice.getLineItems()).toStrictEqual(expectedResult);
        });
        test('it should merge invoice 0 & 1 and we should expect the price of each line item to be summed up as a result', () => {
            const mergedInvoice = invoiceHelpers.mergeInvoices([invoice0, invoice1]);
            expect(mergedInvoice.getTotal()).toStrictEqual(10);
        });
    });
    describe("Invoice cloning functionality", () => {
        test('it should clone an invoice successfully', () => {
            const clonedInvoice = invoiceHelpers.cloneInvoice(invoice0);
            expect(clonedInvoice).toStrictEqual(invoice0);
        });
    });
    describe("Invoice to string functionality", () => {
        test('it should convert an invoice to string successfully', () => {
            const stringifiedInvoice = invoiceHelpers.invoiceToString(invoice0);
            const expectedResult = JSON.stringify(invoice0);
            expect(stringifiedInvoice).toStrictEqual(expectedResult);
        });
    });
});
//# sourceMappingURL=invoiceHelpers.test.js.map