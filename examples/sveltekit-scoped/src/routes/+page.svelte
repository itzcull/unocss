<script lang="ts">
  import Button from "$lib/Button.svelte";
  import ClsxDemo from "$lib/ClsxDemo.svelte";
  import Counter from "$lib/Counter.svelte";
  import Forms from "$lib/Forms.svelte";
  import Logos from "./Logos.svelte";
  import Prose from "./Prose.svelte";
  import RightToLeftDependent from "./RightToLeftDependent.svelte";

  let red = false;
  let rtl = true;
</script>

<div class="p-1em my-2px mx-auto">
  <h1
    class="animate-bounce color-#ff3e00 dark:color-white uppercase text-5xl fw-100 my-2rem mx-auto"
  >
  SvelteKit + UnoCSS Scoped!
  </h1>

  <Logos />

  <p class="mt-10 font-mono">.font-mono is set to Fira Code => with nice ligatures (preset-web-fonts)</p>

  <Prose />

  <div class="my-15">
    <div
      class:bg-red-400={red}
      class:bg-gray={!red}
      class="text-white p-3 rounded mb-3">
      My BG Color should change
    </div>
    <Button onclick={() => (red = !red)}>Change BG Color: {red ? "Gray" : "Red"}</Button>
  </div>

  <div
    class="bg-gray-500 bg-opacity-15 shadow-lg p-2 mb-3"
    dir={rtl ? "rtl" : "ltr"}
  >
    <RightToLeftDependent />
  </div>
  <div class="mb-10">
    <Button onclick={() => (rtl = !rtl)}>Toggle direction: {rtl ? "Right-to-left" : "Left-to-right"}</Button>
  </div>

  <Counter />

  <div class="my-5 border"></div>

  <Forms />

  <div class="my-5 border"></div>

  <ClsxDemo />

  <div class="corner">Fixed</div>
</div>

<style>
  .corner {
    --at-apply: fixed flex left-2 bottom-2 md:left-6 md:bottom-6 bg-white dark:bg-black p-1;
  }
</style>
