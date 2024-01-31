// Updated by trungquandev.com's author on May 13 2023
// Sample Eslint config for React project
module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh'
  ],
  rules: {

    // React
    'react-refresh/only-export-components': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'react/display-name': 0,

    //MUi
    'no-restricted-imports': [
      'error',
      {
        'patterns': ['@mui/*/*/*']
      }
    ],

    // Common
    'no-console': 1, // không để câu lệnh console.log trong project
    'no-lonely-if': 1, // dùng cấu trúc else if chứ không dùng if trong else
    'no-unused-vars': 1, // báo những biến khởi tạo nhưng không dùng đến trong project
    'no-trailing-spaces': 1,
    'no-multi-spaces': 1, // báo những nơi thừa dấu cách
    'no-multiple-empty-lines': 1, // báo những nơi thừa xuống dòng
    'space-before-blocks': ['error', 'always'], // báo những nơi thiếu dấu cách trước những đoạn như if, else, switch, ...
    'object-curly-spacing': [1, 'always'], // phải mở có khoảng trống khi khởi tạo 1 object
    'indent': ['warn', 2], // cảnh cáo thụt lùi code trong project, mỗi lần tab thì thụt lùi 2
    'semi': [1, 'never'], // báo những noi có dấu chấm phẩy cuối dòng
    // 'quotes': ['error', 'single'], // báo những nơi dùng dấu "", chỉ dùng dấu ''
    'array-bracket-spacing': 1, // báo những nơi có thừa dấu cách trong array
    'linebreak-style': 0,
    'no-unexpected-multiline': 'warn', // báo những nơi dùng cú pháp lạ
    'keyword-spacing': 1, // báo những dòng else hoặc những nơi thiếu dấu cách dối với đoạn code trước
    'comma-dangle': 1, // báo những properties dư thừa dấu phẩy trong object, ...
    'comma-spacing': 1, // báo những nơi khởi tạo 2 biến nhưng thiếu dấu cách giữa 2 biến
    'arrow-spacing': 1 // báo những arrow funtion thiếu dấu cách
  }
}