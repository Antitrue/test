module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'], // Файлы для TypeScript и TSX
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        jest: 'readonly'
      },
      parser: require('@typescript-eslint/parser'), // Парсер для TypeScript
      parserOptions: {
        ecmaFeatures: {
          jsx: true // Включаем поддержку JSX
        }
      }
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // Плагин для TypeScript
      'react': require('eslint-plugin-react'), // Плагин для React
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      'no-var': 'error',
      'prefer-const': 'error',
      'semi': ['error', 'always'],
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off', // Отключаем старые правила для React 17+
      'react/react-in-jsx-scope': 'off' // Отключаем необходимость импорта React в каждом файле
    }
  }
];
