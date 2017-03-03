import {inject, Lazy} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';

@inject(Router, Service)
export class EditOutput {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }

    async activate(params) {
        var id = params.id;
        this.data = await this.service.getData(id);
    }

    view() {
        this.router.navigateToRoute('view', { id: this.data._id, code : this.data.code, no : this.data.no, machineId : this.data.machineId });
    }

    save() {
        this.data.isOutput = true;
        this.service.update(this.data)
            .then(result => {
                this.view();
            })
            .catch(e => {
                this.error = e;
            })
    }
}