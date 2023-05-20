import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { InfoButton } from "~/components/starter/icons/info_button";

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
    <div>
      <h1 class="justify-start uppercase flex px-6 font-semibold text-lg 2xl:px-44">
        Emner du følger
      </h1>
      <div class="w-full invisible md:visible">
        <hr class="h-1 my-8 md:my-12 bg-black border-0" />
      </div>

      <main class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400 container mx-auto">
        <div class="md:col-span-3">
          {/* Desktop */}
          <div class="font-serif text-2xl font-black break-normal max-w-2xl px-4 md:px-6 justify-start hidden md:block">
            Emner du følger
          </div>
          {/* Mobile */}
          <div class="font-serif text-2xl font-bold break-normal max-w-2xl text-center px-4 md:px-6 justify-start block md:hidden">
            Nyt fra emner du følger
          </div>
          <div class="px-4 md:px-6 justify-start text-center md:text-left pb-3 md:pb-0">
            Seneste 48 timer
          </div>
        </div>

        <ul class="flex flex-col md:flex-col md:divide-y justify-end md:col-span-9">
          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0 mx-2" />
          </div>

          <li class="py-4 mx-4">
            {/* Article "id": 15275559 */}
            <a class="flex" href="/">
              <div class="grow">
                <div class="pb-2 md:pb-1 text-xs">
                  <time>15:47 |</time>
                  <nobr class="text-primary font-semibold uppercase">
                    {" "}
                    Forældreskab{" "}
                  </nobr>
                </div>

                <div class="flex flex-row justify-between border-r font-serif pr-5 font-semibold">
                  {" "}
                  Forstandere taler om, at der er noget, forældrene har glemt{" "}
                </div>
              </div>
              <img
                class="w-40 pt-2"
                width="320"
                height="213"
                src="https://billeder.jyllands-posten.dk/pictures/image/15313307/kfxrrl/ALTERNATES/e-free/efterskoler-kaemper-med-pyldrede-foraeldre"
              />
            </a>
          </li>

          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0 mx-2" />
          </div>

          <li class="pt-6 pb-4 mx-4">
            {/* Article "id": 15279010 */}
            <a
              class="flex"
              href="https://jyllands-posten.dk/international/europa/ECE15279010/granater-fra-sovjettiden-regner-ned-over-bakhmut/"
            >
              <div class="grow">
                <div class="pb-2 md:pb-1 text-xs">
                  <time>15:47 |</time>
                  <nobr class="text-primary font-semibold uppercase">
                    {" "}
                    Krigen i Ukraine{" "}
                  </nobr>
                </div>
                <div class="flex flex-row justify-between border-r font-serif pr-5 font-semibold">
                  {" "}
                  Manglen på granater er ved at være mærkbar på begge sider i
                  Ukraine{" "}
                </div>
              </div>
              <img
                class="w-40 pt-2"
                src="https://billeder.jyllands-posten.dk/pictures/image/15044995/t3o5s8/ALTERNATES/e-free/artilleri-donbas"
              />
            </a>
          </li>

          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0 mx-2" />
          </div>

          <li class="py-4 mx-4">
            {/* Article "id": 15273987 */}
            <a
              class="flex"
              href="https://jyllands-posten.dk/sport/fodbold/ECE15273987/lige-netop-dette-nederlag-gjorde-ekstra-ondt-for-kent-nielsen-og-co/"
            >
              <div class="grow">
                <div class="pb-2 md:pb-1 text-xs">
                  <time>15:47 |</time>
                  <nobr class="text-primary font-semibold uppercase">
                    {" "}
                    Sport{" "}
                  </nobr>
                </div>
                <div class="flex flex-row justify-between border-r font-serif pr-5 font-semibold">
                  {" "}
                  Lige netop dette nederlag gjorde ekstra ondt for Kent Nielsen
                  og co.{" "}
                </div>
              </div>
              <img
                class="w-40 pt-2"
                src="https://billeder.jyllands-posten.dk/pictures/image/15316063/js6a7z/ALTERNATES/e-free/superliga-broendby---silkeborg"
              />
            </a>
          </li>

          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0 mx-2" />
          </div>

          <li class="py-4 mx-4">
            {/* Article "id": 15316002 */}
            <a
              class="flex"
              href="https://jyllands-posten.dk/politik/ECE15316002/eksperter-jon-stephensens-paastaaede-forseelse-er-ikke-grov-nok-til-en-politianmeldelse/"
            >
              <div class="grow">
                <div class="pb-2 md:pb-1 text-xs">
                  <time>15:47 |</time>
                  <nobr class="text-primary font-semibold uppercase">
                    {" "}
                    Politik{" "}
                  </nobr>
                </div>
                <div class="flex flex-row justify-between border-r font-serif pr-5 font-semibold">
                  {" "}
                  »Hvis Jon Stephensen havde trukket 5 mio. kr. ud, vil jeg tro,
                  at bestyrelsen var gået videre«{" "}
                </div>
              </div>
              <img
                class="w-40 pt-2"
                src="https://billeder.jyllands-posten.dk/pictures/image/15316021/mxx5t8/ALTERNATES/e-free/moderaternes-kulturordfoerer-jon-stephensen-moeder-pressen"
              />
            </a>
          </li>

          <div class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400 mx-2"></div>
          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0 mx-2" />
          </div>

          <div class="lg:px-10 items-center py-4 text-center md:text-right">
            <button
              class="bg-transparent hover:bg-secondary text-secondary hover:text-white md:py-1.5 md:px-10 py-2.5 px-24 border 
            border-secondary hover:border-transparent rounded uppercase text-xs font-semibold"
            >
              <a href="">Indlæs flere artikler</a>
            </button>
          </div>
        </ul>
      </main>

      <div class="w-full hidden md:block">
        <hr class="h-0.5 my-8 bg-black border-2 mx-2" />
      </div>

      {/* Emner du følger */}
      <section class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400 container mx-auto">
        <div class="md:col-span-3">
          {/* Desktop */}
          <div class="font-serif text-2xl font-semibold break-normal max-w-2xl px-4 md:px-6 justify-start hidden md:block">
            <p class="flex flex-wrap gap-x-2 items-center">
              Du følger
              <a href="">
                <InfoButton />
              </a>
            </p>
          </div>

          {/* Mobile */}
          <div class="font-serif text-2xl font-bold break-normal max-w-2xl px-4 md:px-6 pt-10 md:pt-1 sm:pb-3 block md:hidden">
            <p class="flex flex-wrap gap-x-2 items-center justify-center">
              Emner du følger
              <a href="">
                <InfoButton />
              </a>
            </p>
          </div>

          <div class="px-4 md:px-6 justify-start text-center md:text-left md:pb-3"></div>
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
                  class="bg-secondary flex md:flex-row hover:bg-primary text-white hover:text-white 
                text-xs py-2 md:py-1 px-3 border border-secondary hover:border-transparent rounded uppercase tracking-widest no-underline"
                >
                  Følger
                </button>
              </li>
            ))}
          </ul>
          <div class="w-full block sm:hidden">
            <hr class="h-0.5 my-4 bg-gray-400 mx-2" />
          </div>
          <div class="lg:px-8 py-4 text-center md:text-right">
            <a
              class="bg-transparent hover:bg-secondary text-secondary hover:text-white md:py-1.5 md:px-10 py-2.5 px-16 border 
            border-secondary hover:border-transparent rounded uppercase text-xs font-semibold"
              href="/pages/tag_page"
            >
              Indlæs flere emner du følger
            </a>
          </div>
        </ul>
      </section>

      <div class="w-full hidden md:block">
        <hr class="h-0.5 my-8 bg-black border-2 mx-2 sm:mx-0" />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Jyllands-Posten - Emner du følger",
  meta: [
    {
      name: "description",
      content: "Jyllands-Posten - Emner du følger",
    },
  ],
};
