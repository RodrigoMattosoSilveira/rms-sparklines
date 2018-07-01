&lt;util-lib&gt;
====

Install
----

Polyfill tags if you need them.

```
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-sd-ce.js"></script>
<script nomodule src="https://unpkg.com/browser-es-module-loader@latest/dist/babel-browser-build.js"></script>
<script nomodule src="https://unpkg.com/browser-es-module-loader@latest/dist/browser-es-module-loader.js"></script>
```

Loading this component.

```
<script type="module" src="https://unpkg.com/util-lib@latest/dist/util-lib.js"></script>

```

Usage
----

```
  <util-lib name="Some value"></util-lib>

  <util-lib>Slot content</util-lib>
```

License
----

UtilLib is released under an MIT license.

Built, tested, and published with [Nutmeg](https://nutmeg.tools).
