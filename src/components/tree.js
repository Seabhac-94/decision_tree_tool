
export default {
  methods: {
    getFullObject(branch) {
      let decisionTreeData = {
        origin: {
         "label": "origin",
         "title": "Welcome to ADT, what do you want to do?",
         "description": "Here you can choose from options and start some flow",
         "children": [
          {
           "label": "Set up a payment method",
           "title": "Is this for PROD or SANDBOX?",
           "description": "It's important to know because youknow",
           "children": [
            {
             "label": "PROD",
             "title": "b",
             "description": "lorem ipsum",
             "children": [
              {
               "label": "Blue",
               "title": "",
               "question": null,
               "children": null
              },
              {
               "label": "Black",
               "title": "",
               "description": "lorem ipsum",
               "children": null
              },
              {
               "label": "White",
               "title": "",
               "description": "lorem ipsum",
               "children": null
              }
             ]
            },
            {
             "label": "SANDBOX",
             "title": "Select Payment Method",
             "description": "Ok so which payment method?",
             "children": [
              {
               "label": "Money",
               "title": "",
               "description": "lorem ipsum",
               "children": [
                {
                 "label": "In-hand",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "Debt",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "Brain Wifi",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": [
                  {
                   "label": "Rock band",
                   "title": "",
                   "description": "lorem ipsum",
                   "children": null
                  },
                  {
                   "label": "TV show",
                   "title": "",
                   "description": "lorem ipsum",
                   "children": null
                  },
                  {
                   "label": "No logo",
                   "title": "",
                   "description": "lorem ipsum",
                   "children": null
                  }
                 ]
                },
                {
                 "label": "Orange",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                }
               ]
              },
              {
               "label": "Hoodie",
               "title": "",
               "description": "lorem ipsum",
               "children": [
                {
                 "label": "Gray",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "Blue",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": [
                  {
                   "label": "TV show",
                   "title": "",
                   "description": "lorem ipsum",
                   "children": null
                  },
                  {
                   "label": "No logo",
                   "title": "",
                   "description": "lorem ipsum",
                   "children": null
                  }
                 ]
                },
                {
                 "label": "Green",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "Pink",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "Brown",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "Black",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "Red",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                }
               ]
              },
              {
               "label": "White",
               "title": "",
               "description": "lorem ipsum",
               "children": null
              }
             ]
            }
           ]
          },
          {
           "label": "Food",
           "title": "c",
           "description": "lorem ipsum",
           "children": [
            {
             "label": "Ramen noodles",
             "title": "",
             "description": "lorem ipsum",
             "children": null
            },
            {
             "label": "Soda pop",
             "title": "",
             "description": "lorem ipsum",
             "children": [
              {
               "label": "Cola",
               "title": "",
               "description": "lorem ipsum",
               "children": null
              },
              {
               "label": "Lemon",
               "title": "",
               "description": "lorem ipsum",
               "children": null
              },
              {
               "label": "Orange",
               "title": "",
               "description": "lorem ipsum",
               "children": null
              },
              {
               "label": "Apple",
               "title": "",
               "description": "lorem ipsum",
               "children": null
              }
             ]
            },
            {
             "label": "Bananas",
             "title": "",
             "description": "lorem ipsum",
             "children": null
            }
           ]
          }
         ]
        }
      };
      return decisionTreeData[branch]
    }
  }
};
