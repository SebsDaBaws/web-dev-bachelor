import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1 class="justify-start uppercase flex px-3.5 font-semibold text-lg hidden md:block">
        Emner du følger
      </h1>
      <div class="w-full invisible md:visible">
        <hr class="h-1 my-12 bg-black border-0" />
      </div>

      <main class="md:grid md:grid-cols-12 md:divide-x md:divide-gray-400">
        <div class="md:col-span-3">
          <div class="font-serif text-2xl font-semibold break-normal max-w-2xl px-3.5 justify-start">
            Emner du følger
          </div>
          <div class="px-3.5 justify-start">Seneste 48 timer</div>

          
        </div>

        <ul class="flex flex-col md:flex-col md:divide-y justify-end md:col-span-9">
          <li class="pt-6 pb-4 mx-4">
            {/* "id": 15279010 */}
            <a href="https://dev.jyllands-posten.dk/international/europa/ECE15279010/granater-fra-sovjettiden-regner-ned-over-bakhmut/">
              <time>15:47</time>
              <div class="text-primary">- Krigen i Ukraine</div>
              <div class="flex flex-row justify-between border-r font-serif">
                {" "}
                Manglen på granater er ved at være mærkbar på begge sider i
                Ukraine{" "}
              </div>
              <img
                class="w-40 pt-2"
                src="https://dev.billeder.jyllands-posten.dk/pictures/image/15044995/t3o5s8/ALTERNATES/master-free/artilleri-donbas"
              />
            </a>
          </li>

          <li class="py-4 mx-4">
            {/* "id": 15316002 */}
            <a href="https://dev.jyllands-posten.dk/politik/ECE15316002/eksperter-jon-stephensens-paastaaede-forseelse-er-ikke-grov-nok-til-en-politianmeldelse/">
              <time>15:47 - Politik</time>
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

          <li class="py-4 mx-4">
            {/* "id": 15273987 */}
            <a href="https://dev.jyllands-posten.dk/sport/fodbold/ECE15273987/lige-netop-dette-nederlag-gjorde-ekstra-ondt-for-kent-nielsen-og-co/">
              <time>15:47 - Sport</time>
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

          <li class="py-4 mx-4">
            {/* "id": 15313540 */}
            <a href="https://dev.jyllands-posten.dk/kultur/film/ECE15313540/danskere-i-verden-kunne-have-vaeret-et-mere-interessant-program-hvis-dr-havde-tilladt-sig-at-stille-sig-lidt-mere-kritisk/">
              <time>15:47 - Kultur</time>
              <div class="flex flex-row justify-between border-r font-serif">
                {" "}
                DR presser igen igen fiktionaliserede elementer ned over
                verdenshistorien{" "}
              </div>
              <img
                class="w-40 pt-2"
                src="https://dev.billeder.jyllands-posten.dk/pictures/image/15313543/1b5khn/ALTERNATES/master-free/15313540-danskere-i-verden-kunne-have-vaeret-et-mere-interessant-program-hvis-dr-havde-tilladt-sig-at-stille-sig-lidt-mere-kritisk"
              />
            </a>
          </li>

          <div class="px-4 items-center py-4">
          <button
            class="bg-transparent hover:bg-secondary text-secondary hover:text-white py-1.5 px-10 border 
            border-secondary hover:border-transparent rounded uppercase text-xs font-semibold"
          >
            <a href="/">Indlæs flere artikler</a>
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
