//因为加了 emoji 所以就不用脚本维护了……会出 bug
(function(win){
	tags_chinese = {}, tags_val = {};
	tags_chinese['combinatorics'] = 'Σ组合数学Σ';
	tags_chinese['generating-function'] = '生成函数';
	tags_chinese['lagrange-inversion'] = '拉格朗日反演';
	tags_chinese['polynomial'] = 'x多项式x';
	tags_chinese['number-theory'] = '🐢数论🐢';
	tags_chinese['min25-sieve'] = 'min25筛';
	tags_chinese['geometry'] = '⚪几何学⚪';
	tags_chinese['lagrange-interpolation'] = '拉格朗日插值';
	tags_chinese['linear-algebra'] = '线性代数';
	tags_chinese['string'] = '字符串';
	tags_chinese['lyndon-tech'] = 'lyndon 科技';
	tags_chinese['linear-programming'] = '线性规划';
	tags_chinese['group-theory'] = '群论';
	tags_chinese['game-theory'] = '♦博弈论♦';
	tags_chinese['set-power-series'] = '集合幂级数';
	tags_chinese['pigeon'] = '🕊鸽掉的文章🕊';
	tags_chinese['young-tableau'] = '杨表';
	tags_chinese['isotonic-regression'] = '保序回归';
	tags_chinese['overall-binary-search'] = '整体二分';
	tags_chinese['offline'] = '离线';
	tags_chinese['nimber'] = 'nimber';
	tags_chinese['d-and-c-on-tree'] = '🌳树分治🌳';
	tags_chinese['construction'] = '💡构造💡';
	tags_chinese['lmoliver'] = '💡明哥题（ad hoc）💡';
	tags_chinese['monotonicity-of-decision'] = '决策单调性';
	tags_chinese['randomization'] = '🎲随机化🎲';
	tags_chinese['interact'] = '交互';
	tags_chinese['exc-inc'] = '容斥';
	tags_chinese['data-structure'] = '数据结构';
	tags_chinese['sqrt-tech'] = '√根号科技√';
	tags_chinese['amortized-analysis'] = '均摊分析';
	tags_chinese['bijective-proof'] = '双射法';
	tags_chinese['writing'] = '⚠正在施工⚠';
	tags_chinese['network-flow'] = '🌊网络流🌊';
	tags_chinese['safe'] = '🤗safe🤗';
	tags_chinese['euclid'] = '😅euclid😅';
	tags_chinese['keter'] = '😨keter😨';
	tags_chinese['apollyon'] = '👿apollyon👿';
	tags_chinese['x-yi-x'] = '👽自制👽';
	tags_chinese['submit-answer'] = '提交答案';
	tags_chinese['graph-theory'] = '图论';
	tags_chinese['dfa-theory'] = '自动机理论';
	tags_chinese['matroid'] = '拟阵';
	tags_chinese['commu'] = "通信";
	tags_chinese['optimization'] = '最优化';

	tags_val={};
	tags_val['combinatorics'] = 1;
	tags_val['generating-function'] = 2;
	tags_val['lagrange-inversion'] = 3;
	tags_val['polynomial'] = 4;
	tags_val['number-theory'] = 5;
	tags_val['min25-sieve'] = 6;
	tags_val['geometry'] = 7;
	tags_val['lagrange-interpolation'] = 8;
	tags_val['linear-algebra'] = 9;
	tags_val['string'] = 10;
	tags_val['lyndon-tech'] = 11;
	tags_val['linear-programming'] = 12;
	tags_val['group-theory'] = 13;
	tags_val['game-theory'] = 14;
	tags_val['set-power-series'] = 15;
	tags_val['pigeon'] = 998244353;
	tags_val['young-tableau'] = 17;
	tags_val['isotonic-regression'] = 18;
	tags_val['overall-binary-search'] = 19;
	tags_val['offline'] = 20;
	tags_val['nimber'] = 21;
	tags_val['d-and-c-on-tree'] = 22;
	tags_val['construction'] = 23;
	tags_val['lmoliver'] = 24;
	tags_val['monotonicity-of-decision'] = 25;
	tags_val['randomization'] = 26;
	tags_val['interact'] = -233;
	tags_val['exc-inc'] = 28;
	tags_val['data-structure'] = 29;
	tags_val['sqrt-tech'] = 30;
	tags_val['amortized-analysis'] = 31;
	tags_val['bijective-proof'] = 32;
	tags_val['writing'] = 998244354;
	tags_val['network-flow'] = 34;
	tags_val['safe'] = -58567;
	tags_val['euclid'] = -58568;
	tags_val['keter'] = -58569;
	tags_val['apollyon'] = -58570;
	tags_val['x-yi-x'] = -998244353;
	tags_val['submit-answer'] = -234;
	tags_val['graph-theory'] = 35;
	tags_val['dfa-theory'] = 36;
	tags_val['matroid'] = 37;
	// tags_val['scp'] = 0;
	tags_val['commu'] = -235;
	tags_val['optimization'] = 38;

	tags_list = [];
	for (var Tag in tags_chinese) tags_list.push(Tag);
	tags_list.sort(function(a, b){ return tags_val[a] - tags_val[b]});
})(document);