
export default {
  methods: {
    getDecisionTreeData(branch, id) {
      let decisionTreeData = {
        k12: {
          1: {
            question: "How long until you intend to use/withdraw the funds?",
            answers: [
              {
                text: "0-5 years",
                next: 2
              },
              {
                text: "6+ years",
                next: 3
              }
            ]
          },
          2: {
            question:
              "How would you describe your risk tolerance as it pertains to investing?",
            lastStep: true,
            answers: [
              {
                text: "Low",
                solution: [21, 20, 12]
              },
              {
                text: "Medium",
                solution: [10, 19, 16]
              },
              {
                text: "High",
                solution: [18, 15, 14, 17]
              }
            ]
          },
          3: {
            question:
              "How would you describe your risk tolerance as it pertains to investing?",
            lastStep: true,
            answers: [
              {
                text: "Low",
                solution: [10, 19, 16]
              },
              {
                text: "Medium",
                solution: [18, 15, 14, 17]
              },
              {
                text: "High",
                solution: [11, 23, 9, 13, 22]
              }
            ]
          }
        },
        higher: {
          1: {
            question:
              "Question 1",
            answers: [
              {
                text: "Answer 1.1",
                next: 2
              },
              {
                text: "Answer 1.2",
                next: 3
              }
            ]
          },
          2: {
            question: "Question 2",
            lastStep: true,
            answers: [
              {
                text: "Answer 2.1",
                solution: [1, 2, 3]
              },
              {
                text: "Answer 2.2",
                solution: [3, 4, 5]
              },
              {
                text: "Answer 2.3",
                solution: [5, 6]
              }
            ]
          },
          3: {
            question: "Question 3",
            answers: [
              {
                text: "Answer 3.1",
                next: 4
              },
              {
                text: "Answer 3.2",
                next: 8
              },
              {
                text: "Answer 3.3",
                next: 12
              }
            ]
          },
          4: {
            question: "Question 4",
            answers: [
              {
                text: "Answer 4.1",
                next: 5
              },
              {
                text: "Answer 4.2",
                next: 6
              },
              {
                text: "Answer 4.3",
                next: 7
              }
            ]
          },
          5: {
            question: "Question 5",
            lastStep: true,
            answers: [
              {
                text: "No",
                solution: [21, 12, 20]
              },
              {
                text: "Yes",
                solution: [21, 12, 20, 24]
              }
            ]
          },
          6: {
            question: "Question 6",
            lastStep: true,
            answers: [
              {
                text: "No 6",
                solution: [19, 16, 10]
              },
              {
                text: "Yes 6",
                solution: [19, 16, 10, 24]
              }
            ]
          },
          7: {
            question: "Question 7",
            lastStep: true,
            answers: [
              {
                text: "No 7",
                solution: [18, 15, 16, 19]
              },
              {
                text: "Yes 7",
                solution: [18, 15, 16, 19, 24]
              }
            ]
          },
          8: {
            question: "Question 8",
            answers: [
              {
                text: "Answer 8.1",
                next: 9
              },
              {
                text: "Answer 8.2",
                next: 10
              },
              {
                text: "Answer 8.3",
                next: 11
              }
            ]
          },
          9: {
            question: "Question 9",
            lastStep: true,
            answers: [
              {
                text: "No 9",
                solution: [18, 15, 16, 19]
              },
              {
                text: "Yes 9",
                solution: [18, 15, 16, 19, 24]
              }
            ]
          },
          10: {
            question: "Question 10",
            lastStep: true,
            answers: [
              {
                text: "No 10",
                solution: [18, 15, 14, 17]
              },
              {
                text: "Yes 10",
                solution: [18, 15, 14, 17, 24]
              }
            ]
          },
          11: {
            question: "Question 11",
            lastStep: true,
            answers: [
              {
                text: "No 11",
                solution: [15, 14, 17]
              },
              {
                text: "Yes 11",
                solution: [14, 17, 24]
              }
            ]
          },
          12: {
            question: "Question 12",
            lastStep: true,
            answers: [
              {
                text: "Answer 12.1",
                solution: [18, 15, 14, 17]
              },
              {
                text: "Answer 12.2",
                solution: [11, 23, 9, 13, 22]
              },
              {
                text: "Answer 12.3",
                solution: [11, 23, 9, 13, 22]
              }
            ]
          }
        }
      };

      //alert(decisionTreeData[branch][id].question);

      return decisionTreeData[branch][id];
    },

    getFullObject(branch) {
      let decisionTreeData = {
        k12: {
          1: {
            question: "How long until you intend to use/withdraw the funds?",
            answers: [
              {
                text: "0-5 years",
                next: 2
              },
              {
                text: "6+ years",
                next: 3
              }
            ]
          },
          2: {
            question:
              "How would you describe your risk tolerance as it pertains to investing?",
            lastStep: true,
            answers: [
              {
                text: "Low",
                solution: [21, 20, 12]
              },
              {
                text: "Medium",
                solution: [10, 19, 16]
              },
              {
                text: "High",
                solution: [18, 15, 14, 17]
              }
            ]
          },
          3: {
            question:
              "How would you describe your risk tolerance as it pertains to investing?",
            lastStep: true,
            answers: [
              {
                text: "Low",
                solution: [10, 19, 16]
              },
              {
                text: "Medium",
                solution: [18, 15, 14, 17]
              },
              {
                text: "High",
                solution: [11, 23, 9, 13, 22]
              }
            ]
          }
        },
        higher: {
          1: {
            question:
              "Question 1",
            answers: [
              {
                text: "Answer 1.1",
                next: 2
              },
              {
                text: "Answer 1.2",
                next: 3
              }
            ]
          },
          2: {
            question: "Question 2",
            lastStep: true,
            answers: [
              {
                text: "Answer 2.1",
                solution: [1, 2, 3]
              },
              {
                text: "Answer 2.2",
                solution: [3, 4, 5]
              },
              {
                text: "Answer 2.3",
                solution: [5, 6]
              }
            ]
          },
          3: {
            question: "Question 3",
            answers: [
              {
                text: "Answer 3.1",
                next: 4
              },
              {
                text: "Answer 3.2",
                next: 8
              },
              {
                text: "Answer 3.3",
                next: 12
              }
            ]
          },
          4: {
            question: "Question 4",
            answers: [
              {
                text: "Answer 4.1",
                next: 5
              },
              {
                text: "Answer 4.2",
                next: 6
              },
              {
                text: "Answer 4.3",
                next: 7
              }
            ]
          },
          5: {
            question: "Question 5",
            lastStep: true,
            answers: [
              {
                text: "No",
                solution: [21, 12, 20]
              },
              {
                text: "Yes",
                solution: [21, 12, 20, 24]
              }
            ]
          },
          6: {
            question: "Question 6",
            lastStep: true,
            answers: [
              {
                text: "No 6",
                solution: [19, 16, 10]
              },
              {
                text: "Yes 6",
                solution: [19, 16, 10, 24]
              }
            ]
          },
          7: {
            question: "Question 7",
            lastStep: true,
            answers: [
              {
                text: "No 7",
                solution: [18, 15, 16, 19]
              },
              {
                text: "Yes 7",
                solution: [18, 15, 16, 19, 24]
              }
            ]
          },
          8: {
            question: "Question 8",
            answers: [
              {
                text: "Answer 8.1",
                next: 9
              },
              {
                text: "Answer 8.2",
                next: 10
              },
              {
                text: "Answer 8.3",
                next: 11
              }
            ]
          },
          9: {
            question: "Question 9",
            lastStep: true,
            answers: [
              {
                text: "No 9",
                solution: [18, 15, 16, 19]
              },
              {
                text: "Yes 9",
                solution: [18, 15, 16, 19, 24]
              }
            ]
          },
          10: {
            question: "Question 10",
            lastStep: true,
            answers: [
              {
                text: "No 10",
                solution: [18, 15, 14, 17]
              },
              {
                text: "Yes 10",
                solution: [18, 15, 14, 17, 24]
              }
            ]
          },
          11: {
            question: "Question 11",
            lastStep: true,
            answers: [
              {
                text: "No 11",
                solution: [15, 14, 17]
              },
              {
                text: "Yes 11",
                solution: [14, 17, 24]
              }
            ]
          },
          12: {
            question: "Question 12",
            lastStep: true,
            answers: [
              {
                text: "Answer 12.1",
                solution: [18, 15, 14, 17]
              },
              {
                text: "Answer 12.2",
                solution: [11, 23, 9, 13, 22]
              },
              {
                text: "Answer 12.3",
                solution: [11, 23, 9, 13, 22]
              }
            ]
          }
        }
      };
      return decisionTreeData[branch]
    }
  }
};