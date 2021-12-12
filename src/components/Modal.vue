<template>
  <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="js-step-container">
            <button @click="goBack($event, previous)" :class="{active:index == btnSelected}" class="btn backbtn btn-outline-primary" type="button"> Go Back </button>
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
   this.logCurrent();


  },
  data() {
    return {
      object: {},
      visible: {},
      previous: []

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

    nodeCheck(sub, branch) {

        let check = "None";
        for(let i = 0; i < sub.children.length; i++) {

            let child = sub.children[i];
            if (child.label == branch) {
                check = child.label;
                break;
            }
        }
        return check;
    },

    logCurrent() {
        console.log("Current State");
        console.log("Visible", this.visible);
        console.log("Previous", this.previous);
    },


    getPrevious() {

        let sub = this.object;
        for (let i=0; i<this.previous.length; i++) {
            for ( let j=0; j<sub.children.length; j++) {
                if(sub.children[j].label == this.previous[i].label){
                    sub = sub.children[j];
                    break;
                }
            }
        }
        this.previous.pop(this.previous.length);

        return sub;
    },

    loadStep(btn, nextStep) {
    this.previous.push({'label': this.visible.label });


      let card = btn.closest(".js-step-card"),
        classes = card.classList,
        currentCard = false;

      if (classes.contains("current")) {
        classes.remove("current");
        currentCard = true;

      }

      if (currentCard) {
        //let thing = document.getElementsByClassName('cardlab')[0].firstChild.data;
        this.visible = this.getSubObject(this.visible, nextStep);


        console.log("Click");



      } else if (!currentCard) {
        //reset steps to clicked

        this.visible = this.getSubObject(this.visible, nextStep);
        console.log("Forward - Selected child");


      } else {
        alert("Last Step");

      }
    this.logCurrent();

    },

    goBack(event, previous) { //btn param

      let card = document.getElementsByClassName('card')[0] ,
        classes = card.classList,
        currentCard = false;

      if (classes.contains("current")) {
        classes.remove("current");
        currentCard = true;

      }
      if (currentCard) {


        console.log("Go back - Now Reset");

        this.visible = this.getPrevious(this.object, previous);


      } else if (!currentCard) {
        // reset steps to clicked

        console.log("Go back - Last step of Previous array");

        this.visible = this.getPrevious(this.object, previous);

    }
    this.logCurrent();

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
  border: solid 2px #42b983;
  border-radius: 0.8rem;
  margin: 0.5rem;

}

.card-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 4rem;
}



</style>