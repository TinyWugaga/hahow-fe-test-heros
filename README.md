# ReadMe

> 此專案為使用 [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 所建置的  [**Next.js**](https://nextjs.org/)  應用網頁，並搭配使用 **styled-components** 及 **Typescript** 等套件

## Getting Started

開啟終端機到專案所在位置，輸入以下指令安裝所需的套件：

```bash
yarn
#or
npm install
#or
pnpm install
```

安裝完成後執行下列指令，在本機運行專案：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

前往  [http://localhost:3000](http://localhost:3000/)  即可在本機預覽專案

---

<br>

## Project

### Folder

    src /
    ├ pages
    ├ components
    ├ hooks
    ├ services
    ├ styles
    ├ types

- `pages`：Next.js 專案用來放置頁面的資料夾，檔案名稱即為頁面的 route name

- `components`：網頁使用到的組件，依照區塊或功能進行切分，以分別管理其狀態與樣式

- `hooks`：依照需求獨立切分的 hooks，以分別管理相關的狀態與功能

- `services`：放置專門執行 API 請求的函式

- `styles`：styled-components 相關的檔案，包含 theme、mixins，以及一些全域或共用的樣式

- `types`：Typescript 相關的檔案，包含各個功能或資料需要的 types

<br> 
____________

### **Description**

檔案的放置除了依照不同的類別，主要會依可以獨立處理，及可重複使用的邏輯再去切分更細節的分類或檔案。

**Components** 的部分，盡可能地按照 Unit 為一個單位去切分檔案，主要是為了更簡易的處理狀態與設計樣式，也避免一個組件內容太過龐大，需要一次處理太多的資料與狀態。

**Hooks** 的部分，此專案用到的只有 heros profile 的相關資料，因此只有一個處理 heros profile 的檔案。其中包含 profile 獲取、更改及更新的功能，同時也設計了非同步功能的狀態資料，如 `isLoading` 及 `isUploading` 等狀態，讓組件可以依狀態進行不同樣式的更改。

**Services** 的部分，主要會依照 API 的位置或資料的相關性去做區分，同 Hooks，由於此專案只有需要請求 heros 相關的資料，因此只有一個處理與 heros 相關 API 的檔案。

其餘的資料夾則與套件的使用相關。

<br>

---

<br>

## Packages

### Next.js

- What is Next.js? ([doc](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs))

  Next.js 是一個基於 React 的伺服器端渲染框架，提供簡單和直觀的 API，同時支援服務器端渲染和靜態網頁生成。

- Why use it?
  - 支援 SSR 與 SSG 生成網頁，可以大大提高頁面的加載速度和 SEO（搜索引擎優化）的表現。
  - 具有非常簡單和直觀的 API，使得開發者能夠快速地構建伺服器端渲染應用程序。
  - 自動代碼拆分和預取機制可以使得頁面的性能得到進一步的提升。
  - 易於使用的客戶端路由，開發者可以很容易地實現前端路由，並且在使用靜態網頁生成時，Next.js 會自動為每個路由生成靜態頁面，使得整個網站的性能得到進一步的提升。

### Typescript

- What is typescript?([doc](https://www.typescriptlang.org/))

  Typescript 是一種開源的語言，它為 JavaScript 添加了靜態類型檢查功能，並且具有可選的編譯時類型檢查功能。

- Why use it?
  - 幫助使用者進行類別檢查，常見的情況像是：組件之間的傳遞屬性時可能出現的錯誤、使用函式時傳入的參數錯誤 ⋯⋯ 等等，透過類別的檢查可以減少此類錯誤，使代碼更加易於維護和擴展。

### Styled-components

- What is styled-components?

  Styled-components 是一個用於為 React 組件設計樣式的 CSS-in-JS 庫。它允許開發人員直接在他們的 JavaScript 文件中編寫 CSS 代碼，包括媒體查詢、偽元素、主題等，這可以提高代碼的可讀性和可維護性。

- Why use it?
  - 由於 Styled-components 將 CSS 嵌入到 JavaScript 代碼中，因此可以避免 CSS 類名衝突問題，這是在大型項目中經常會遇到的問題。
  - 因為 CSS-in-JS 的特性，開發者可以輕鬆地使用動態樣式和主題，這對於需要實現動態 UI 或多個主題的應用程序非常有用。
  - Styled-components 可以在伺服器端渲染時工作，這使得伺服器端渲染的 React 應用程序的樣式代碼可以更容易地管理。

<br>

---

<br>

## Comment

在此專案沒有什麼個人的註解。平時寫程式時會需要註解的情況，較多是在使用第三方提供的套件或功能的時候，會註解相關的文件網址，或是有些使用上可能要注意的地方；或是偶爾有較特殊的情況，可能是臨時建置還未補全的功能，或是因為不可抗力的因素，使得需要特例處理的地方，會特別附註提醒他人。

<br>

---

<br>

## Challenge

在建置這個專案的過程中，我認為最困難的部分，應該是創意的發揮跟樣式的調整。

在創意的發揮上，原先想嘗試做些比較酷炫的動畫，但考慮到時間成本，只能用比較簡單的動畫做畫面處理，跟繪製簡單的人物素材，讓整體的畫面看起來不會太過單調；另外，在此專案我有嘗試一些比較新的 CSS 語法與尺寸單位，在半摸索的條件下，樣式的調整花費我蠻多的時間，但由於先前已經把主要的功能完成了，所以我認為剩下的時間是有餘裕用來嘗試新的做法的，也很開心的在參閱了多篇文章，以及多次的嘗試後，能夠順利地解決樣式的問題。

- 嘗試的 CSS 語法
  - **CSS container** [ref](https://www.zhangxinxu.com/wordpress/2022/09/css-container-rule/)
  - **min()、max() 和 clamp()** [ref](https://web.dev/min-max-clamp/)
