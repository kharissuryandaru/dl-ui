module.exports = [
    {
        route: '/merchandiser/garment-pre-sales-contract',
        name: 'garment-pre-sales-contract',
        moduleId: './modules/merchandiser/garment-pre-sales-contract/index',
        nav: true,
        title: 'Pre Sales Contract - Garment',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/garment-purchase-request-master',
        name: 'purchase-request-master',
        moduleId: './modules/merchandiser/garment-purchase-request-master/index',
        nav: true,
        title: 'PR Master',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/approve-pr-master/kabag-md',
        name: 'approve-purchase-request-master',
        moduleId: './modules/merchandiser/approve-pr-master/index',
        nav: true,
        title: 'Approval PR Master - Kabag MD',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: "MD1"
        }
    },
    {
        route: '/merchandiser/approve-pr-master/kadiv-md',
        name: 'approve-purchase-request-master',
        moduleId: './modules/merchandiser/approve-pr-master/index',
        nav: true,
        title: 'Approval PR Master - Kadiv MD',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: "MD2"
        }
    },
    {
        route: '/merchandiser/approve-pr-master/ppic',
        name: 'approve-purchase-request-master',
        moduleId: './modules/merchandiser/approve-pr-master/index',
        nav: true,
        title: 'Approval PR Master - PPIC',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: "PPIC"
        }
    },
    {
        route: '/merchandiser/cost-calculation',
        name: 'cost-calculation',
        moduleId: './modules/merchandiser/cost-calculation/index',
        nav: true,
        title: 'Cost Calculation Export Garment',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/cost-calculation-approval/md',
        name: 'cost-calculation-approval-md',
        moduleId: './modules/merchandiser/cost-calculation-approval/index',
        nav: true,
        title: 'Cost Calculation Approval - MD',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: "md"
        }
    },
    {
        route: '/merchandiser/cost-calculation-approval/ie',
        name: 'cost-calculation-approval-ie',
        moduleId: './modules/merchandiser/cost-calculation-approval/index',
        nav: true,
        title: 'Cost Calculation Approval - IE',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: "ie"
        }
    },
    {
        route: '/merchandiser/budget-validation-purchasing',
        name: 'budget-validation-purchasing',
        moduleId: './modules/merchandiser/budget-validation-purchasing/index',
        nav: true,
        title: 'Budget Validation - Purchasing',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/budget-validation-ppic',
        name: 'budget-validation-ppic',
        moduleId: './modules/merchandiser/budget-validation-ppic/index',
        nav: true,
        title: 'Budget Validation - PPIC',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/garment-sales-contract',
        name: 'garment-sales-contract',
        moduleId: './modules/merchandiser/garment-sales-contract/index',
        nav: true,
        title: 'Sales Contract Per RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/ro-garment',
        name: 'ro-garment',
        moduleId: './modules/merchandiser/ro-garment/index',
        nav: true,
        title: 'RO Export Garment',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/ro-sample-validation',
        name: 'ro-sample-validation',
        moduleId: './modules/merchandiser/ro-sample-validation/index',
        nav: true,
        title: 'Validasi RO Sample',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/ro-validation-ppic',
        name: 'ro-validation-ppic',
        moduleId: './modules/merchandiser/ro-validation-ppic/index',
        nav: true,
        title: 'Validasi RO - PPIC',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/ro-acceptance',
        name: 'ro-acceptance',
        moduleId: './modules/merchandiser/ro-acceptance/index',
        nav: true,
        title: 'Penerimaan RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/ro-available',
        name: 'ro-available',
        moduleId: './modules/merchandiser/ro-available/index',
        nav: true,
        title: 'Kesiapan RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/ro-distribute',
        name: 'ro-distribute',
        moduleId: './modules/merchandiser/ro-distribute/index',
        nav: true,
        title: 'Distribusi RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/cost-calculation-copy',
        name: 'cost-calculation-copy',
        moduleId: './modules/merchandiser/cost-calculation/copy/index',
        nav: true,
        title: 'Copy Cost Calculation',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/garment-sales-contract-copy',
        name: 'garment-sales-contract-copy',
        moduleId: './modules/merchandiser/garment-sales-contract/copy/index',
        nav: true,
        title: 'Copy Sales Contract Per RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: 'merchandiser/monitoring-ro-job-order',
        name: 'merchandiser-monitoring-ro-job-order',
        moduleId: './modules/garment-purchasing/monitoring-ro-job-order/index',
        nav: true,
        title: 'Monitoring RO Job Order',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: {"C9": 1},
            iconClass: 'fa fa-dashboard'
        }
    }
];
