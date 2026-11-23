# Shorthand: a terse output style for Claude Code

![Claude Code plugin](https://img.shields.io/badge/Claude%20Code-plugin-D97757)
![License: PolyForm Noncommercial](https://img.shields.io/badge/license-PolyForm%20Noncommercial%201.0.0-blue)
![Version](https://img.shields.io/badge/version-0.1.0-informational)

> **In short:** Shorthand is a Claude Code plugin that asks Claude to write shorter answers: no preamble, no recap, no filler. It's off by default. Code, numbers, file paths and error text are kept exact. It adds a short rule (about 25 words) to the system prompt when on, and nothing else.

**Keywords:** Claude Code output tokens, shorter Claude responses, reduce Claude Code cost, terse mode, caveman mode alternative, Claude Code output style, token saving plugin.

---

## Features

- **Two levels:**
  - `lite`: drops filler and preamble, keeps full sentences.
  - `full`: terse. Fragments allowed. No preamble, no recap, no hedging.
- **Off by default.** Nothing changes until you choose a level.
- **Exact where it matters:** code, numbers, paths and errors are never rewritten by the style.
- **Cheap:** one short section added to the system prompt, after the cache boundary. No hooks run per tool call, and no network calls.

## What it does and doesn't save

Measured once, with the same question, one run each: a long answer about HTTP caching was 667 words with the style off and 440 at `full`, about 34% shorter. A short answer barely changes: a closure explanation was 127 words off and 123 at `full`.

Shorthand reduces **output** tokens, the text Claude writes. Savings depend on the task. Answers that are mostly code or tool calls shrink less. Measure on your own workload before relying on a figure. The rule itself adds about 25 words of input to each request when on.

## Install

### Claude Code (recommended)

```text
/plugin install shorthand --marketplace MOHJRNL/shorthand
```

Or from a shell:

```bash
claude plugin install shorthand --marketplace MOHJRNL/shorthand
```

Desktop app: **+** next to the prompt box, then **Plugins**, **Add marketplace** with `MOHJRNL/shorthand`, then **Add plugin**.

Then open the plugin's options and set **Output style** to `lite`, `full` or `off`.

### Codex, Gemini CLI, OpenCode, Grok

The plugin itself doesn't run in these tools. You can get the same effect by hand, by adding the rule to the instructions file your tool reads:

- **Codex:** add the rule below to `AGENTS.md`.
- **Gemini CLI:** add it to `GEMINI.md`.
- **OpenCode:** add it to `AGENTS.md` in the project.
- **Grok:** paste it into your client's custom instructions, if it has them. I haven't verified a Grok-specific install path.

The `full` rule:

> Output: terse. Fragments ok. No preamble, no recap, no hedging. Code, numbers, paths and errors exact.

The `lite` rule:

> Output: drop filler and preamble. Keep full sentences. Code, numbers, paths and errors exact.

## FAQ

**Does it change code or commands?** No. The style covers prose only. Code, numbers, paths and error text are kept exact.

**Does it cost anything when off?** No. Nothing is added to the system prompt.

**How is it different from Caveman?** It's a plain instruction in the system prompt, rather than a separate language or rewriting layer. It has two levels and no extra hooks.

## Development

```bash
claude plugin validate ./
claude plugin test ./
```

## Test proof

A recorded test run on a fresh clone: see [TEST-PROOF.md](TEST-PROOF.md).

## License and commercial use

Free to use, copy and modify for non-commercial purposes, under the PolyForm Noncommercial License 1.0.0 (see `LICENSE`). For commercial use, contact the author for a separate license.
