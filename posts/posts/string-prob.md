---
title: 字符串题集
---

<center><a href='/posts/posts/string-tech.html'>上回说到...</a></center>

# 最小表示法的进一步讨论

对于 $s$ 的一个后缀 $u$，如果存在一个串 $t$ 使得 $ut$ 是 $st$ 的最小后缀，那么就说 $u$ 是 **Significant** 的。

> **引理 0.** 最小表示法总是 Significant 的。

> **证明.**
>
> 首先说明，如果有多个最小表示法我们只取开头下标最小的一个。（如果没有这个约定就完蛋了……例：``ababab`` 中的 ``abab``+``ab`` 是最小表示法之一但是 ``abab`` 并不 Significant）
>
> 对于最小表示法 $s\left[i:\right]s\left[:i-1\right]$，构造 $t=s\left[:i-1\right]z^{\infty}$，其中 $z$ 是字符集中的最大字符。下面说明 $s\left[i:\right]s\left[:i-1\right]$ 在这个 $t$ 下必定最小。
>
> 未完整出现的表示法全被 $z^{\infty}$ 坑死了；而由于 $i$ 是下标最小的所以完整出现的表示法中没有等于 $s\left[i:\right]s\left[:i-1\right]$ 的；所以剩下的表示法都大于 $s\left[i:\right]s\left[:i-1\right]$，自然也就比不过它。

可见 Significant Suffix 对最小表示法问题的重要性。

然后我们来考虑一个后缀 Significant 的条件。后缀的开头非常重要，所以我们下面用它的开头来代表这个后缀。考虑原串的 Lyndon 分解 $w_1^{k_1}w_2^{k_2}...w_m^{k_m}$。一个后缀如果 Significant，那么它就必须是其中某个 Lyndon Word 的开头。否则显然它一定比不过后者。

更近一步，它还必须是 $w_i^{k_i}$ 的开头。否则，我们来说明 $w_i^{k_i}$ 的开头和 $w_{i+1}^{k_{i+1}}$ 的开头必有其一比它大。只需要证明以下引理。

> **引理 1.**
>
> 对于任意满足 $u^{\infty}<v$ 的串 $u,v$，$v>uv>u^2v>\ldots$。

> **证明.**
>
> 由于 $u^{\infty}<v$ 等价于 $u^{\infty}<uv$，我们只需要证明 $uv<v$。
>
> 令 $v=u^kv'$，基于同样的理由我们只需要证明 $k=0$ 的情况。
>
> 此时必然有 $u\triangleleft v$。这就得证了。

于是记 $s_i=w_{i}^{k_i}w_{i+1}^{k_{i+1}}...$，上面的论述就是证明了

> **定理 1. (Significant Suffixes Theorem)**
>
> Significant Suffix 必须是 $s_i$ 之一。

下面是对 Significant Suffix 的更苛刻要求。

> **引理 2.**
>
> 对于 Significant Suffix $u,v$，如果 $|u|<|v|$，则必有 $u$ 既是 $v$ 的前缀也是其后缀，且 $2|u|\le|v|$。
>
> （注意这立刻得出 Significant Suffix 的数量为 $O(\log n)$。）

> **证明.**
>
> $u$ 显然是 $v$ 的后缀。
>
> $u$ 必须是 $v$ 的前缀，否则 $u,v$ 中较大的一者一定不 Significant。
>
> 如果 $2|u|>|v|$，想象一个在前一个在后的两个 $u$。两个 $u$ 有重叠，说明 $u$ 前面一段和后面一段相等，而这一相等性会因为两个 $u$ 一样而立刻传播开去。
>
> 总之可以推出 $v$ 又一个长度为 $|v|-|u|$ 的周期。于是设 $u=Tu',v=T^2u'$。
>
> 由于 $u$ Significant，那么必定存在 $t$ 使得 $ut$ 最小，那就有 $vt>ut$，但这立即也推出 $ut>u't$，从而 $u$ 不可能 Significant，矛盾。

又是一个很强的结论，但是注意它的使用限制也并不非常松：至少得确定第一个 Significant Suffix 吧。

为了引出更更进一步的结论，我们来考虑下面这个具体问题。

> **题目大意. (【ZJOI2017】字符串)**
>
> 维护一个字符串，字符集为所有整数，要求支持
>
> - 区间加；
> - 询问 $s\left[l:r\right]$ 的最小后缀。
>
> $|s|\le2\times10^5,q\le3\times10^4$。
>
> 时限 $3s$。

首先如果不带修，考虑使用线段树大力维护某区间的 Significant Suffixes。但是我们对 Significant Suffix 的认识显然是不够的，所以考虑记录“Almost Significant Suffixes”，简称 ASS，允许一些不 Significant 的后缀出现在其中，但仍要保证其中的串两两有前缀关系，且长度相差两倍。

下面关注于合并。

所有右区间的 ASS 自然仍然是 ASS。从后到前依次考虑左区间的 ASS，设当前加入的为 $u$，右区间 ASS 的最长者为 $v$：

