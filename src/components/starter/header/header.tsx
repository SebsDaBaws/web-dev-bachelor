import { component$ } from '@builder.io/qwik';
import { JPLogo } from '../icons/jp_logo';

export default component$(() => {
  return (
    <header class="inline-block justify-center">
      <div>
        <a class= "content-center text-center px-2 py-2" href="/" title="JPLogo">
          <JPLogo />
        </a>
      </div>
      <ul class="flex flex-row flex-wrap text-right space-x-4 py-4 px-4 font-merriweather">
        <li>
          <a href="https://medielogin.dk/Jyllands-posten/login">
            Log ind
          </a>
        </li>
        <li>
          <a href="https://abonnement.jyllands-posten.dk/">
            Køb
          </a>
        </li>
        <li>
          <a href="/">
            Menu
          </a>
        </li>
      </ul>
    </header>
  );
});
