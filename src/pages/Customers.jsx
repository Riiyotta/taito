import { customers } from '../content/persona-company.js';
import PageHero from '../components/persona-company/PageHero.jsx';

// The live /customers page is a hero with a grey placeholder panel ("Coming soon.") — no case-study cards yet.
export default function Customers() {
  const { hero } = customers;
  return <PageHero eyebrow={hero.eyebrow} title={hero.title} lede={hero.lede} media={null} />;
}
