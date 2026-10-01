import { defineConfig } from 'html-validate';

export default defineConfig({
  extends: ['html-validate:recommended'],
  rules: {
    // `role="list"` is intentional: Safari/VoiceOver drops list semantics
    // from <ul>/<ol> styled with `list-style: none`.
    'no-redundant-role': 'off',
    'prefer-native-element': ['error', { exclude: ['list'] }],
  },
});
