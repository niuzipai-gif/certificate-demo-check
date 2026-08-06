# Certificate Demo Check

Certificate verification teaching demo built with Vinext, React, and Cloudflare-compatible tooling.

## 中文介绍

Certificate Demo Check 是一个证书/成绩核验页面的教学演示项目。页面模拟移动端核验结果界面，展示姓名、学校、准考证号、考试时间、分数、报告单编号和校验码等字段，并明确标注 `DEMO 非官方页面`。

这个项目只用于课堂、流程演示或界面验证，不连接任何真实考试机构数据库，也不代表真实证书、成绩或身份核验结果。

## 日本語紹介

Certificate Demo Check は、証明書・成績照会ページを教材として再現したデモプロジェクトです。モバイル向けの確認画面を想定し、氏名、学校、受験番号、試験時期、点数、成績報告書番号、検証コードなどの項目を表示します。画面上では `DEMO 非官方页面` と明示しています。

このプロジェクトは授業、操作フローの説明、UI 検証のためのサンプルです。実在する試験機関のデータベースには接続せず、本物の証明書、成績、本人確認結果を示すものではありません。

## Features

- Mobile-style certificate verification result page.
- Demo portrait and mock score report fields.
- Clear non-official demo notice on the page.
- Vinext / React app structure with Cloudflare-compatible build tooling.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## Validation

```bash
npm test
```
