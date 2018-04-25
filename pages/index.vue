<template>
  <div>
    <event
      v-for="event in events"
      v-bind:key="event.date"
      v-bind:event="event"
    />
  </div>
</template>

<script>
import events from "../events.json";
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
      events: events.sort((a, b) => -1 * a.date.localeCompare(b.date))
    };
  }
};
</script>
