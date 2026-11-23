# Test proof

A fresh clone of `MOHJRNL/shorthand` at commit `3a32d03`, run on 2026-11-23 with Claude Code. The test run below is the proof.

```
$ claude plugin test ./
```

```
hooks/register.test.ts:
(pass) the full level adds the terse rule last, after the cache boundary [28.20ms]
(pass) the lite level drops filler but keeps full sentences [13.16ms]
(pass) off adds nothing to the system prompt [37.08ms]
 3 pass
 0 fail
Ran 3 tests across 1 file. [0.37s]
```
