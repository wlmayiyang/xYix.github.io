---
title: luoguP6774 题解 - 时瑇的眼泪
---

> **题目大意.**
>
> 给出一个排列，求下标在 $[lx,rx]$ 中，值在 $[ly,ry]$ 中元素的逆序对数。
>
> $n,q$ 同阶，要求时空复杂度 $O(n\sqrt n)$。

这玩意严格强于区间逆序对，自然考虑分块。

- 散块到自身的贡献。
- 散块到另一个散块的贡献。预先排序然后直接取出来归并即可。