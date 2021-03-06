import { inject, bindable, BindingEngine, observable, computedFrom } from 'aurelia-framework'
var moment = require('moment');

@inject(BindingEngine, Element)
export class DataForm {
    @bindable readOnly = false;
    @bindable data = {};
    @bindable error = {};

    correctionTypes = ["Harga Satuan", "Harga Total"];
    correctionType = "Harga Satuan";
    pricePerUnitCorrectionReadOnly = false;
    constructor(bindingEngine, element) {
        this.bindingEngine = bindingEngine;
        this.element = element;

        this.UpoItem = {
            columns:  [
                { header: "No. PO Eksternal", value: "purchaseOrder.purchaseOrderExternal.no" },
                { header: "No. PR", value: "purchaseOrder.purchaseRequest.no" },
                { header: "Barang", value: "product" },
                { header: "Jumlah", value: "quantity" },
                { header: "Satuan", value: "uom.unit" },
                { header: "Harga Satuan", value: "pricePerUnit" },
                { header: "Harga Total", value: "priceTotal" }
            ],
            onRemove: function() {
                this.bind();
            }
        };
    }

    @computedFrom("data._id")
    get isEdit() {
        return (this.data._id || '').toString() != '';
    }

    bind() {
        if (this.data) {
            this.flag = true;
            if (this.data.correctionType == "Harga Satuan")
                this.pricePerUnitCorrectionReadOnly = false;
            else if (this.data.correctionType == "Harga Total")
                this.pricePerUnitCorrectionReadOnly = true;
        }
        else
            this.flag = false;


        if(!this.readOnly) {
            this.UpoItem.columns.push({ header: "" });
            
        }
    }

    setItems(_paymentOrder) {
        var _items = []
        for (var unitPaymentOrder of _paymentOrder.items) {

            for (var unitReceiptNoteItem of unitPaymentOrder.unitReceiptNote.items) {

                var unitPaymentPriceCorrectionNoteItem = {};
                unitPaymentPriceCorrectionNoteItem.purchaseOrder = unitReceiptNoteItem.purchaseOrder;
                unitPaymentPriceCorrectionNoteItem.purchaseOrderId = unitReceiptNoteItem.purchaseOrderId;
                unitPaymentPriceCorrectionNoteItem.product = unitReceiptNoteItem.product;
                unitPaymentPriceCorrectionNoteItem.productId = unitReceiptNoteItem.product._id;
                unitPaymentPriceCorrectionNoteItem.uom = unitReceiptNoteItem.deliveredUom;
                unitPaymentPriceCorrectionNoteItem.uomId = unitReceiptNoteItem.deliveredUom._id;
                unitPaymentPriceCorrectionNoteItem.currency = unitReceiptNoteItem.currency;
                unitPaymentPriceCorrectionNoteItem.currencyRate = unitReceiptNoteItem.currencyRate;
                unitPaymentPriceCorrectionNoteItem.unitReceiptNoteNo = unitPaymentOrder.unitReceiptNote.no;
                if (unitReceiptNoteItem.correction) {
                    if (unitReceiptNoteItem.correction.length > 0) {
                        var _qty = unitReceiptNoteItem.correction
                            .map((correction) => {
                                if (correction.correctionRemark === "Koreksi Jumlah") {
                                    return correction.correctionQuantity;
                                }
                                else {
                                    return 0;
                                }
                            })
                            .reduce((prev, curr, index) => {
                                return prev + curr;
                            }, 0);

                        unitPaymentPriceCorrectionNoteItem.quantity = unitReceiptNoteItem.deliveredQuantity - _qty;
                        unitPaymentPriceCorrectionNoteItem.pricePerUnit = unitReceiptNoteItem.correction[unitReceiptNoteItem.correction.length - 1].correctionPricePerUnit;
                        unitPaymentPriceCorrectionNoteItem.priceTotal = unitReceiptNoteItem.correction[unitReceiptNoteItem.correction.length - 1].correctionPriceTotal;
                    } else {
                        unitPaymentPriceCorrectionNoteItem.quantity = unitReceiptNoteItem.deliveredQuantity;
                        unitPaymentPriceCorrectionNoteItem.pricePerUnit = unitReceiptNoteItem.pricePerDealUnit;
                        unitPaymentPriceCorrectionNoteItem.priceTotal = unitReceiptNoteItem.pricePerDealUnit * unitReceiptNoteItem.deliveredQuantity;
                    }
                } else {
                    unitPaymentPriceCorrectionNoteItem.quantity = unitReceiptNoteItem.deliveredQuantity;
                    unitPaymentPriceCorrectionNoteItem.pricePerUnit = unitReceiptNoteItem.pricePerDealUnit;
                    unitPaymentPriceCorrectionNoteItem.priceTotal = unitReceiptNoteItem.pricePerDealUnit * unitReceiptNoteItem.deliveredQuantity;
                }

                _items.push(unitPaymentPriceCorrectionNoteItem);
            }
        }
        this.data.items = _items;
        this.resetErrorItems();
    }

    unitPaymentOrderChanged(e) {
        var selectedPaymentOrder = e.detail;
        if (selectedPaymentOrder && !this.readOnly) {
            if (!this.readOnly)
                this.data.items = [];
            this.data.unitPaymentOrderId = selectedPaymentOrder._id;
            this.setItems(selectedPaymentOrder);
        }
        else {
            this.data.items = [];
        }
    }

    correctionTypeChanged(e) {
        if (e.srcElement) {
            if (e.srcElement.value) {
                this.data.correctionType = e.srcElement.value;
                if (this.data.correctionType == "Harga Satuan")
                    this.pricePerUnitCorrectionReadOnly = false;
                else if (this.data.correctionType == "Harga Total")
                    this.pricePerUnitCorrectionReadOnly = true;
                if (this.data.unitPaymentOrderId && this.data.unitPaymentOrder) {
                    if (this.data.unitPaymentOrder.items)
                        this.setItems(this.data.unitPaymentOrder);
                }
            }
        }
    }

    resetErrorItems() {
        if (this.error) {
            if (this.error.items) {
                this.error.items = [];
            }
        }
    }
} 