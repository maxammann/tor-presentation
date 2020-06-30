import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Hightlight from "reveal.js/plugin/highlight/highlight.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";
import Math from "reveal.js/plugin/math/math.esm.js";

let deck = new Reveal({
  controls: true,
  progress: true,
  history: true,
  center: false,
  math: {
    mathjax: '/mathjax.js',
    config: 'TeX-AMS_HTML-full',
    // pass other options into `MathJax.Hub.Config()`
    TeX: { Macros: { RR: "{\\bf R}" } }
  },
  plugins: [Markdown, Hightlight, Notes, Math]
});

deck.initialize();

