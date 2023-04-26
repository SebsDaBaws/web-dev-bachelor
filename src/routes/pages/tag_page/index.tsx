import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1 class="justify-start uppercase flex px-6 font-semibold text-lg">
        Emner du følger
      </h1>
      <div class="w-full invisible md:visible">
        <hr class="h-1 my-8 md:my-12 bg-black border-0" />
      </div>

      <main class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400">
        <div class="md:col-span-3">
          {/* Desktop */}
          <div class="font-serif text-2xl font-semibold break-normal max-w-2xl px-4 md:px-6 justify-start hidden md:block">
            Emner du følger
          </div>
          {/* Mobile */}
          <div class="font-serif text-2xl font-bold break-normal max-w-2xl text-center px-4 md:px-6 justify-start block md:hidden">
            Nyt fra emner du følger
          </div>
          <div class="px-4 md:px-6 justify-start text-center md:text-left pb-6 md:pb-0">
            Seneste 48 timer
          </div>
        </div>

        <ul class="flex flex-col md:flex-col md:divide-y justify-end md:col-span-9">
          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0" />
          </div>

          <li class="pt-6 pb-4 mx-4">
            {/* Article "id": 15279010 */}
            <a href="https://dev.jyllands-posten.dk/international/europa/ECE15279010/granater-fra-sovjettiden-regner-ned-over-bakhmut/">
              <div class="pb-2 md:pb-1 text-xs">
                <time>15:47 |</time>
                <nobr class="text-primary font-semibold uppercase">
                  {" "}
                  Krigen i Ukraine{" "}
                </nobr>
              </div>
              <div class="flex flex-row justify-between border-r font-serif">
                {" "}
                Manglen på granater er ved at være mærkbar på begge sider i
                Ukraine{" "}
              </div>
              <img
                class="w-40 pt-2 self-end"
                src="https://dev.billeder.jyllands-posten.dk/pictures/image/15044995/t3o5s8/ALTERNATES/master-free/artilleri-donbas"
              />
            </a>
          </li>

          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0" />
          </div>

          <li class="py-4 mx-4">
            {/* Article "id": 15275559 */}
            <a href="/">
              <div class="pb-2 md:pb-1 text-xs">
                <time>15:47 |</time>
                <nobr class="text-primary font-semibold uppercase">
                  {" "}
                  Skole & uddannelse{" "}
                </nobr>
              </div>
              <div class="flex flex-row justify-between border-r font-serif">
                {" "}
                Forstandere taler om, at der er noget, forældrene har glemt{" "}
              </div>
              <img
                class="w-40 pt-2"
                src="https://dev.billeder.jyllands-posten.dk/pictures/image/15313307/kfxrrl/ALTERNATES/master-free/efterskoler-kaemper-med-pyldrede-foraeldre"
              />
            </a>
          </li>

          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0" />
          </div>

          <li class="py-4 mx-4">
            {/* Article "id": 15273987 */}
            <a href="https://dev.jyllands-posten.dk/sport/fodbold/ECE15273987/lige-netop-dette-nederlag-gjorde-ekstra-ondt-for-kent-nielsen-og-co/">
              <div class="pb-2 md:pb-1 text-xs">
                <time>15:47 |</time>
                <nobr class="text-primary font-semibold uppercase">
                  {" "}
                  Sport{" "}
                </nobr>
              </div>
              <div class="flex flex-row justify-between border-r font-serif">
                {" "}
                Lige netop dette nederlag gjorde ekstra ondt for Kent Nielsen og
                co.{" "}
              </div>
              <img
                class="w-40 pt-2"
                src="https://dev.billeder.jyllands-posten.dk/pictures/image/15316063/js6a7z/ALTERNATES/master-free/superliga-broendby---silkeborg"
              />
            </a>
          </li>

          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0" />
          </div>

          <li class="py-4 mx-4">
            {/* Article "id": 15316002 */}
            <a href="https://dev.jyllands-posten.dk/politik/ECE15316002/eksperter-jon-stephensens-paastaaede-forseelse-er-ikke-grov-nok-til-en-politianmeldelse/">
              <div class="pb-2 md:pb-1 text-xs">
                <time>15:47 |</time>
                <nobr class="text-primary font-semibold uppercase">
                  {" "}
                  Politik{" "}
                </nobr>
              </div>
              <div class="flex flex-row justify-between border-r font-serif">
                {" "}
                »Hvis Jon Stephensen havde trukket 5 mio. kr. ud, vil jeg tro,
                at bestyrelsen var gået videre«{" "}
              </div>
              <img
                class="w-40 pt-2"
                src="https://dev.billeder.jyllands-posten.dk/pictures/image/15316021/mxx5t8/ALTERNATES/master-free/moderaternes-kulturordfoerer-jon-stephensen-moeder-pressen"
              />
            </a>
          </li>

          <div class="w-full block md:hidden">
            <hr class="h-1 my-1 bg-gray-400 border-0" />
          </div>

          <div class="px-4 items-center py-4">
            <button
              class="bg-transparent hover:bg-secondary text-secondary hover:text-white py-1.5 px-10 border 
            border-secondary hover:border-transparent rounded uppercase text-xs font-semibold"
            >
              <a href="">Indlæs flere artikler</a>
            </button>
          </div>
        </ul>
      </main>
    </div>
  );
});

// TODO: Slet hvis ikke bruges
export const head: DocumentHead = {
  title: "",
};