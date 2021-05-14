---
title: luoguP5404 题解 - 【CTS2019】重复
---

> **题目大意.**
>
> 给定一个长度为 $n$ 的串 $s$。
>
> 问：有多少个长度为 $m$ 的串，使得 $t^{\infty}$ 的任何一个长度为 $n$ 的子串都 $\ge s$。
>
> $|\Sigma|=26,n,m\le 2000$。

首先我们显然可以把 $s$ 的长度补成 $m$，这样可以简洁一些。现在所问的就是

> 有多少个长度为 $m$ 的串 $t$，使得其任何一个循环移位都 $\ge s$。

自然先考虑判定某个具体的 $t$ 是否合法。

我们直接大力把 $t$ 的所有循环移位放在 $s$ 上跑匹配！现在我们让它们一起新增一位 $t_i$，那看起来大概就是这样：

<div style="width:70%;margin:auto"><img src="https://xyix.gitee.io/images/luogu-5404.png" alt=""></div>

注意：如果 $t$ 到这时仍未被证明是非法的，那些尚未被证明 $>s$ 的 $t$，称为候选 $t$，一定都和 $s$ 完全一致。称其中（已匹配的长度）最长者为 $\operatorname{maj}t$，其他所有候选 $t$（已匹配的部分）都是它的 **border**。（联想到 KMP。注意 $\operatorname{maj}t$ 和 $s$ 完美匹配，所以我们实际上可以在 $s$ 上建 KMP。）

那么现在观察新的一位。如果其中有候选 $t$ 新增一位后 $<s$，那么说明非法；否则踢掉那些不再候选的 $t$ 继续看下一位。（$\operatorname{maj}t$ 如果不再候选，我们就要在它的 border 里寻找最长者作为新的 $\operatorname{maj}t$。完全就是 KMP。）

----

于是依托 KMP 建出所欲的自动机：

- 节点表示当前 $\operatorname{maj}t$。
- 从节点 $u$ 走转移边 $c$：在假想中不断跳 border，直到当前节点 $+c$ 会 $\le s$。
- - 如果 $u'+c<s$，那么报告非法。
  - 否则 $u'+c$ 是 $s$ 的前缀，那么 $u'+c$ 就是 $u\xrightarrow{c}$ 转移到的节点。
- 如果找不到，令 $u\xrightarrow{c}$ 回到根。

我们把 $t^2$ 放上去跑就可以了！

不过注意要特判 $t=s$。事实上可以令 $s$ 变为字典序恰好小于它的那个串，这样数的是 $>s$ 的串数，然后令 $|s|+1$ 为非法，就不需要特判了。

----

那么现在回到原问题：有多少串在这个自动机上走始终不会报告非法？

考虑 $t$ 重复足够多次得到的串 $t^{\infty}$。如果 $t$ 合法，$t^{\infty},t^{\infty+1},...$ 的 $\operatorname{maj}$ 必然是相等的。

> 回忆 KMP，KMP 找到的一定是最长匹配串，故 $\operatorname{maj}t^i\le \operatorname{maj}tt^i=\operatorname{maj}t^{i+1}$；而 $\text{maj}$ 显然有上界 $m$。故得证。

所以我们枚举 $\text{maj}$，求有多少个串使得 $\text{maj}$ 按这个串转移能回到 $\text{maj}$。这应该就是该 $\text{maj}$ 对应的 $t$ 的数量。

但 $t$ 可不可能在非 $\operatorname{maj}t$ 的位置产生贡献呢？

> 不能。仍然是回忆 KMP 的意义：如果真有这么一个位置 $u$，那么它后面接 $t^{\infty}$ 一定会把一切有关 $u$ 的信息洗掉。

于是在自动机上 DP 即可通过。（注意每个点不回到根的出边全部重合，总是指向唯一的一个点。）

```cpp
#include<bits/stdc++.h>
using namespace std;

const int p = 998244353;

int n, m; char s[2005];
int nxt[2005], qaq[2005];

int f[2005][2005];

int main() {
	scanf("%d", &m); scanf("%s", s + 1); n = strlen(s + 1);

	qaq[0] = 1; qaq[1] = 1;
	if (s[1] <= s[2]) qaq[1] = 2;
	for (int i = 2, j = 0; i <= n; i++) {
		while (j && s[j + 1] != s[i]) j = nxt[j];
		if (s[j + 1] == s[i]) j++;
		nxt[i] = j, qaq[i] = qaq[j];
		if (s[qaq[i]] <= s[i + 1]) qaq[i] = i + 1;
		if (i == 1) printf("%d %d\n", nxt[i], qaq[i]);
	}

	for (int i = 1; i <= n; i++) s[i] = 'z' - s[i];

	f[0][0] = 1;
	for (int i = 1; i <= m; i++)
	for (int j = 0; j <= n; j++)
		(f[i][qaq[j]] += f[i - 1][j]) %= p,
		f[i][0] = (f[i][0] + 1LL * f[i - 1][j] * s[qaq[j]]) % p;
	
	int ans = 0;
	for (int i = 0; i <= n; i++) {
		int u = i;
		for (int j = m; j; j--) {
			if (!u) {
				(ans += f[j][i]) %= p;
				break;
			}
			u = qaq[u];
			ans = (ans + 1LL * f[j - 1][i] * s[u]) % p;
			if (j == 1 && u == i) ans++;
		}
	}

	int aaaans = 1;
	for (int i = 1; i <= m; i++) aaaans = 26LL * aaaans % p;
	printf("%d\n", (aaaans - ans + p) % p);
}
```
