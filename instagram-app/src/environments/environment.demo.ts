export const environment = {
    production: false,
  
    auth: {
        CLIENT_ID: "ybXGcbjxtmNBZ0xt5e0AZs4uF8CJJlZT",
        CLIENT_DOMAIN: "oauth.medeintegra.dev",
        AUDIENCE: "https://demo.medeintegra.dev",
        IAM_EXCHANGE_URL:
          "https://iam.demo.medeintegra.dev/emrstudio/token/exchange",
        CONNECTION: "MEDEX-DEMO",
    },
    
    medexIam: {
      url: "https://iam.demo.medeintegra.dev",
  
      clients: {
        add: "/admin/clients/add",
        list: "/admin/clients",
        get: "/admin/clients/client/",
        delete: "/admin/clients/client/"
      },
      facilities: {
        add: "/admin/facilities/add",
        list: "/admin/facilities",
        get: "/admin/facilities/"
      },
      specialities: {
        list:"/admin/specialities",
        add:"/admin/specialities/add",
      },
      resources: {
        add: "/admin/resources/add",
        list: "/admin/resources",
        updateAppScopes: "/admin/resources/appScopes",
        getResource: "/resources/get"
      },
      employers:{
        list:"/admin/employers",
        add:"/admin/employers/add",
      },
      preferences: {
        add: "/preferences/add",
        get: "/preferences",
        getByPreferenceType: "/preferences/preferenceType/"
      },
      preferenceType: {
        list:"/admin/preference-types",
        add:"/admin/preference-types/add",
      },
      taxes: {
        add: "/admin/taxes/add",
        list: "/admin/taxes"
      },
      taxGroups: {
        add: "/admin/taxGroups/add",
        list: "/admin/taxGroups"
      },
      skuGroups: {
        add: "/admin/sku/groups/add",
        list: "/admin/sku/groups"
      },
      skuSubGroups: {
        add: "/admin/sku/subGroups/add",
        list: "/admin/sku/subGroups"
      },
      sampleTypes: {
        add: "/admin/sample/types/add",
        list: "/admin/sample/types"
      },
      departments: {
        add: "/admin/departments/add",
        list: "/admin/departments"
      },
      skus: {
        add: "/admin/skus/add",
        list: "/admin/skus",
        search: "/admin/skus/search"
      },
      rateCards: {
        add: "/admin/ratecards/add",
        list: "/admin/ratecards",
        delete: "/admin/ratecards/rateCardId/",
        deleteSkus: "/admin/ratecards/rateCardId/"
      },
      sponsorAgreements: {
        add: "/admin/sponsor/agreements/add",
        list: "/admin/sponsor/agreements",
        getAgreementPackages: "/admin/sponsor/agreements/"
      },
      sponsorPackages: {
        add: "/admin/sponsor/packages/add",
        list: "/admin/sponsor/packages",
        delete: "/admin/sponsor/packages/",
        update: "/admin/sponsor/packages/"
      },
      discountPlans: {
        add: "/admin/discount/plans/add",
        list: "/admin/discount/plans"
      },
      referrals: {
        add: "/admin/referrals/add",
        list: "/admin/referrals"
      },
      customFields: {
        add: "/admin/custom/fields/add",
        get: "/admin/custom/fields/masterType/"
      },
      consultationRatecards: {
        add: "/admin/consultation/ratecards/add",
        list: "/admin/consultation/ratecards"
      },
    },
  
    medexBlob: {
      url: "https://blob.play.medeintegra.dev",
      path: {
        upload: "/blob/upload"
      }
    },
  };