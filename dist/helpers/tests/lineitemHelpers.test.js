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
const lineItemHelpers = __importStar(require("../lineItemHelpers"));
const invoiceLineItem_1 = __importDefault(require("../../classes/invoiceLineItem"));
let lineItem0;
let lineItem1;
let invoice0;
let testingInvoice;
beforeEach(() => {
    lineItem0 = new invoiceLineItem_1.default(0, 6, 10, "Bacon Lollipops");
    lineItem1 = new invoiceLineItem_1.default(1, 4, 1, "Whiskey Cake");
    testingInvoice = lineItemHelpers.createInvoiceWithLineItems([lineItem0, lineItem1]);
});
describe("Line item Testing", () => {
    describe("Line item creation functionality", () => {
        test('it should create an invoice with one line item successfully', () => {
            invoice0 = lineItemHelpers.createInvoiceWithLineItems([lineItem0]);
            expect(invoice0.getLineItems()).toStrictEqual([lineItem0]);
        });
        test('it should create an invoice with multiple line items successfully', () => {
            invoice0 = lineItemHelpers.createInvoiceWithLineItems([lineItem0, lineItem1]);
            expect(invoice0.getLineItems()).toStrictEqual([lineItem0, lineItem1]);
        });
    });
    describe("Line item removal functionality", () => {
        test('it should remove single line items by id successfully', () => {
            lineItemHelpers.removeLineItemsByIdFromInvoice([0], testingInvoice);
            expect(testingInvoice.getLineItems()).toStrictEqual([lineItem1]);
        });
        test('it should remove multiple line items by ids successfully', () => {
            lineItemHelpers.removeLineItemsByIdFromInvoice([0, 1], testingInvoice);
            expect(testingInvoice.getLineItems()).toStrictEqual([]);
        });
    });
});
//# sourceMappingURL=lineitemHelpers.test.js.map