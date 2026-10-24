# Luxury Line

A client-side storefront for browsing handbags, backpacks, duffle bags, and laptop bags, with filters, a variant-aware cart, and favorites saved in the browser.

**Luxury Line** is the name shown in the interface. The GitHub repository is still [`E-commerce-Bags`](https://github.com/HodaNabeil/E-commerce-Bags). A rename is proposed in the project notes and has not been applied.

## Overview

Shoppers can look through a static bag catalog, narrow it by category, color, size, brand, and price, open a product, and keep a cart and a favorites list on the same device. The interface also includes an offers page, an about page, a contact form, and account screens.

The project is a frontend product demo. It does not take payment, create accounts, or store orders on a server.

## Who it is for

- Shoppers evaluating bags by type, size, color, and price.
- Reviewers who want to see a complete browse-to-cart flow in a React application.

The about and contact pages present the store. They use placeholder copy and contact details, so they are not a live customer-support channel.

## Features

### Browse and compare

- Home page with a hero slider, collection tiles, and static promotional sections.
- Shop at `/products` backed by `public/shop.json` (22 products: 7 handbags, 7 duffle bags, 5 backpacks, 3 laptop bags).
- Filters for category, color, size, brand (`prand` in the data), and a $0–$500 price range.
- Sort by the first size price, low to high or high to low.
- Six products per page, with previous/next controls.
- Mobile sort and filter drawers.

### Product detail

- Route `/products/:id` shows title, price for the selected size, a static star row plus the product rating, size choices, and color choices.
- Add to cart is enabled after a color is selected and the price is greater than zero.
- A related-products block on the same page uses static images, not the JSON catalog.

### Cart and favorites

- Cart lines are unique by product id, selected size, and color.
- Quantity can be increased, decreased (not below 1), or the line can be removed. The whole cart can be cleared.
- The cart survives a refresh through `localStorage` under the key `card`.
- Favorites survive a refresh through `localStorage` under the key `favorites`.
- The header shows how many cart lines and favorite items are stored.

### Offers, about, and contact

- `/offer` shows a countdown and two small catalogs from `public/offersLap.json` and `public/BackpackOffers.json` (4 items each).
- Offer cards can be added to the cart or favorites. They are not linked to the product-detail route.
- `/about` shows a story, animated sales-ratio bars, and a review slider. Those numbers and quotes are hardcoded.
- `/contact` shows a form and placeholder store details. The form is not submitted anywhere.

## Technology stack

Verified from `package.json` and the source:

| Area | Choice |
| --- | --- |
| UI | React 18 |
| Routing | React Router 6 |
| State | Redux Toolkit and React Redux |
| Styling | Tailwind CSS 3 and page-level CSS |
| Price slider | `react-slider` |
| Icons | Font Awesome 6, vendored in `src/all.min.css` and `webfonts/` |
| Fonts | Poppins and Kaushan Script from Google Fonts |
| Data | Static JSON in `public/` |
| Tooling | Create React App (`react-scripts` 5.0.1) |
| Tests present in dependencies | Jest and Testing Library, via Create React App. No test files are written. |

Not in this repository: a backend, a database, an authentication provider, a payment provider, environment-specific configuration, CI, or a hosting config file.

## Architecture

```text
Browser
  └─ src/index.js
       BrowserRouter
       Redux Provider
         └─ src/App.js routes
              ├─ Pages compose Header, page content, and Footer
              ├─ Shop loads public/shop.json through productsSlice
              ├─ Offers pages fetch their own JSON into local component state
              └─ Cart and favorites read and write localStorage
```

`src/index.js` mounts the tree. `src/Store/store.js` registers three reducers: `products`, `cart`, and `favorites`. Pages do not share a layout route. Each page renders `Header` and `Footer` itself.

Catalog loading is intentionally narrow. Only the shop page dispatches `fetchProducts`. The product page reads `state.products.products` and does not fetch. Offer sections fetch separate files and do not write them into Redux.

Cart and favorites are the business state. Product data is a read model loaded from JSON.

## Project structure

```text
E-commerce-Bags/
├── public/
│   ├── shop.json
│   ├── offersLap.json
│   ├── BackpackOffers.json
│   ├── Img/                 # images referenced as /Img/...
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── index.js             # React root, router, Redux provider
│   ├── App.js               # route table
│   ├── index.css            # Tailwind directives and shared styles
│   ├── App.css              # empty
│   ├── all.min.css          # Font Awesome
│   ├── components/          # Header, Footer, Loading, Story
│   ├── Pages/
│   │   ├── Home/
│   │   ├── Shopping/        # catalog, filters, sort, pagination
│   │   ├── SingleProduct/
│   │   ├── Cart/
│   │   ├── Favorites/
│   │   ├── Checkout/
│   │   ├── Offers/
│   │   ├── Auth/            # login form and registration form
│   │   ├── About/
│   │   └── Contact/
│   ├── Store/
│   │   ├── store.js
│   │   └── ProductSlice/    # products, cart, favorites
│   └── IMg/                 # images imported from components
├── webfonts/                # Font Awesome font files
├── tailwind.config.js
├── package.json
└── ROADMAP.md
```

`src/Pages/Shopping` holds the catalog interaction: filtering, sorting, and pagination live in `Shop.jsx`, with one component per filter. `src/Store/ProductSlice` holds the only shared business logic. `src/components` is limited to chrome used on more than one page. There is no `services/`, `hooks/`, or `utils/` directory.

Images are split between `public/Img` (URL paths in JSON and some JSX) and `src/IMg` (bundled imports). The two folder names differ in casing on purpose in the current tree; Linux treats them as different directories.

Configuration is `package.json`, `tailwind.config.js`, and `public/index.html`. There is no `postcss.config.js`. `npm run build` still emits Tailwind 3.4.1 utilities. Deployment files, GitHub Actions, and test files are absent.

## Main flows

1. **Find a bag.** Open Shop. The page requests `/shop.json`. Filters run in the browser inside `useMemo`. A product stays in the price filter only when its lowest size price is at least the minimum and its highest size price is at most the maximum. Results are sliced into pages of six.
2. **Inspect a bag.** From a shop card, the eye icon goes to `/products/:id`. The page selects a default size, then requires a color before add-to-cart is clickable. Opening that URL directly, before the shop has loaded the catalog, renders "Product not found".
3. **Save a bag.** The heart writes the product into `favorites`. Adding the same id again increases a `quantity` field that the favorites page does not display.
4. **Build a cart.** Add-to-cart stores id, title, image, price, size, color, quantity, and discount. A second add of the same id, size, and color increases quantity by one. The cart page can change quantity, remove a line, or clear storage.
5. **Review totals.** Subtotal is `price * quantity` summed across lines. The figure labeled "Cart Total Discount" is that subtotal minus each line's `discount` once, not a displayed discount amount. Delivery is hardcoded as `$0.0`. The promo field is not read.
6. **Checkout.** `/checkout` shows the same totals, a billing form, and payment labels (cash on delivery, valU, online cards). Place Order does not validate the form or create an order.
7. **Account screens.** `/account` renders the registration form. It checks that the name is non-empty and the password is at least 6 characters. The request that would create an account is commented out, and `axios` is not installed. `/login` keeps email and password in component state and does not submit them.

## Setup

Requirements: Node.js 20 (verified with 20.20.2) and npm. The lockfile is `package-lock.json`.

```bash
git clone https://github.com/HodaNabeil/E-commerce-Bags.git
cd E-commerce-Bags
npm install
npm start
```

The dev server is the Create React App default, [http://localhost:3000](http://localhost:3000).

## Environment variables

No project variables are required. The source does not read a custom `process.env` value. Create React App still sets `NODE_ENV` and `PUBLIC_URL` for its own build.

`.gitignore` ignores `.env.local` and the usual env variants. No `.env` file is part of the project, and none should be committed.

## Local development

```bash
npm start    # development server
npm run build
npm test -- --watchAll=false --passWithNoTests
```

`npm run eject` is the Create React App escape hatch. It is not required to run or build the app.

Shop data is edited in `public/shop.json`. Offer data is edited in `public/offersLap.json` and `public/BackpackOffers.json`. Home promotions, about-page ratios, and reviews are hardcoded in their components.

## Testing and quality checks

`npm test` starts Jest through `react-scripts`. There are no `*.test.js` or `*.spec.js` files. A non-interactive run with no tests exits unless `--passWithNoTests` is passed:

```bash
CI=true npm test -- --watchAll=false --passWithNoTests
```

That command was run for this documentation pass and exited 0 with "No tests found".

`npm run build` was run with Node.js 20.20.2 and completed. ESLint reported existing warnings and did not fail the build:

- `src/Pages/About/ReviewSlider.jsx` and `src/Pages/SingleProduct/SingleProduct.jsx`: hook dependency warnings
- unused variables in `Register.jsx`, `RigthCheckOut.jsx`, `FilterCategory.jsx`, `FilterPrand.jsx`, and `Header.jsx`

There is no separate lint script, formatter, or typechecker. The app is JavaScript, not TypeScript.

## Deployment

`npm run build` writes a static `build/` directory. `package.json` has no `homepage` field, so the build assumes the site is hosted at `/`. Nothing in the repo deploys that folder: there is no Dockerfile, `vercel.json`, Netlify config, or GitHub Actions workflow.

`public/robots.txt` allows all crawlers. `public/index.html` still has the Create React App description, and `public/manifest.json` still says "Create React App Sample".

## Current status

The browse, filter, cart, and favorites flows work in the browser against local JSON. Account, contact, checkout, promo codes, and payment choices are interface only.

Known limitations:

- Product detail depends on a catalog fetch that only the shop page performs.
- The shop page reads `loading` from Redux, while `productsSlice` stores `status`. The loading component therefore does not render, and a failed fetch is what sets `error`.
- Offer catalogs repeat ids used in `shop.json`, so a cart line can collide across catalogs when id, size, and color match.
- The offers countdown is six months from the current date, recomputed every second. It is not a fixed campaign end date.
- Most catalog `discount` values are `0`. The cart label does not show the discount amount.
- Pagination does not return to page 1 when filters change.
- The header cart count is the number of lines, not the sum of quantities.
- Registration, login, contact, and checkout do not call an API.
- About-page sales ratios and customer quotes are static.
- Story, product details, and cart notes use placeholder text.
- `src/App.css` is empty. `src/Pages/Auth/Register.jsx` references `axios`, which is not a dependency.

## Roadmap

Priorities and acceptance criteria are in [ROADMAP.md](ROADMAP.md).

| Priority | Next work |
| --- | --- |
| P0 | Make product detail load its own catalog, and align the shop loading state with `status`. |
| P0 | Stop offer items from sharing cart identity with shop items, or merge the catalogs. |
| P1 | Add tests around cart identity, quantity, and `localStorage`. |
| P1 | Decide whether checkout confirms a local order or stays an explicit non-submitting mock. |
| P2 | Introduce a real API, accounts, and payments only if the product needs to leave the demo stage. |

## Engineering decisions

- **Static JSON instead of an API.** The catalog can be reviewed and changed without a server. The cost is that product detail, offers, and the shop do not share one loading path.
- **Redux Toolkit for cart, favorites, and the shop catalog.** Filters stay in `Shop` component state because they are page-local. Offer lists stay in component state for the same reason, which is why they can drift from the shop catalog.
- **Line identity is id + size + color.** That matches how a bag is sold. It also makes duplicate ids across JSON files unsafe.
- **`localStorage` for cart and favorites.** The demo keeps state across refreshes without an account. The cart key is `card`, which is easy to miss. There is no migration or schema version.
- **Each page renders the header and footer.** Routes stay flat and obvious. Shared layout behavior has to be copied, and the header background is passed as a prop per page.
- **Tailwind plus hand-written CSS.** Layout utilities live next to page CSS and a small set of color variables in `src/index.css`. Breakpoints in `tailwind.config.js` are 576, 768, 992, 1200, and 1400.
- **Create React App.** Scripts stay standard (`start`, `build`, `test`). The project does not eject.

## What is technically interesting

The useful part of this codebase is the client catalog pipeline, not the marketing pages.

`Shop.jsx` combines several filters, then sorts and paginates, in one memoized pass. The cart reducer treats size and color as part of the line, and it writes through to `localStorage` on each change. Those two pieces are the core of the storefront. The unfinished account and checkout screens show the boundary of the demo: the interface suggests a purchase, and the code stops before any order exists.

There is no live demo URL and no screenshot set in the repository.
