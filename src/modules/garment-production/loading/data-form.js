import { bindable, inject, computedFrom } from "aurelia-framework";
import { Service } from "./service";

const UnitLoader = require('../../../loader/garment-units-loader');
const SewingDOLoader = require('../../../loader/garment-sewing-do-loader');

@inject(Service,)
export class DataForm {
    @bindable readOnly = false;
    @bindable isEdit = false;
    @bindable title;
    @bindable data = {};
    // @bindable error = {};
    @bindable selectedSewingDO;
    @bindable itemOptions = {};

    constructor(service) {
        this.service = service;
    }

    formOptions = {
        cancelText: "Kembali",
        saveText: "Simpan",
        deleteText: "Hapus",
        editText: "Ubah"
    };

    controlOptions = {
        label: {
            length: 2
        },
        control: {
            length: 5
        }
    };


    itemsColumns = [""];

    @computedFrom("data.Unit")
    get preparingFilter() {
        this.selectedPreparing = null;
        if (this.data.Unit) {
            return {
                UnitId: this.data.Unit.Id
            };
        } else {
            return {
                UnitId: 0
            };
        }
    }

    bind(context) {
        this.context = context;
        this.data = this.context.data;
        this.error = this.context.error;

        this.itemOptions = {
            isEdit: this.isEdit,
            checkedAll: true
        }

        if (this.data && this.data.Items) {
            this.data.Items.forEach(
                item => {
                    item.IsSave = true;
                }
            );
        }
    }

    unitView = (unit) => {
        return `${unit.Code} - ${unit.Name}`;
    }

    get unitLoader() {
        return UnitLoader;
    }

    get sewingDOLoader() {
        return SewingDOLoader;
    }

    async selectedSewingDOChanged(newValue, oldValue){
        if(newValue) {
            console.log(newValue)
            this.context.error.Items = [];
            this.data.RONo = newValue.RONo;
            this.data.Article = newValue.Article;
            this.data.Comodity= newValue.Comodity;
            this.data.UnitFrom=newValue.Unit;
            this.data.SewingDOId=newValue.Id;
            this.data.SewingDONo=newValue.SewingDONo;
            var items=[];
            for(var item of newValue.Items){
                var a={};
                a.Product= item.Product;
                a.Uom=item.Uom;
                a.DesignColor=item.DesignColor;
                a.Color=item.Color;
                a.Size=item.Size;
                a.Quantity=item.RemainingQuantity;
                a.SewingDORemainingQuantity=item.RemainingQuantity;
                a.IsSave=true;
                a.SewingDOItemId=item.Id;
                this.data.Items.push(a);
            }
        }
        else {
            this.context.selectedSewingDOViewModel.editorValue = "";
            this.data.RONo = null;
            this.data.Article = null;
            this.data.Comodity=null;
            this.data.Items = [];
        }
    }
    itemsInfo = {
        columns: [
            "Kode Barang",
            "Keterangan",
            "Size",
            "Jumlah",
            "Satuan",
            "Warna",
        ]
    }
}