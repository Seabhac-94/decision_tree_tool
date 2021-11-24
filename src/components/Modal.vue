<template>
  <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="js-step-container">
            <div v-for="(item, index) in steps" :key="item.question" :data-step-id="index" class="card mb-2 js-step-card" >
              <div class="card-body">
                <div class="card-title">{{ item.question }}</div>
                <StepBtn :answers="item.answers" @next-step="loadStep" />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>;

<script>
import DataTree from "./Datatree";
import StepBtn from './StepBtn.vue'

export default {
  name: "Test",
  components: {
    StepBtn
  },
  mixins: [DataTree],
  created: function () {
   this.steps.push(this.getDecisionTreeData("higher", 1));
  },
  data() {
    return {
      steps: [],
      stepCounter: 1
    };
  },
  methods: {
    loadStep(btn, nextStep) {
      let card = btn.closest(".js-step-card"),
        stepCount = parseInt(card.dataset.stepId) + 1,
        classes = card.classList,
        currentCard = false;

      if (classes.contains("current")) {
        classes.remove("current");
        currentCard = true;
      }

      if (currentCard) {
       this.steps.push(this.getDecisionTreeData("higher", nextStep));
      } else if (!currentCard) {
        //reset steps to clicked
        this.steps.length = stepCount;
        this.stepCounter = stepCount;
        this.steps.push(this.getDecisionTreeData("higher", nextStep));
      } else {
        alert("Last Step");
      }
    }
  }

};
</script>

<style>
.card {
  padding: 1.5rem;
  border: solid 1px #42b983;
  margin-bottom: 5rem;
}

</style>