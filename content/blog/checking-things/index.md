---
title: Checking some things !
date: '2020-05-28T22:40:32.169Z'
description: Just some random description to display instead of some portion of the blog!!.
categories: ['markdown, gatsby']
---

### This is just for checking styling of some stuff.

## Quoted Text

> This is just some random garbage to check the working of I don't know what.

---

## Links

[**My Site.**](https://guptaparas.in) &nbsp;
[`My GitHub.`](https://github.com/Parasgupta44)

---

## Bullets

- This is useless.
- This is useless.
- This is useless.
- This is useful.

---

## Code Snippets

- #### React Component

```js
// Check for comments
import React, { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const handleChange = event => {
    setValue(event.target.value)
  }
  return (
    <main>
      <h1>Checking Stuff with React.</h1>
      <textarea value={value} onChange={handleChange} rows={10} cols={50} />
      <div>
        <h2>{value}</h2>
      </div>
    </main>
  )
}
```

- #### Python Snippet

```python
# Check for comments
import glob
import numpy as np
from tqdm import tqdm

print('Same Old Hello I Guess!)
```

- #### Ruby Snippet

```ruby
# Check for comments
require 'redcarpet'
mdx = Redcarpet.new("What's Ruby?")
puts mdx.to_html
```

#### CPP Snippet

```cpp
// Check for comments
#include <some_library>
using namespace std;

int main() {
    cout << "----------------";
    return 0;
}
```

---

### Check Tables

| First Header     | Second Header   |
| ---------------- | --------------- |
| Some Content     | More Content    |
| You already know | Just type it in |

### TO-DOS

- [x] Add blog and dark mode for it.
- [ ] Migrate to TypeScript.
