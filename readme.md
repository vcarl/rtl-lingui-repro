# Setup

```sh
git clone git@github.com:vcarl/rtl-lingui-repro.git
cd rtl-lingui-repro
yarn
yarn lingui
yarn test --ci
```

## Output

(with some stack traces and other noise removed)

```
$ jest --ci
  console.log
    <View>
      <Text>
        Unwrapped text
      </Text>
      <Text>
        ES In Trans
      </Text>
    </View>

 FAIL  __tests__/components/Repro.js (7.229 s)
  Repro
    ✕ renders (5270 ms)

  ● Repro › renders

    Unable to find an element with text: ES In Trans

      10 |       debug();
      11 |       await findByText("Unwrapped text");
    > 12 |       await findByText("ES In Trans");
         |             ^
      13 |     } catch (e) {
      14 |       console.error(e);
      15 |       throw e;

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        7.276 s
Ran all test suites.
```

Expected output: Because "ES In Trans" is visible in `debug()` output, it should
be found by `findByText`.

This is set up using `render` out of `helpers/testUtils` to scaffold i18n
support. The component is authored with `<Trans>In Trans</Trans>`, with the
message provided in `src/locales/*/messages.po`. This .po file is used by
`lingui compile` (run as part of `yarn lingui`) to construct
`src/locales/*/messages.js`, which is then imported in `config/i18n`, which is
loaded by `helpers/testUtils`.

What language to load is controlled in `config/i18n`. Changing `language: 'es'`
to `language: 'en'` changes what string is logged by `debug()`, which
demonstrates that the i18n harness is working correctly.
