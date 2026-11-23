import { expect, test } from 'claude-code/testing'

// The engine's own sections sit beneath the plugin; the plugin adds its rule last.
const INPUT = { model: 'claude-opus-5-5', promptModel: 'claude-opus-5-5', surfaces: [], tools: [], outputStyle: null, traits: [] }
const BASE = { sections: [{ id: 'base', text: 'Be helpful.', scope: 'shared' as const }] }

test('the full level adds the terse rule last, after the cache boundary', { options: { level: 'full' } }, async ($, on) => {
  on('prompt.compose', () => BASE)
  const { sections } = await $.prompt.compose(INPUT)
  const last = sections[sections.length - 1]!
  expect(sections.length).toBe(2)
  expect(last.id).toBe('shorthand:style')
  expect(last.scope).toBe('session')
  expect(last.text).toContain('terse')
})

test('the lite level drops filler but keeps full sentences', { options: { level: 'lite' } }, async ($, on) => {
  on('prompt.compose', () => BASE)
  const { sections } = await $.prompt.compose(INPUT)
  expect(sections[sections.length - 1]!.text).toContain('Keep full sentences')
})

test('off adds nothing to the system prompt', { options: { level: 'off' } }, async ($, on) => {
  on('prompt.compose', () => BASE)
  const { sections } = await $.prompt.compose(INPUT)
  expect(sections.length).toBe(1)
})
