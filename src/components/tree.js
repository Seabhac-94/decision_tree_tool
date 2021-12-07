
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
               "title": "Money runs the world, what version do you want?",
               "description": "Since the future is now the present, we can pay in several ways (e.g. the latest invention: Brain WiFi)",
               "children": [
                {
                 "label": "In-hand",
                 "title": "Is worth more a bird in your hand that 100 flying away",
                 "description": "true, true... Also since it's SANDBOX mode just use the test connection with the inhand acquirer. BYEEEEE",
                 "children": null
                },
                {
                 "label": "Debt",
                 "title": "AH... you like to be in debt",
                 "description": "2 things will follow you all your life. One is debt and the other one is death, but the only one that allows to be cheated is death",
                 "children": null
                },
                {
                 "label": "Brain Wifi",
                 "title": "Want to sell your favourite Pokemon ft Balenciaga NFT? ",
                 "description": "Remember that Brain wifi is only available in Europe, and it has a pretty simple setup: For northern countries, just buy the new iChip for 300$ (charger not included). For the following countries, iChip is not available: Spain, Madagascar, Russia. However, you can always get a router implanted in your skull and walk around enjoying your new BrainWifi! Of course since this is SANDBOX you don't need any special setup.",
                 "children": [
                  {
                   "label": "My market is not in Europe",
                   "title": "You don't live in one of the supported countries?",
                   "description": "That's too bad! You can always pay using stripe or something I heard some people still use that",
                   "children": null
                  },
                  {
                   "label": "NFT?",
                   "title": "What is an NFT?",
                   "description": "It stands for Not Fake Tacos (I think), and it's becoming the new promising financial future (not fake at all)",
                   "children": null
                  },
                  {
                   "label": "I'm not following anymore",
                   "title": "It's easy to get lost",
                   "description": "This is just a concept anyways, I needed to populate the object with something to show and I did not want to use a bunch of lorem ipsum.",
                   "children": null
                  }
                 ]
                },
                {
                 "label": "Orange",
                 "title": "Yes Orange",
                 "description": "I guess you can pay with a color? I was out of ideas idk",
                 "children": null
                }
               ]
              },
              {
               "label": "WIP",
               "title": "Work in Progress",
               "description": "lorem ipsum",
               "children": [
                {
                 "label": "WIP5",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "WIP3",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": [
                  {
                   "label": "WIP4",
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
                 "label": "WIP7",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "WIP8",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "WIP9",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "WIPWIP",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                },
                {
                 "label": "WIPWIPWIP",
                 "title": "",
                 "description": "lorem ipsum",
                 "children": null
                }
               ]
              },
              {
               "label": "WIP2",
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
           "title": "tHIS AiN'T tHUISBEZORGD CHaMP",
           "description": "SO don't even continue this way if you really want food",
           "children": [
            {
             "label": "I REALLY FOOD",
             "title": "You....Really food?",
             "description": "DO u english bruv",
             "children": null
            },
            {
             "label": "GIMME",
             "title": "Look I told you",
             "description": "There is no food here, just take a break and get a sandwich or something",
             "children": [
              {
               "label": "FOOD?",
               "title": "Dude",
               "description": "...",
               "children": null
              },
              {
               "label": "Pleeease?",
               "title": "Ah now we're talking",
               "description": "However there is no food I can send you I'm just a JSON",
               "children": null
              },
              {
               "label": "Orange",
               "title": "WHATEVER, I'm leaving",
               "description": "",
               "children": null
              },
              {
               "label": "Apple",
               "title": "WHATEVER, I'm leaving",
               "description": "",
               "children": null
              }
             ]
            },
            {
             "label": "Bananas",
             "title": "What?",
             "description": "I declare this option out of scope",
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
