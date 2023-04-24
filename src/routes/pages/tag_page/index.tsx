import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <article class="section">
      <h1 class="justify-start flex uppercase px-3.5 font-semibold text-lg">
        Emner du følger
      </h1>

      <div class="w-full invisible md:visible">
        <hr class="h-1 my-12 bg-black border-0" />
      </div>


    </article>
  );
});

export const head: DocumentHead = {
  title: "",
};
