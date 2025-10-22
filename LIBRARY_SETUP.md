# ライブラリ配布準備チェックリスト

## ✅ 完了した設定

### 1. ビルド設定
- [x] `vite.lib.config.ts` - ライブラリ用のVite設定
- [x] `tsconfig.lib.json` - ライブラリ用のTypeScript設定
- [x] `vite-plugin-dts` - 型定義ファイル生成

### 2. package.json設定
- [x] ライブラリ名: `rjsf-tailwind`
- [x] バージョン: `1.0.0`
- [x] エントリーポイント設定 (main, module, types)
- [x] exports設定
- [x] peerDependencies設定
- [x] ビルドスクリプト: `build:lib`
- [x] prepublishOnlyスクリプト

### 3. エントリーポイント
- [x] `src/components/index.ts` - メインエントリーポイント
- [x] 全コンポーネントのエクスポート

### 4. 型定義
- [x] TypeScript型定義ファイル生成
- [x] 各コンポーネントの型定義

### 5. ドキュメント
- [x] README.md - 使用方法とAPI説明
- [x] example-usage.tsx - 使用例

### 6. ビルド出力
- [x] ES modules: `rjsf-tailwind.es.js`
- [x] CommonJS: `rjsf-tailwind.cjs.js`
- [x] UMD: `rjsf-tailwind.umd.js`
- [x] 型定義ファイル: `*.d.ts`
- [x] CSS: `style.css`

## 📦 配布方法

### npm配布
```bash
# ライブラリをビルド
npm run build:lib

# npmに公開
npm publish
```

### ローカルテスト
```bash
# ローカルでパッケージを作成
npm pack

# 別のプロジェクトでテスト
npm install ./rjsf-tailwind-1.0.0.tgz
```

## 🔧 使用方法

```tsx
import { Form, Theme, Button } from 'rjsf-tailwind'

function MyForm() {
  return (
    <Form
      schema={schema}
      theme={Theme}
      onSubmit={(data) => console.log(data)}
    />
  )
}
```

## 📁 配布ファイル
- `dist-lib/` フォルダ内のファイル
- `README.md`
- `package.json`
