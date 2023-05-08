import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { InfoButton } from "../icons/info_button";

const tags = [
  { label: "Forældreskab", id: "emneord.jp.dk,2017:foraeldreskab" },
  { label: "Familieliv", id: "emneord.jp.dk,2017:familieliv" },
  { label: "Efterskole", id: "emneord.jp.dk,2017:efterskole" },
  {
    label: "Børneopdragelse",
    id: "emneord.jp.dk,2017:boerneopdragelse",
  },
];

export default component$(() => {
  return (
    <main>
      <section class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400">
        <div class="md:col-span-3">
          <div class="text-lg md:text-lg font-bold break-normal max-w-2xl px-4 md:px-6 justify-start uppercase text-primary">
            <p class="flex flex-wrap gap-x-2 items-center">
              Artiklens emner
              <a href="/">
                <InfoButton />
              </a>
            </p>
          </div>

          <div class="px-4 md:px-6 justify-start text-center md:text-left pb-2 md:pb-6"></div>
        </div>

        <ul class="flex flex-col md:flex-col md:divide-y justify-end md:col-span-9">
          <div class="w-full block md:hidden">
            <hr class="h-0.5 my-4 bg-black border-0" />
          </div>

          <ul class="flex flex-wrap flex-col sm:flex-row justify-center md:justify-start mx-2 md:mx-8">
            {tags.map((tag) => (
              <li
                class="py-2 flex flex-row items-center justify-center flex-wrap px-1"
                key={tag.id}
              >
                <a
                  class="bg-transparent underline text-black py-3 px-2 rounded uppercase tracking-widest text-sm grow hover:font-semibold"
                  href={tag.id}
                >
                  {tag.label}
                </a>
                <button
                  class="bg-white flex md:flex-row hover:bg-primary text-primary hover:text-white 
        text-xs py-2 md:py-1 px-3 border border-secondary hover:border-transparent rounded uppercase tracking-widest no-underline"
                >
                  Følg
                </button>
              </li>
            ))}
          </ul>
          <div class="text-center lg:px-10 pt-5">
            <a
              class="bg-transparent underline self:center text-black px-2 rounded tracking-widest text-sm py-5 lg:shrink-0 lg:pr-3 uppercase"
              href="/pages/tag_page"
            >
              Se de emner du følger
            </a>
          </div>
        </ul>
      </section>

      <div class="w-full">
        <hr class="h-0.5 my-4 bg-black border-0" />
      </div>
    </main>
  );
});
