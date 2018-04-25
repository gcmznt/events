<template>
  <article v-bind:class="event.eventType">
    <section>
      <h1>
        {{event.title}}
      </h1>
      <div>
        <a v-bind:href="event.eventLink">{{event.event}}</a> -
        <span class="info"><time>{{new Date(event.date).toLocaleDateString('it-IT')}}</time>
        in {{event.city}}</span>
      </div>
    </section>
    <section class="icons">
      <a class="icon" v-if="event.video" v-bind:href="event.video">
        <img src="~/assets/img/video.svg">
      </a>
      <a class="icon" v-if="event.slides" v-bind:href="event.slides">
        <img src="~/assets/img/slides.svg">
      </a>
    </section>
  </article>
</template>

<script>
export default {
  props: ["event"]
};
</script>

<style scoped>
a {
  color: inherit;
}

article {
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
  color: var(--main-color, currentColor);
  line-height: 1.1;
  margin: 0 0 10px;
}

.Conference {
  --main-color: #f44336;
}

.Meetup {
  --main-color: #03a9f4;
}

.info {
  display: inline-block;
}

.icons {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.icon {
  width: 40px;
  margin-right: 10px;
  background: var(--main-color, currentColor);
  background-clip: content-box;
}

.icon img {
  background-color: #fff;
  mix-blend-mode: lighten;
  display: block;
  width: 100%;
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
