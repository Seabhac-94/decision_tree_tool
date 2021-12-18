<template>
  <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="js-step-container">
            <div class="bc-container">
              <button v-for="item in previous" v-bind:key="item.label" @click="goBack($event, item.label)" class="btn breadcrumb btn-outline-primary" type="button">{{item.label}}</button>
            </div>
            <div class="card-node">
                <div class="card-title">{{ this.visible.title }}</div>
                <p>{{ this.visible.description }}</p>
                <div v-for="(item, label) in [visible]" :key="item.title" :data-step-id="label" class="card mb-2 js-step-card" >
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
      object: {},
      visible: {},
      previous: [] // would be nice to loopf through this to create breadcrumbs (in the end is same function to be used for each div)

    };
  },
  methods: {

    loadData(branch, id){
        let decisionTreeData = this.object;

        return decisionTreeData[branch][id];

    },

    getSubObject(object, branch) {

        let final = null;

        for(let i = 0; i < object.children.length; i++) {
            let subObject = object.children[i];

            if (subObject.label == branch) {
                final = subObject;
                break;

            }
        }
        return final;
    },

    // Logging function
    logCurrent() {
        console.log("Current Node data");
        console.log("Visible", this.visible);
        console.log("Previous", this.previous);
    },


    getPrevious(previous) {

        let sub = this.object;
        let ind =  this.previous.findIndex(x => x.label === previous);
        let temp = this.previous.slice(0, ind +1);
        

        for (let i=0; i<temp.length; i++) {
            for ( let j=0; j<sub.children.length; j++) {
                if(sub.children[j].label == temp[i].label){
                    sub = sub.children[j];
                    break;
                }
            }
        }
        this.previous.length = ind;

        return sub;
    },


    loadStep(btn, nextStep) {

      this.previous.push({'label': this.visible.label });
      this.visible = this.getSubObject(this.visible, nextStep);

      //this.logCurrent();
    },


    goBack(event, previous) { //btn param

        this.visible = this.getPrevious(previous);

    }

  }

};
</script>

<style>

.card {
  padding: 1.5rem;
}

.card-node {
  padding: 2rem;
  border: solid 2px #0abf53;
  border-radius: 0.8rem;
  margin: 0.5rem;

}

.card-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 4rem;
}


</style>