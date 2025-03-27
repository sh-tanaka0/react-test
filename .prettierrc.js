// .prettierrc.js
module.exports = {
    printWidth: 80, // 1行の最大文字数
    tabWidth: 2, // タブの幅 (スペース数)
    useTabs: false, // タブの代わりにスペースを使用
    semi: true, // 文末にセミコロンを付ける
    singleQuote: true, // シングルクォートを使用
    jsxSingleQuote: false, // JSXではシングルクォートを使用しない
    trailingComma: 'es5', // 末尾のカンマ ('es5' | 'all' | 'none')
    bracketSpacing: true, // オブジェクトリテラルの{ }の間にスペースを入れる
    bracketSameLine: false, // JSXの閉じタグ `>` を最後の行に配置しない
    arrowParens: 'always', // アロー関数の引数が1つでも括弧を付ける
    endOfLine: 'lf', // 改行コード (lf | crlf | cr | auto)
  };