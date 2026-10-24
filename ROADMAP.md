# Luxury Line roadmap

This roadmap matches the repository as it exists today. Status comes from the source, not from earlier notes. The previous `README.md` listed registration, login, offers, and order confirmation as available features. Those screens exist. Account creation, sign-in, and order placement do not.

There is no active branch of unfinished work beyond what is already on `master`. "In progress" means the UI is in the app and the behavior is incomplete.

## Completed

### Shop catalog, filters, and pagination

Shoppers can narrow 22 bags without a backend.

- **Technical work already in place.** `fetchProducts` in `src/Store/ProductSlice/productsSlice.js` loads `public/shop.json`. `src/Pages/Shopping/Shop.jsx` filters by category, color, size, brand, and price, sorts by the first size price, and pages six items at a time. Mobile drawers toggle sort and filters.
- **Done when.** The shop route renders products from `shop.json`, the filters change the visible set, and pagination slices that set. This is true in the current code.

### Variant-aware cart

A shopper can keep distinct lines for the same bag in different sizes or colors, and the cart survives a refresh.

- **Technical work already in place.** `src/Store/ProductSlice/Cart.js` keys a line by `id`, `selectSize`, and `color`. It supports add, increase, decrease (floor of 1), delete, and clear. State is stored in `localStorage` under `card`. `src/Pages/Cart/Cart.jsx` renders lines and totals.
- **Done when.** Adding the same variant increments quantity, a different size or color creates another line, and a refresh restores the cart. The reducer implements that behavior.

### Favorites

A shopper can save products and remove them later on the same browser.

- **Technical work already in place.** `src/Store/ProductSlice/FavoritesSlice.js` stores items under `favorites`. Shop cards, offer cards, and the favorites page dispatch add or remove. The header reads `favorites.length`.
- **Done when.** A saved product remains after refresh and can be removed. Quantity on a repeated add is stored and is not shown in the UI.

### Storefront pages

The route table in `src/App.js` covers home, shop, product detail, offers, cart, favorites, checkout, account, login, about, and contact. Home, about, and the offers landing content render without a server. Product detail works after the shop has loaded the catalog into Redux.

## In progress

These are partial. They are not marked complete.

### P0 — Product detail and catalog loading

**Purpose.** A shared product URL should show that bag even if the shopper did not visit the shop first.

**Technical work.** `SingleProduct.jsx` only searches `state.products.products`. `fetchProducts` is dispatched from `Shop.jsx`. The shop selector reads `loading`, while the slice sets `status` to `idle`, `loading`, `succeeded`, or `failed`.

**Depends on.** The existing `productsSlice` and `public/shop.json`.

**Done when.**

- Opening `/products/:id` directly fetches the catalog if it is empty.
- An unknown id still shows a not-found state.
- The shop uses `status` for the loading and error UI.
- A failed fetch surfaces the slice error.

### P0 — One catalog identity for shop and offers

**Purpose.** Adding an offer item must not overwrite or merge with a different shop bag that happens to use the same id, size, and color.

**Technical work.** Offers load `public/offersLap.json` and `public/BackpackOffers.json` inside `LaptopBagsOffers.jsx` and `BackpackOffers.jsx`. Card components send those objects through `addToCart` and `addToFavorites`. Ids overlap `shop.json`.

**Depends on.** The cart line key in `Cart.js`.

**Done when.**

- A cart line from an offer cannot match a different shop product by accident.
- Offer prices and images still come from their current data, or the files are merged into one catalog on purpose.
- Favorites use the same identity rule.

### P1 — Checkout that matches what the code can do

**Purpose.** The checkout screen should either record a local order summary or state that the store cannot place an order. It should not look like a completed purchase.

**Technical work.** `LeftCheckout.jsx` is an uncontrolled billing form. `RigthCheckOut.jsx` renders totals, three payment radios, a terms checkbox, and a Place Order button with no submit handler. `dispatch` is unused. The cart promo input in `Cart.jsx` is also unused.

**Depends on.** Cart totals and a product decision: local confirmation only, or no submission.

**Done when.**

- Place Order cannot be confused with a charged payment.
- Required fields are validated if a local confirmation is added.
- The confirmation lists the current cart lines and total, or the button explains that ordering is not available.
- No payment provider is introduced in this milestone.

### P1 — Account screens

**Purpose.** Registration and login should either create a local session or be presented as a preview.

