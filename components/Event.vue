<template>
  <article v-bind:class="talk.events.some(e => e.type === 'Conference') && 'main'">
    <section>
      <h1>
        {{talk.title}}
      </h1>
      <div
        v-for="event in talk.events"
        v-bind:key="event.date"
        v-bind:event="event"
        class="event"
      >
        <a v-bind:href="event.link">{{event.name}}</a>
        <span v-if="event.type === 'Conference'">🔥</span> -
        <span class="info"><time>{{new Date(event.date).toLocaleDateString('it-IT')}}</time>
        in {{event.city}}</span>

        <a class="icon" v-if="event.video" v-bind:href="event.video">
          <img src="~/assets/img/video.svg">
        </a>
        <a class="icon" v-if="event.slides" v-bind:href="event.slides">
          <img src="~/assets/img/slides.svg">
        </a>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  props: ["talk"]
};
</script>

<style scoped>
a {
  color: inherit;
}

article {
  --main-color: #03a9f4;

  padding: 25px 20px 30px;
  border-bottom: 1px solid #f4f4f4;
  display: grid;
  align-items: center;
  border-left: 10px solid var(--main-color);
  transform: translateX(-5px);
  line-height: 1.4;
  transition: all ease 200ms;
}

article:hover {
  transform: translateX(0);
}

h1 {
  font-weight: normal;
  font-size: 32px;
  line-height: 1.1;
  margin: 0 0 10px;
  color: var(--main-color, currentColor);
}

.main {
  --main-color: #f44336;
}

.info {
  display: inline-block;
}

.event {
  display: flex;
  align-items: center;
  line-height: 1.7;
}

.icon {
  margin-left: 10px;
}

.icon img {
  height: 1em;
}

@media (min-width: 768px) {
  article {
    grid-template-columns: 1fr auto;
  }

  .icons {
    margin-top: 0;
  }
}
</style>
