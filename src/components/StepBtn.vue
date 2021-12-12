<template>
  <div class="d-flex gap-2">
    <button v-for="(item, label) in answers" :key="label" @click="btnClick($event, item, index)" :class="{active:index == btnSelected}" class="btn btn-outline-primary" type="button">{{ item.label }}</button>
  </div>
</template>

<script>
export default {
  name: "StepBtn",
  emits: ["next-step"],
  props: ["answers"],
  data() {
    return {
      btnSelected: undefined
    };
  },
  methods: {
    btnClick(event, item, index) {
      let clickedBtn = event.target,
        //activeBtns = clickedBtn.parentNode.getElementsByClassName("active"),
        lastStep = false,
        ids = item.label;
        //console.log(ids);

      this.btnSelected = index;

      //is it the last step - Not using it for now (Could be used for redirect)
      if (item.label !== undefined) {
        lastStep = true;
        ids = item.label;

      }

      //pass next step id to parent component
      this.$emit("next-step", clickedBtn, ids, lastStep);

    }
  }
}
</script>

