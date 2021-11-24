<template>
    <div id="app" class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="js-step-container">
            <h3> "WASAP" </h3>

            <!-- <div v-for="(item, index) in steps" :key="item.question" :data-step-id="index" class="card mb-2 js-step-card" :class="isLastCard(index)"> -->
              <!-- <div class="card-body"> -->
                <!-- <div class="card-title">{{ item.question }}</div> -->
                <!-- <StepBtn :answers="item.answers" @next-step="loadStep" /> -->
              <!-- </div> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import getDecisionTreeData from './Datatree.js'

export default {
  name: 'HelloWorld',
  //components: {
    //StepBtn
  //},
  created: function () {
   this.steps.push(getDecisionTreeData("higher", 1));
  },
  computed: {
    randomNumber: function () {
      return Math.floor(Math.random() * 1000);
    }
  },
  data() {
    return {
      steps: [],
      stepCounter: 1
    };
  },
  methods: {
    loadStep(btn, nextStep, lastStep) {
      let card = btn.closest(".js-step-card"),
        stepCount = parseInt(card.dataset.stepId) + 1,
        classes = card.classList,
        currentCard = false;

      if (classes.contains("current")) {
        classes.remove("current");
        currentCard = true;
      }

      if (!lastStep && currentCard) {
       this.steps.push(getDecisionTreeData("higher", nextStep));
      } else if (!lastStep && !currentCard) {
        //reset steps to clicked
        this.steps.length = stepCount;
        this.stepCounter = stepCount;
        this.steps.push(getDecisionTreeData("higher", nextStep));
      } else {
        alert("Last Step");
      }
    },
    isLastCard(index) {
      if (this.steps.length - 1 === index) {
        return "current";
      }
    }
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
