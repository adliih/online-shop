# Online Shop

<details>
  <summary><strong>Table of Contents</strong></summary>

- [Online Shop](#online-shop)
  - [Running the program](#running-the-program)
- [GraphQL API(s)](#graphql-apis)
  - [Query](#query)
  - [Mutation](#mutation)
  - [Objects](#objects)
    - [AuthResult](#authresult)
    - [Product](#product)
    - [ProductCategory](#productcategory)
    - [Supplier](#supplier)
    - [User](#user)
  - [Inputs](#inputs)
    - [CreateProductCategoryDto](#createproductcategorydto)
    - [CreateProductDto](#createproductdto)
  - [Enums](#enums)
    - [UserRole](#userrole)

</details>

## Running the program

Requirements:

- Node 16+, NPM 8+
- Docker Compose

Start by preparing the required environment value, we can copy the example for the guide

```bash
cp .env.example .env
```

Start the dependencies, we can use docker-compose

```bash
docker-compose up
```

Sync the database schema using typeorm command

```bash
npm run typeorm:d -- schema:sync
```

Start the application in a another terminal

```bash
npm run start
# or use start:dev for development
npm run start:dev
```

# GraphQL API(s)

Endpoint: http://localhost:3000/graphql

## Query

<table>
<thead>
  <tr>
    <th align="left">Field</th>
    <th align="right">Argument</th>
    <th align="left">Type</th>
    <th align="left">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="2" valign="top"><strong>products</strong></td>
    <td valign="top">[<a href="#product">Product</a>!]!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">categoryId</td>
    <td valign="top"><a href="#id">ID</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" valign="top"><strong>product</strong></td>
    <td valign="top"><a href="#product">Product</a></td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">id</td>
    <td valign="top"><a href="#id">ID</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" valign="top"><strong>productCategories</strong></td>
    <td valign="top">[<a href="#productcategory">ProductCategory</a>!]!</td>
    <td></td>
  </tr>
</tbody>
</table>

## Mutation

<table><thead>
  <tr>
    <th align="left">Field</th>
    <th align="right">Argument</th>
    <th align="left">Type</th>
    <th align="left">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="2" valign="top"><strong>createProduct</strong></td>
    <td valign="top"><a href="#product">Product</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">input</td>
    <td valign="top"><a href="#createproductdto">CreateProductDto</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" valign="top"><strong>updateProduct</strong></td>
    <td valign="top"><a href="#product">Product</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">id</td>
    <td valign="top"><a href="#id">ID</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">input</td>
    <td valign="top"><a href="#createproductdto">CreateProductDto</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" valign="top"><strong>deleteProduct</strong></td>
    <td valign="top"><a href="#boolean">Boolean</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">id</td>
    <td valign="top"><a href="#id">ID</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" valign="top"><strong>createProductCategory</strong></td>
    <td valign="top"><a href="#productcategory">ProductCategory</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">input</td>
    <td valign="top"><a href="#createproductcategorydto">CreateProductCategoryDto</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" valign="top"><strong>signUp</strong></td>
    <td valign="top"><a href="#authresult">AuthResult</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">username</td>
    <td valign="top"><a href="#string">String</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">password</td>
    <td valign="top"><a href="#string">String</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" valign="top"><strong>signIn</strong></td>
    <td valign="top"><a href="#authresult">AuthResult</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">username</td>
    <td valign="top"><a href="#string">String</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">password</td>
    <td valign="top"><a href="#string">String</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" valign="top"><strong>signUpAdmin</strong></td>
    <td valign="top"><a href="#authresult">AuthResult</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">username</td>
    <td valign="top"><a href="#string">String</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">password</td>
    <td valign="top"><a href="#string">String</a>!</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2" align="right" valign="top">secret</td>
    <td valign="top"><a href="#string">String</a>!</td>
    <td>This should be same as <code>AUTH_ADMIN_SECRET</code> env value</td>
  </tr>
</tbody>
</table>

## Objects

### AuthResult

<table>
  <thead>
    <tr>
      <th align="left">Field</th>
      <th align="right">Argument</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" valign="top"><strong>user</strong></td>
      <td valign="top"><a href="#user">User</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>accessToken</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Product

<table>
  <thead>
    <tr>
      <th align="left">Field</th>
      <th align="right">Argument</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" valign="top"><strong>id</strong></td>
      <td valign="top"><a href="#id">ID</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>name</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>description</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>price</strong></td>
      <td valign="top"><a href="#float">Float</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>weight</strong></td>
      <td valign="top"><a href="#float">Float</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>category</strong></td>
      <td valign="top"><a href="#productcategory">ProductCategory</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>categoryId</strong></td>
      <td valign="top"><a href="#float">Float</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>supplier</strong></td>
      <td valign="top"><a href="#supplier">Supplier</a></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>supplierId</strong></td>
      <td valign="top"><a href="#float">Float</a></td>
      <td></td>
    </tr>
  </tbody>
</table>

### ProductCategory

<table>
  <thead>
    <tr>
      <th align="left">Field</th>
      <th align="right">Argument</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" valign="top"><strong>id</strong></td>
      <td valign="top"><a href="#id">ID</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>name</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>description</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Supplier

<table>
  <thead>
    <tr>
      <th align="left">Field</th>
      <th align="right">Argument</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" valign="top"><strong>id</strong></td>
      <td valign="top"><a href="#id">ID</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>name</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
  </tbody>
</table>

### User

<table>
  <thead>
    <tr>
      <th align="left">Field</th>
      <th align="right">Argument</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" valign="top"><strong>id</strong></td>
      <td valign="top"><a href="#id">ID</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>username</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>roles</strong></td>
      <td valign="top">[<a href="#userrole">UserRole</a>!]!</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Inputs

### CreateProductCategoryDto

<table>
  <thead>
    <tr>
      <th colspan="2" align="left">Field</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" valign="top"><strong>name</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>description</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
  </tbody>
</table>

### CreateProductDto

<table>
  <thead>
    <tr>
      <th colspan="2" align="left">Field</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" valign="top"><strong>name</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>description</strong></td>
      <td valign="top"><a href="#string">String</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>price</strong></td>
      <td valign="top"><a href="#float">Float</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>weight</strong></td>
      <td valign="top"><a href="#float">Float</a>!</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" valign="top"><strong>categoryId</strong></td>
      <td valign="top"><a href="#id">ID</a>!</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Enums

### UserRole

<table>
  <thead>
    <th align="left">Value</th>
    <th align="left">Description</th>
  </thead>
  <tbody>
    <tr>
      <td valign="top"><strong>CUSTOMER</strong></td>
      <td></td>
    </tr>
    <tr>
      <td valign="top"><strong>ADMIN</strong></td>
      <td></td>
    </tr>
  </tbody>
</table>