- 如果 $v<u\left[:|v|-1\right]$，那么 $l$ 一定不 Significant，可以排除。
- 如果 $v>u\left[:|v|-1\right]$，那么 $v$ 一定不 Significant，排除。$l$ 则继续插入。
- 否则 $v=u\left[:|v|-1\right]$，可见的是任何短于 $v$ 的 ASS 也是 $u$ 的前缀，那么下面看长度。
- - 如果 $|u|<2|v|$。必须注意，不管 $u$ 是否 Significant，$v$ 有两次相互重叠的出现已经是事实了，即 $v$ 必不 Significant。删除之，直接把 $u$ 置入。

考虑支持修改，我们的策略是：

- 分块维护哈希值来支持字符串比较。
- 如果区间被完整修改，那么 ASS 不变；但是要一路 pushup 上去。

顺带一提，这题数据水得令人发指……下面这个字符串暴力比较的鬼暴力都能过原题数据。复杂度正确的做法按正常写法一般要三四k，既科技又码量，属实毒瘤。

```cpp
int cmp(int *p1, int *p2, int len) {
	while (len) {
		if (*p1 != *p2) return *p1 - *p2;
		len--; p1++; p2++;
	}
	return 0;
}
struct node {
	int l, r;
	vector<int> lis;
} T[maxn << 2];
void merge(const node &nL, const node &nR, node &ans) {
	ans.lis = nR.lis;
	for (int v : nL.lis) {
		while (ans.lis.size()) {
			int u = ans.lis[ans.lis.size() - 1];
			int flg = cmp(s + u, s + v, nR.r + 1 - u);
			if (flg < 0) goto qaq;
			if (flg == 0) {
				if (2 * (nR.r + 1 - u) > nR.r + 1 - v) ans.lis.pop_back();
				ans.lis.push_back(v);
				goto qaq;
			}
			ans.lis.pop_back();
		}
		ans.lis.push_back(v);
		qaq:;
	}
}
```

另一个有重要启发的题目。

> **题目大意. ([JSOI2019]节日庆典)**
>
> 求 $s$ 的每一个前缀的最小表示法。
>
> $|s|\le3\text{e}6$。

由之前的讨论显然有 $O(n\log n)$ 的做法。注意到最终比较各表示法时可以转化为一个后缀与原串的比较，这正是 Z 函数。这个观察大大减小了该算法的常数，已经可以通过。

```cpp
lis = nlis;
int v = nlis[0];
for (int u : nlis) {
	int p = i - v + u + 1;
	if (p + z[p] <= i)	{
		if (s[p + z[p]] <= s[1 + z[p]]) v = u;
	}
	else {
		p = i - p + 2;
		int len = min(z[p], v - 1 - p);
		if (s[1 + len] <= s[p + len]) v = u;
	}
}
printf("%d ", v);
```

然而还可以继续考虑线性算法。（🕊）

# 本原平方串

> **定义 1.**
>
> $s$ 的一个**本原平方串**是 $s$ 的子串中最小周期为 $|s|/2$ 的串。

可见的是，每个 runs 每截取两个周期都是一个本原平方串。下面这个定理告诉我们，本原平方串的数量不会很多。

> **定理 1. (Three Squares Lemma)**
>
> 若本原平方串 $u,v,w$ 互相有后缀关系，且 $|u|<|v|<|w|$，则 $|u|+|v|<|w|$。
>
> 注意这个结论直接得出本原平方串的数量为 $O(|s|\log |s|)$。
>
> 注意这个结论直接得出所有 Runs 的 $r-l-2p$ 之和的大小为 $O(|s|\log|s|)$。

直观来说，很容易猜到这个结论，但是证明非常复杂，此处不表。

> **引理 3.**
>
> 本质不同的本原平方串是 $O(|s|)$ 的。
>
> **hint.** 只需要证明每个位置最多只会新增两个本质不同的本原平方串；其他的已经统计过了。
>
> 注意上面实际上还证明了，各 Runs 内的本质不同本原平方串之和是 $O(|s|)$ 的，而 $p$ 之和小于等于它，自然也是 $O(|s|)$ 的。

以上引理还可以延伸到

> **引理 4.**
>
> 本质不同的*平方串*是 $O(|s|)$ 的。

但这个我就不会证了……

下面来分析具体问题。

> **题目大意. (【ZJOI2020】字符串)**
>
> 区间询问有多少本质不同的平方串。
>
> $n,q\le 2\times10^5$。

如果没有“本质不同”的条件就好做了，对于某个 run $(l,r,p)$ 它的贡献是在数条直线

- $\left[l:l+2p-1\right]\rightarrow\left[r-2p+1:r\right]$
- $\left[l:l+4p-1\right]\rightarrow\left[r-4p+1:r\right]$
- ……

上 +1。直接二维数点。

那么问题在于本质相同。

