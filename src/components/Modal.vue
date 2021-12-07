<template>
  <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="js-step-container">
            <div v-for="(item, label) in [visible]" :key="item.title" :data-step-id="label" class="card mb-2 js-step-card" >
              <div class="card-body">
                <div class="card-title">{{ item.title }}</div>
                <p>{{ item.description }}</p>
                <StepBtn :answers="item.children" @next-step="loadStep" />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>;

<script>
import tree from "./tree";
import StepBtn from './StepBtn.vue'

export default {
  name: "Test",
  components: {
    StepBtn

  },
  mixins: [tree],
  created: function () {
   this.object = this.getFullObject("origin");
   this.visible = this.object;

  },
  data() {
    return {
      stepCounter: 1,
      object: {},
      visible: {}

    };
  },
  methods: {
    loadData(branch, id){
        let decisionTreeData = this.object;

        return decisionTreeData[branch][id];

    },

    getSubObject(object, branch) {
        let final = "";

        for(let i = 0; i < object.children.length; i++) {
            let subObject = object.children[i];

            if (subObject.label == branch) {
                final = subObject;
                break;

            }
        }
        return final;
    },

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
        this.visible = this.getSubObject(this.visible, nextStep);

      } else if (!currentCard) {
        //reset steps to clicked
        this.object.length = stepCount;
        this.stepCounter = stepCount;
        this.visible = this.getSubObject(this.visible, nextStep);

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