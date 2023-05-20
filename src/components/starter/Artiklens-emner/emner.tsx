import { component$ } from "@builder.io/qwik";
import { InfoButton } from "../icons/info_button";

const tags = [
  { label: "Forældreskab", id: "https://jyllands-posten.dk/tags/emneord.jp.dk,2017:foraeldreskab" },
  { label: "Familieliv", id: "https://jyllands-posten.dk/tags/emneord.jp.dk,2017:familieliv" },
  { label: "Efterskole", id: "https://jyllands-posten.dk/tags/emneord.jp.dk,2017:efterskole" },
  {
    label: "Børneopdragelse",
    id: "https://jyllands-posten.dk/tags/emneord.jp.dk,2017:boerneopdragelse",
  },
];

export default component$(() => {
  return (
    <main>
      <section class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400">
        <div class="md:col-span-3">
          <div class="text-lg md:text-lg font-bold break-normal max-w-2xl px-4 md:px-6 justify-start uppercase text-primary">
            <p class="flex flex-wrap gap-x-2 items-center sm:pb-2">
              Artiklens emner
              <a href="/">
                <InfoButton />
              </a>
            </p>
          </div>

          <div class="px-4 md:px-6 justify-start text-center md:text-left pb-0.5 md:pb-6"></div>
        </div>

        <ul class="flex flex-col md:flex-col md:divide-y justify-end md:col-span-9">
          <ul class="flex flex-wrap flex-col sm:flex-row justify-center md:justify-start mx-2 md:mx-8">
            {tags.map((tag) => (
              <li
                class="py-2 flex flex-row items-center justify-center flex-wrap"
                key={tag.id}
              >
                <div class="w-full block sm:hidden py-1 pb-5">
                  <hr class="h-0.5 bg-gray-400" />
                </div>
                <a
                  class="bg-transparent underline text-black sm:py-2 px-4 rounded uppercase tracking-widest text-sm grow hover:font-semibold"
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
          <div class="w-full block sm:hidden">
            <hr class="h-0.5 my-4 bg-gray-400 mx-2" />
          </div>
          <div class="lg:px-10 py-4 text-center md:text-right">
            <a
              class="bg-transparent hover:bg-secondary text-secondary hover:text-white md:py-1.5 md:px-10 py-2.5 px-16 border 
            border-secondary hover:border-transparent rounded uppercase text-xs font-semibold"
              href="/pages/tag_page"
            >
              Se de emner du følger
            </a>
          </div>
        </ul>
      </section>

      <div class="w-full hidden sm:block">
        <hr class="h-0.5 my-4 bg-black border-0" />
      </div>
    </main>
  );
});
