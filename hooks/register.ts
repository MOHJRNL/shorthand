import type { Register } from 'claude-code'

// One short section of the system prompt, sent after the cache boundary so the
// cached prefix stays the same. Nothing is added when the level is off.
const RULES = {
  lite: 'Output: drop filler and preamble. Keep full sentences. Code, numbers, paths and errors exact.',
  full: 'Output: terse. Fragments ok. No preamble, no recap, no hedging. Code, numbers, paths and errors exact.',
} as const

export const register: Register = (on, options) => {
  const level = options.level === 'lite' || options.level === 'full' ? options.level : null
  if (level === null) return

  on('prompt.compose', async ($, e, next) => {
    const { sections } = await next(e)
    return { sections: [...sections, { id: 'shorthand:style', text: RULES[level], scope: 'session' as const }] }
  })
}