**Technical work.** `Account.jsx` renders `Register.jsx`. The submit handler checks name and password length. The `axios.post` call is commented out, and `axios` is not a dependency. `Login.jsx` has no submit handler. Neither route guards cart or checkout.

**Depends on.** A decision to stay client-only. A server is out of scope for this milestone.

**Done when.**

- Submitting the forms gives a visible result.
- Passwords are not sent to a placeholder endpoint.
- If accounts remain a preview, the screens say so.
- Repeat-password is checked if registration still collects it.

### P1 — Cart and favorites tests

**Purpose.** The reducer rules are the business logic most worth protecting.

**Technical work.** `@testing-library/react` and Jest are already dependencies. No test files exist.

**Depends on.** The current `Cart.js` and `FavoritesSlice.js` behavior, including the `card` storage key.

**Done when.**

- Tests cover add, duplicate variant, different size, decrease floor, delete, and clear.
- Tests cover favorite add and remove.
- `npm test -- --watchAll=false` runs those tests without `--passWithNoTests`.

## Planned

### P1 — Filter and pagination polish

**Purpose.** The result list should stay understandable when filters change.

**Technical work.** `currentPage` in `Shop.jsx` is not reset when category, color, size, brand, price, or sort changes. Price matching uses the full size range of a product, so a bag with both a cheap and an expensive size drops out of a narrow range. Brand, size, and color options are hardcoded rather than derived from `shop.json`.

**Depends on.** The current filter `useMemo`.

**Done when.**

- Changing a filter shows the first page of the new result.
- An empty result has its own message.
- Documented price rules match the code, including the min-and-max size rule, unless that rule is changed deliberately.

### P1 — Public metadata and placeholder copy

**Purpose.** A recruiter opening the app or the HTML should see Luxury Line, not the Create React App sample text.

**Technical work.** `public/index.html` description is still the Create React App default. `public/manifest.json` name is "Create React App Sample". `package.json` `name` is `my-app`. Story, product details, care instructions, and cart notes are lorem ipsum. Contact details are placeholders. The footer copyright says "A-PRIL".

**Depends on.** Real copy if the placeholders should be replaced. Metadata can be updated without a new backend.

**Done when.**

- The document title, description, and manifest name identify the store.
- Placeholder paragraphs are replaced or clearly marked as sample content.
- `package.json` `name` changes only with an explicit decision. It is private and is not published.

### P2 — Accessibility and semantics

**Purpose.** Filters, the cart, and dialogs should be usable without guessing from color alone.

**Technical work.** Color filters are colored divs. Several controls are clickable divs. Icon buttons in the header rely on the icon. Form fields on checkout and contact are only partly labeled.

**Depends on.** The existing components. No accessibility library is installed.

**Done when.**

- Icon-only actions have accessible names.
- Filter controls can be operated from the keyboard.
- Form fields are labeled, and the color choice is not conveyed by color alone.

### P2 — Production build hygiene

**Purpose.** The static build should be something a host can serve without surprises.

**Technical work.** `npm run build` succeeds and assumes hosting at `/`. ESLint warnings remain. `browserslist` data is outdated. There is no CI workflow.

**Depends on.** Nothing outside the repo.

**Done when.**

- The existing ESLint warnings are fixed or explicitly suppressed with a reason.
- A workflow runs `npm test` and `npm run build` on push, once tests exist.
- Hosting at a subpath is documented if `homepage` is set.

## Future considerations

These need a product decision. They are not implied by the current code.

### P2 — HTTP API and a single catalog

Replace `shop.json` and the offer files with one catalog endpoint when the data needs to change without a frontend deploy. Keep the cart's variant key. Do this before accounts or payments so every page loads the same products.

### P2 — Accounts on a server

The commented registration call is not a start on authentication. A real version needs a credential store, session handling, and protected routes. None of that exists here.

### P2 — Orders and payment

Cash, valU, and card radios are labels. A later version can start with cash-on-delivery recorded as an order, then add a payment provider. Promo codes belong with that order model. The current discount field is not that system.

### P2 — Merchandising content in data

Home sliders, "new arrivals", sales ratios, and reviews are components with literal data. Moving them into content files would let the about page and home page change with the catalog. The animated ratios should stay labeled as editorial unless they are calculated from orders.

### P2 — Repository name

The Git remote is `https://github.com/HodaNabeil/E-commerce-Bags.git`. A clearer name is `luxury-line-bags`, aligned with the brand in the header and with the bag catalog. Do not rename the remote until that name is approved. Local package name, image paths, and the `localStorage` keys should stay as they are during a rename.
