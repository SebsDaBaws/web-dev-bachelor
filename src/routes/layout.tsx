import { component$, Fragment, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <Fragment>
      <main>
        <Header />
        <Slot />
      </main>
          <Footer />
    </Fragment>
  );
});
