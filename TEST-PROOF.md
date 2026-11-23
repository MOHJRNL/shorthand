# Test proof

A fresh clone of `MOHJRNL/shorthand` at commit `1cdcde8`, run on 2026-11-23 with Claude Code. The test run below is the proof.

```
$ claude plugin test ./
```

```
hooks/register.test.ts:
(pass) the full level adds the terse rule last, after the cache boundary [21.56ms]
(pass) the lite level drops filler but keeps full sentences [10.46ms]
(pass) off adds nothing to the system prompt [10.85ms]
 3 pass
 0 fail
Ran 3 tests across 1 file. [0.21s]
```
