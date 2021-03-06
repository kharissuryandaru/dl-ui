import {inject} from 'aurelia-framework';
import {Service} from "./service";
import {Router} from 'aurelia-router';

@inject(Router, Service)
export class List {
    context = ["Rincian"];
    columns = [
		{ field: "name", title: "Nama" },
		{ field: "email", title: "Email" },
		{ field: "phoneNumber", title: "Nomor Telepon" },
		{ field: "company.name", title: "Nama Perusahaan" },
		{ field: "jobTitle", title: "Pekerjaan" },
    ];

	constructor(router, service) {
        this.service = service;
        this.router = router;
    }

    loader = (info) => {
		var order = {};
		if (info.sort)
			order[info.sort] = info.order;

		var arg = {
			page: parseInt(info.offset / info.limit, 10) + 1,
			size: info.limit,
			keyword: info.search,
			order: order,
			select: ['firstName', 'lastName', 'email', 'phoneNumber', 'company.name', 'jobTitle']
		}

		return this.service.search(arg)
			.then(result => {
				result.data.map((data)=> {
					data.name = `${data.firstName} ${data.lastName}`;
				});

				return {
					total: result.info.total,
					data: result.data
				}
			});
    }

    contextCallback(event) {
		var arg = event.detail;
		var data = arg.data;
		switch (arg.name) {
			case "Rincian":
				this.router.navigateToRoute('view', { id: data._id });
				break;
		}
    }

    view(data) {
        this.router.navigateToRoute('view', { id: data._id });
    }

	create() {
		this.router.navigateToRoute('create');
	}
}
