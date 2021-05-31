<p align="center">
  <img alt="VTEX Admin" src="../assets/vtex-logo.svg" height="100" />
  <h3 align="center">VTEX Admin App Example</h3>
  <p align="center">An example app to help you get your Admin App started.</p>
</p>

---

## Quickstart

- Clone this repo: `git clone git@github.com:vtex-apps/admin-example.git <app-name>` or use it as template for your app.
- Link it: `vtex link`
- Navigate to: `<workspace>--<account>.myvtex.com/admin/app/example`

## Key concepts for developing an Admin app

[First and foremost, you should be familiar with VTEX IO concepts. We recommend that you take a look at the VTEX IO documentation in order to understand what is to follow.](https://developers.vtex.com/vtex-developer-docs/docs/concepts)

An Admin app must have at least an `admin`, `react` and `messsages` [folders, which will go through their corresponding builders, and compose your application](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-builders).

Note how each builder is defined on the `manifest.json`:

```json
  "builders": {
    "react": "3.x",
    "admin": "0.x",
    "messages": "1.x",
  },
```

### The `admin` folder

Under this folder you will find the `navigation.json` and the `routes.json` files. These files are used to define both where the app should live on the Admin Sidebar and what route should render which component. Each of them follow certain rules. See below.

#### `navigation.json`

| Property          | Required | Type                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Defaults to |
| ----------------- | -------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `adminVersion`    | No       | `number`                | The admin version of this object. It's important to note that if you're configuring an app for the admin@4.x, you must consider this property as required, and set it to `4`                                                                                                                                                                                                                                                                                                                | `3`         |
| `section`         | Yes      | `SectionV4 | SectionV3` | Under which section your app should be displayed. In case you've set the `adminVersion` to `4`, consider the `SectionV4` type below.                                                                                                                                                                                                                                                                                                                                                        | -           |
| `titleId`         | Yes      | `string`                | The ID of the page's title label which will be translated to describe a section or subSection, depending on if there is at least one subSection property defined                                                                                                                                                                                                                                                                                                                            | -           |
| `path`            | No       | `string`                | The path of the sub section. In case you're defining a section (if there is at least one `subSection` property defined), you don't need to set anything to this property                                                                                                                                                                                                                                                                                                                    | -           |
| `LMProductID`     | No       | `string`                | The product ID associated with your app. If your app should be private and not available to every single admin user, you should set its ID here                                                                                                                                                                                                                                                                                                                                             | -           |
| `subSection`      | No       | `string`                | In case you're defining a section, you should set this item. This is used to group the sub section items under one sub section of your section. This name can be arbitrary. Keep in mind that it'll be used as a key so it's possible to insert other apps within it from different apps                                                                                                                                                                                                    | -           |
| `subSectionItems` | No       | `SubSection`            | In case you're defining a section, you should set this item. It's an object which receives at least two parameters, labelId, and path. The labelId should be a translatable string, just as the titleId, and it represents the last leaf from the Sidebar tree, where users will click to navigate to different apps. The path represents the path which users will navigate when they interact with this element. The external property has the same goal of the exernal property below 👇 | -           |
| `external`        | No       | `boolean`               | Whether or not your app should open in a new window, or outside of the Admin                                                                                                                                                                                                                                                                                                                                                                                                                | `false`     |
| `id`              | No       | `string`                | In case you're developing a new version of an existing app that when installed, should replace the existing one, set this property on both, the existing and the new one. This ID is used to remove duplicates. This is an edge case. If you need to set this property, use a short uuid generator such as [short-unique-id](https://shortunique.id/) as a prefix for the ID of your application to minize the chances of duplicatess.                                                      | -           |

```ts
type SectionV4 =
  | 'main'
  | 'orders'
  | 'products'
  | 'promotions'
  | 'storeFront'
  | 'shipping'
  | 'marketplace'
  | 'apps'
  | 'storeSettings'

type SectionV3 =
  | 'main'
  | 'orders'
  | 'products'
  | 'marketplace'
  | 'transactions'
  | 'analytics'
  | 'customer'
  | 'storeSetup'
  | 'accountSettings'
  | 'other'

interface SubSection {
  path: string
  labelId: string
  id?: string
}
```

#### `routes.json`

#### The `messages` folder

#### The `react` folder