最直观地，一个 run 内有一堆相同平方串，具体来说：$[u:u+P-1]=[u+P:u+2P-1]=\ldots$。自然考虑在 $[u:u+2P-1],[u+P,u+3P-1],\ldots$ 上 -1。

最后一个问题，不同 runs 间的本质相同。按左端点排序扫过去，直接记录所有种类的平方串的最右出现，修正一下就好了。可以发现不会有历史最右出现大于本 run 的最左出现的情况。

~~所以 ZJOI2020 Day1 考了两道板题和一道 sb 题，300 不是有手就行？~~

> **题目大意. (【集训队作业2018】串串划分)**
>
> 给出一个串 $s$，你要把它划分为数个串 $s_1s_2...$，满足
>
> - 每个子串不循环（这里是严格循环，周期必须完整）；
> - 相邻的子串不同。
>
> 求划分方案数。
>
> $|s|\le2\times10^5$。

注意到相邻的两个相同子串必定导出一个循环串，这两个条件其实是极有关系的。我们钦定循环串必须按周期划分，这样就只剩下了条件二，而答案不变。

条件仍然极难（完全不可能）直接保证，考虑容斥。易得 DP
$$
f(i)=-\sum_j(-1)^{e(s\left[j+1:i\right])}f(j)
$$
其中 $e(s)$ 是 $s$ 的最大指数，非循环串自然就是 $1$。

自然联想到 Runs。为了方便考量我们关注对 $f(i)$ 产生负贡献的那些 $j$，$s\left[j + 1:i\right]$ 必须是一个平方串，而 **定理 1** 告诉我们怒扫 Runs 是可以的，于是就做完了。

```cpp
#include<bits/stdc++.h>
typedef unsigned long long ull;
using namespace std;

const ull g = 1000003, p_ = 998244353;
const int maxn = 200005;

int n;
char s[maxn];
ull hsh[maxn], powg[maxn];
ull gethsh(int l, int r) { return (hsh[r] - hsh[l - 1] * powg[r - l + 1] % p_ + p_) % p_; }
int lcp(int u, int v) {
	int L = 0, R = min(n - u + 1, n - v + 1);
	while (L != R) {
		int mid = (L + R + 1) >> 1;
		if (gethsh(u, u + mid - 1) == gethsh(v, v + mid - 1)) L = mid;
		else R = mid - 1;
	}
	return L;
}
int lcs(int u, int v) {
	int L = 0, R = min(u, v);
	while (L != R) {
		int mid = (L + R + 1) >> 1;
		if (gethsh(u - mid + 1, u) == gethsh(v - mid + 1, v)) L = mid;
		else R = mid - 1;
	}
	return L;
}
int cmp(int ul, int ur, int vl, int vr) {
	int len = lcp(ul, vl);
	if (len >= ur - ul + 1) return ur - ul - (vr - vl);
	return s[ul + len] - s[vl + len];
}

const int p = 998244353;
struct RUN {
	int R, P, S;
}; vector<RUN> Q[maxn];

set<ull> qaq;

void getRuns() {
	powg[0] = 1;
	for (int i = 1; i <= n; i++)
		hsh[i] = (hsh[i - 1] * g + s[i] - 'a' + 1) % p_,
		powg[i] = powg[i - 1] * g % p_;
	int CFL[maxn], cnt = 0;
	int LA[maxn];
	for (int i = n; i; i--) {
		CFL[++cnt] = i;
		while (cnt > 1 && cmp(i, CFL[cnt], CFL[cnt] + 1, CFL[cnt - 1]) < 0) cnt--;
		LA[i] = CFL[cnt];
	}
	for (int i = 1; i <= n; i++) {
		int l = i, r = LA[i], L = l - lcs(l - 1, r), R = r + lcp(l, r + 1);
		if (R - L + 1 >= 2 * (r - l + 1) && !qaq.count((ull)R * n + L)) {
			qaq.insert((ull)R * n + L);
			int P = 2 * (r - l + 1);
			for (int i = 0; i < P; i++) if (L - 1 + i + P <= R)
				Q[L - 1 + i].push_back((RUN){R, P, 0});
		}
	}
}

int f[maxn];

int main() {
	scanf("%s", s + 1), n = strlen(s + 1);
	
	getRuns();
	for (int i = 1; i <= n; i++) s[i] = 'z' - s[i] + 'a';
	getRuns();
	
	int sum = 1;
	for (RUN r : Q[0]) if (r.P <= r.R) Q[r.P].push_back((RUN){r.R, r.P, (r.S + 1) % p});
	for (int i = 1; i <= n; i++) {
		f[i] = sum;
		for (RUN r : Q[i]) f[i] = (f[i] - 2 * r.S % p + p) % p;
		sum = (f[i] + sum) % p;
		for (RUN r : Q[i]) if (i + r.P <= r.R) Q[i + r.P].push_back((RUN){r.R, r.P, (r.S + f[i]) % p});
	}
	printf("%d\n", f[n]);
}
```
