import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <a class="inline-block text-primary" href="" target="_blank">
        Jyllands-Posten
        <span class={styles.spacer}>|</span>
      </a>
      <span>{new Date().toLocaleString()}</span>
    </footer>
  );
  
});
