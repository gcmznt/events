<template>
  <div>
    <event
      v-for="talk in talks"
      v-bind:key="talk.title"
      v-bind:talk="talk"
    />
  </div>
</template>

<script>
import talks from "../events.json";
import Event from "../components/Event.vue";

export default {
  head: {
    title: "Events"
  },
  components: {
    Event
  },
  data() {
    return {
      talks: talks.sort(
        (a, b) =>
          Math.max(...b.events.map(e => new Date(e.date))) -
          Math.max(...a.events.map(e => new Date(e.date)))
      )
    };
  }
};
</script>
