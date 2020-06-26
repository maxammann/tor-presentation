import './main.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'
import 'reveal.js/plugin/highlight/monokai.css'
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Hightlight from 'reveal.js/plugin/highlight/highlight.esm.js';

let deck = new Reveal({
   controls: true,
   progress: true,
   history: true,
   center: true,
   plugins: [ Markdown, Hightlight ]
})

deck.initialize();