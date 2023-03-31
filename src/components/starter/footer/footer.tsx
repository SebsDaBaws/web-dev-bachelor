import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="content-center text-center py-10">
      <a class="inline-block text-primary" href="">
        Jyllands-Posten
        <span class={styles.spacer}>|</span>
      </a>
      <span>{new Date().toLocaleString()}</span>
    </footer>
  );
  
});
