(function(win){
    'use strict';
    const DAILY_MESSAGES=[
        //致敬
        //挑战：你能找出其中每一个典故的出处吗？
        'IMOliver&喝喝粥 分杯NOI2021',
        '拒绝虚假的膜拜，也拒绝真诚的膜拜（恼）',
        '你强归你强，Siyuan 比你强',
        '你不能通过按住 Enter 来快速点击一个按钮。',
        'Siyuan 是我们的红太阳，没有她我们会死！',
        '这肯定是全世界最烂的博客……不管怎样，x_Yi_x\'s Blog 欢迎您！',
        '欢迎来到 x_Yi_x 的博客！希望我们能相互交流，共同进步～',
        'hehezhou 的小粉丝，姓叉，就叫 x义x 吧',
        'hehezhou 的小粉丝，姓叉，就阿 hehezhou 吧',
        'I could not have endured darkness even if I had never seen the sun.',
        'Summation, Counting, Polynomial.',
        '用一生证明 一个永恒的美丽',
        '在线博客系统 新版上线 x_Yi_x\'s Blog since 2020',
        //传 世 经 典
        '《草，为什么倒计时结束又是一个倒计时》',
        '《瑞安牛娃！安阳实验中学这些学子前途无量啊》',
        '《来自江山的这位教师很神奇，把 120 名学生送进清华北大》',
        '《才读初二，这个男生就被清华大学预录取，他是怎么做到的》',
        '《扮演一朵能走路的向日葵，憨态可掬》',
        '《说到这里，周航锐眼里闪着光，充满憧憬》',
        '《围棋滑板样样精通，小小年纪当上小老师》',
        //对联
        '上联：瑞安牛娃前途无量 / 下联：华夏龙裔后代有光',
        '上联：围棋滑板样样精通，小小年纪当上小老师 / 下联：学艺技术般般博览，高高境界可称高视野',
        '上联：对不起，由于初试爆零，您无法查看题解，请下次努力 / 下联：想得开，却是一时失败，我有意打破关系，要后来做人',
        '上联：尖塔艾撒细胞元气，样样精通 / 下联：老树花开大地春光，般般美丽',
        '上联：拉扶梯不行 / 下联：走过桥方稳',
        //吐槽
        '今天也是x义x被卡常的一天',
        '网页开发怎么这么难啊啊啊啊啊',
        '群众的阿鲁巴是雪亮的',
        '数数是好的，并且没有任何坏处',
        'x义x想不出更多一言了',
        '如果你看到这条一言时文章一览里已经有了一篇标题为“AFO”的文章，请记住x义x……',
        '瑇是毛夫',
        'x义x是毛岳父',
        '据说x义x的常数比别人大一个 omega',
        '网义云音乐里的那些歌真的很好听啊！',
        '2020/10/3：x义x 又在模拟赛上只会 T1',
        '2020/10/4：x义x 又在模拟赛上一道题都不会',
        '2020/10/5：x义x 被 T1 虐杀，没写出 T2，被 T3 虐杀',
        '2020/10/7：x义x 又不会单调队列了',
        '即使被生活雷普，也要随时准备 一 转 攻 势',
        'Q：x义x 最常去的地方是？ A：满分提交 - 最慢。',
        'loj 没有最慢榜了，爷的青春结束了',
        '你当然可以直接 F12 然后看生成一言的 js。但是不断按 F5 看看有什么新的刷出来也别有一番趣味，不是吗？',
        '没用的 数学没前途 你数学再好 CCF 不考白搭',
        '越是追求抽象，越是发觉自己只能用具体的例子才能理解抽象的理论……我不做人啦，JOJO！',
        '得癌症去世了肯定是你的问题，别人怎么都撑下来了？还不是意志力！还不是你不努力！',
        //奇妙bug/翻译
        'x锟斤拷x 锟斤拷锟斤拷锟斤拷 BLOG',
        '快速计算方法 问题方案 多项目类型,Rakuraro Nikki',
        '胜井胜井发电功能 算术/知识 生成函数,数论',
        'Oura-Mugi Katsumi Hayashi数值指导 算术/知识 生成功能',
        'Uenmy 22:00 Boundary我今天不想睡了',
        '如果你要消失了，我会一次又一次给你打电话',
        '月光微弱，庄重，令人羡慕，最后一跳，拍手',
        '“你很狡猾。”别说任何喜欢的晚安',
        '你渗透了！',
        '您会看到，在两个星系（恒星）中，甚至水和黄金，地上的火，木头，地球和海洋都是灿烂的！',
        '你可能以为 ×√OI 题目列表的逻辑是和文章列表一样的，其实它是和标签列表一样的。',
        //中二病发
        '世界的神秘在我眼前展开——可我却要止步于此。',
        '世界仿佛一台离心机。等到这一切的混乱和眩晕结束，你留下的思想结晶会是什么？',
        '曾经以为我们有相似的地方，后来才发现是平行线的同位角啊。',
        '这些人没有同情心的吗？那我可真同情他们。',
        '离谱的比喻和根本不适用的“人生经验”什么的真的很讨厌啊。',
        '避群星而行之旅……那样的故事，明明听起来很好啊。',
        '你的勇敢无人知晓，你的坚持引人发笑。',
        'x义x 的人生目标：1. 机械化身体；2. 符号化思想和情感；3. 去月球。有趣的是，把它们倒过来就是 x义x 最讨厌的东西。',
        'Surprising Combinatorial Proof',
        '知不可乎骤得　托遗响于悲风',
        '爱是如此沉重以至于我只想把它们扔进垃圾桶',
        '他们以为一切事情只要赔钱了事就好……',
        '如今我们已陷入符号的包围，用符号指代符号，用隐喻暗示隐喻，每一句话皆有典可循，每一条消息皆有梗可查。',
        '即使爱与梦想说的再光鲜亮丽，这种行径也着实令人恶心。',
        '他们真的爱我吗？还是说，我只是用来进行仪式的必要祭品？',
        '为什么我们能承认人不吃饭就会死，却拒绝承认精神上的需求是必要的？',
        '每一天都和前一天一模一样。',
        '你有什么资格这么对我颐指气使？就凭你运气好比我早生了十几年吗？',
        '康德说道德是对与自己相同的理性存在的尊重，那么，你该如何证明你是与我相同的理性存在？我越来越难以坚信这一点了。',
        //冷知识
        '十二重计数法的英文名是 twelvefold path，是佛教用语“八圣道 eightfold path”的魔改。',
        'wqs 二分在国外叫做 Aliens\' trick，得名于 IOI2016 Aliens。',
        'Tutte 多项式刚被发明时，由于是色多项式的二元扩展，所以 Tutte 希望它的名字里有“色”“双重”。于是 Tutte 把它命名为了“重铬酸盐”。',
        //膜拜
        '我最喜欢的古人是苏轼，我最喜欢他《江城子·密州出猎》中的“会挽雕弓如满月，西北望，射天狼”，我能从中感受到他那种豪'+
        '迈的气概，我也想迫切地感受这种豪迈的气概',
        'あなたはステラ　僕は瑇！',
        //歌词
            //Andromeda Andromeda
            'Andromeda Andromeda　答えておくれ　あなたとわたし　永久に逢えないの',
            'Andromeda Andromeda　気づいておくれ　彼方の宇宙であなたに恋してる',
            'Andromeda Andromeda　忘れておくれ　あなたと宇宙は本当によく似てる',
            //飞行少女
            'Baby Baby　それでも飛んだ　あなたと夜をこえて　この手を　離したくないだけ',
            'You and me　22時の境界　安全圏からも抜け出して　今日はもう　眠りたくないだけ',
            //Strato Stella
            '「もしも、わたしが明日死んだら　全ての光が　なくなってしまいますように」',
            '街は　街は　淡い黄昏 / 空は　空は　朱色に染まる',
            'もしも彼女が　世界を愛していたら　そんなことを、そんなことを、考えてたよ',
            //How to warp
            '月のない夜にあなたに急接近',
            '赤い光が左へ急旋回',
            'HOW TO WARP　今あなたの星まで / WARP TO WARP　すぐに跳んでゆくから',
            'HOW TO WARP　まだあなたの星まで / WARP TO WARP　少しだけ遠いの',
            'HOW TO WARP　でもわたしは知らない / HOW TO LOVE　おしえてくれたら',
            'HOW TO WARP　ずっとあなたが知らない / HOW TO LOVE　おしえてあげるよ',
            //水星华尔兹
            '天気予報はもうすぐ雨か　長くなりそうだ',
            '笑って　笑って　さいごにワルツを踊ろう / この星なら、涙も見えないように泣けるから',
            '「思い出すこと、二度とないかな　忘れること、できやしないから——」',
            '——忘れないから',
            //Mystery Cycle
            '自転車　海岸線　走る　走る / 「少しかわってよ！」　ぼくは言う',
            'とおくの日が落ちる　落ちる / 知らずに手と手が触れている',
            '光の真相へ　あと数10メートル / ぼくらが見たものは——',
            '夏が終われば　こんな旅も　もう、できなくなるから',
            '夏が終わる。どうか、ずっとお元気で。',
            //Alien Alien
            '眼光　赤色にキラキラ　ナニカが起こる胸騒ぎ',
            'Alien　わたしAlien　あなたの心を惑わせる',
            'Searchlight　避ける浮遊機　「まだあなたは全てを知りたい？」',
            'Alien　あなたのAlien　触れあえば傷は二度と消えない',
            'Alien　ふたりはAlien　高鳴る気持ちが抑えられない！',
            'あなたは未確認生命体！　異世界の果てまであなたが　好き',
            //行星环
            '心があなたで鳴っている　それだけが確かだ　それだけでいいよ。',
            'そこに大体、愛が在るだけ',
            //太阳系 disco
            '星が舞っちゃって　胸が鳴っちゃって　気付けば彼方——',
            '何もなくたって　何となくだって　星は巡って——',
            'あなた侵光系！',
            'ほら水金だって地火木土天海も　ふたりの銀河で綺羅めいた、星ッ！',
            //月光 music
            '今だ銘々光れ　結構、月光のLightは明るい', '凛々と生命照らす閃光　絶好のチャンス　手を叩きましょう',
            '感傷に銘々浸れ　結構、月光のLightは優しい', '凛々と生命照らす閃光　絶頂ロマンス　手を叩きましょう',
            '再三に銘々光れ　結構、月光のLightは短い', '凛々と生命望む羨望　最後のダンス　手を叩いてよ',
            'キュンキュン鳴るわたしの感情に　制御はきかない', '太陽の様に遠きあなたへ　ただ、響いてミュージック！',
            'キュンキュン鳴るわたしの感情に　終点はみえない', '太陽の様に遠きあなたへ　ただ、響いてミュージック！',
            'キュンキュン鳴るわたしの感情を　受けとめて', '太陽の様に違うあなたに　ただ、届いてミュージック!',
            //彗星蜜月（似乎是 Rocket Cider 对偶曲）
            'キラキラ光る流星群　わたし想うは\'我爱你\'', '星のまにまに逃避行　嗚呼、そんなstoryも　悪くないのさ',
            'neonの街からpreview　月世界までwon\'t be long', 'あの星の名も忘れたの　満つ月の飛行',
            '動かない信号の赤色　月世界まで\'我爱你\'', 'Moscowの海が旅の終わり　そこでお别れさ',
            '彗星honeymoon　あなたとrendezvous　恋しているのさ　ふたり',
            '彗星honeymoon　果てまでrendezvous　そうさ今だけはふたり',
            '愛してmon amour　いっそ、ふたりきり　どっか遠くへいこうか',
            '愛してmon amour　由縁なんてなくても　いいよ遠くへいこうか',
            'ねえきいてmon amour　片道切符でも……　いいですよ？',
            '曖昧なairline　言葉はいらない　やっと出逢えた　あなたと',
            '夜が明けたら　何処へいこうか？　永久に出逢えぬ　あなたと',
            '星巡り　繰り返し　目指すは宇宙の　終着点さ',
            '星巡り　繰り返し　目指すは夢の　出発点さ',
            //晨星银河号
            '見上げた　(あなたの)　瞳が　(宇宙が)　キラキラって光る',
            'わたしの　(あなたの)　鼓動が　(鼓動が)　ドキドキって疾はやる',
            'ふたりの　(銀河で)　手と手が　(星と星が)　交わって恋は Galactica',
            '最後の　(夜明けは)　手と手が　(星と星が)　ほどけて君は Galactica',
            'いつだって愛は Romantica',
            //星之王子
            '星は輝いて　物語は続いてた',
            '鐘鳴らせディンドンディンドン　キミの愛せる世界まで',
            '願い届けディンドンディンドン　闇を裂いてキミの手を取ろう',
            'キミが姫ならボクは王子　まあるい宇宙　手を繋いでよ / キミの知らない世界	ボクが連れ出してみるよ',
            'キミが姫ならボクは王子　閉ざした宇宙　助けを呼んでよ / もしもキミが消えそうなら　何度でも呼ぶよ',
            //金星之舞
            'あー　ぼくはもう夢中さ / なんて　すばらしい世界だ / きっと　今なら軽率に　恋すらはじまりそう！',
            'あー　ぼくはもう悟ったんだ / どうせ　かりそめの世界さ / これ、気づいてるぼくだけが　特別になり得そう！',
            '金星のDanceを踊りたい',
            'でもなんだかんだ難しい',
            '金星のDanceは恥ずかしい',
            '金星のDanceをやめにしたい',
            '傍から見れば可笑しな踊りとは　知りながら　Dance＆Dance',
            'ねえ　ぼくにもStep教えて頂戴！ / えっ？　無理ですか　そーですか',
            'あなたはぼくと踊ってくれますか？ / えっ！　今ならいーんですか？',
            'この曲が終われば　誰が誰？ / 金星のDanceで　All day all night！',
            //猫猫的宇宙论
            'ちゃんと愛しあう術は　ここには無い……　あなたに触りたい！',
            'にゃんにゃん　いざ！宇宙であなたとにゃんっ！　「今は、わたしを見てね」',
            'あなたと出逢った理由を探してみるからさ　目を逸らさないで！',
            'にゃんにゃん　解ったような顔してにゃんっ！　「もっと、わたしを愛してね」 / ずっとずっと愛してね',
            //乙女座流星群
            'あの変光星で　乙女心は乱高下　吹き荒れるは流星群',
            '愛してるって一回　ただ一回　あなたからくれたら　あたし　もっとあげるのに',
            'ふたり愛しあう合図を　ききたいの　あなたのほうから　勘違いって思ってる？',
            'この視線やこの熱は　理由があるって気付いて　いますぐ！',
            '愛してるならもっと　いや、ちょっとでも　勇気出してくれたら　あたしの全部あげるよ　ねぇ',
            //木星节拍
            '木星のbeatに乗っかって　君と宇宙へ行こう',
            '木星のbeatに乗っかって　君と夢中で踊ろう',
            //银河电灯
            '銀河の明滅　青いライト　最終の列車　ふたりぼっちだった',
            '見えない空　濁った瞳　光った星に　迷った夜に　暗い世界　今は小さく見えた',
            'ふたり　眺める車窓　夜のむこう　光の海　Panoramaがslide',
            '消さないで　消えないで　「どこまでもずっと一緒だよ」',
            'きみは銀河のむこう指さして　「みて、綺麗な世界だよ」と言った',
            'おかしいな　ぼくにはなんにも見えやしないんだ',
            'きみは星屑までも飲み干して　ぼくに小さく笑った',
            'きみは一瞬だけの永遠に　ぼくの永遠だけが一瞬に',
            '最期の電燈　そこに淡い世界が浮かんだ　そこできみの涙をみたんだ',
            //蓝色极星
            '夜空を(夜空を) 浮かんで(浮かんで)　キミとまた巡り逢う',
            'ただいま(ただいま) おかえり(おかえり)　ふたりごとは星になって',
            //四有
            '人の子も　どの子も　生まれが総て　宝籤外せば　孤独と無力',
            'THIS IS LIFE (WOW!)',
            '最低の犠牲者に愛を——',
            'どうしてこれをつくったの',
            'どうしてここまでほうっておいたの',
            'どうしてこのこをうんだの',
            'どうしてそこにうまれてしまったの',
            //bitter choco decoration
            'bitter choco decoration　兎角言わずにたんと召し上がれ',
            'bitter choco decoration　食わず嫌いはちゃんと直さなきゃ',
            //String Theocracy
            'Maybe we\'re all cold machines / stuffed in the human skins / with human sins',
            //Wildfire
            'my lungs are failing from inhaling / all the charcoal from this circle / of the hate and the lies',
            'Deny, Ignite, and Close · Your · Eyes.',
            'But I\'m a PYROMANIAC / and your veins are full of gas',
            'you\'re / burning higher, higher / I\'m storming this wildfire',
            //Echo
            'What the hell\'s going on / can someone tell me please / why am I switching faster than the channels on TV',
            'I am black then I\'m white / No! something isn\'t right / my enemy\'s invisible I don\'t know how to fight',
            'The trembling fear / is more than I can take / when I\'m up against / the echo in the mirror',
            'I\'m gonna burn my house down into an ugly black',
            'I\'m gonna run away now and never look back',
            //Let the maggots sing
            'Let the maggots sing / A tiny little song / Tiniest voices sang all night long',
            'Let the maggots sing / No audience to be found / Muted voices sang all life long',
            'Let the maggots dream / No matter right or wrong / Let us dream on, dream on',
            'Is this where I belong? / The furthest I could have gone?',
            //Sloth
            'Wanna escape? Somewhere far away.',
            '\'Cause everyone wants to be a judge / They\'ll never admit that you\'re enough',
            'Pretend there\'s no one around but yourself / See? In the mirror / There\'s a sloth.',
            'Can\'t you hear the cries / Coming from the mirror? / There\'s a sloth.',
            'With an awkward blackened smile / It\'s fine you can\'t love yourself / But can\'t you love a sloth?',
            'And the whole thing made me extremely sad / I thought / \'How long will the future last?\'',
            //utopiosphere
            'Step through the gate into utopia',
            'Sink into a world of melodia',
            'Tick, tock / Time doesn\'t stop / Prepare, your doubts, eat them up',
            'The sky is painted in lunacia / Florets slashed open the vein of tears',
            'Misfortuna / There is no escape, my dear',
            'The world undergoes photosynthesia / Transform endless anger to ecstasia',
            //children of the city
            'the children of the city see only the neon stars',
            'don\'t ask me why / I desperately wish to be included in the city\'s night',
            'don\'t ask me why / I desperately wish to be noticed by the city\'s eye',
            'Do not go home until you finish reading the value of e',
            //sustain++
            'If abstraction is the definition of beauty / Are those of us chasing after clarity'+ 
            '/ a representation of ugly?',
        //游戏 / 动漫 / 基金会名句
        'Fate Chosen',
        'Reroll Your Destiny',
        'Blood Laser Barrage',
        'I feel all', 'I know all', 'I am all',
        '不！熊！！！',
        '高塔沉睡了，那我也该睡了……',
            //jojo
            '我是罗大佑，看着我 / 他是曾志伟，二姑妈你说摸裤头，骑着俺的金坷垃',
            '这次我敢去摸内裤 / 三大姨你探亲不看我',
            '你最大的罪恶，就是压根都不认为自己是『罪人』……那才是最『万恶不赦』的。',
            //基金会
            '太阳熄灭了。',
            '天堂就是地狱 / 地狱就是天堂 / 生命如此美好',
            '通道的顶端、永无止尽的大厅、无处不在的光。走啊走啊直到心也碎裂。',
        //迫害CF/XJ
        'Codeforces infrastructure is temporarily unavailable, we are working on fixing it.',
        'Rating changes for the last round are temporarily rolled back. They will be back soon.',
        '对不起，由于初试爆零，您无法查看题解，请下次努力',
        'ABNORMAL',
        'ACCESS DENIED',
        'RUNNING',
        'MEMORY LIMIT EXCEEDED',
        'Believe there is a great power silently working all things for good',
        '为什么不去看看 ×√ 日报呢？',
        '今天你 AC 了吗',
        '跑步！！！起来跑步！！！',
        '抓紧时间洗漱！！！',
    ];
    win.Write_Daily_Message = function (data){
        let message_box=document.createElement('center');
        let message_title=document.createElement('h3');
        message_title.textContent="一言";
        let daily_message=document.createElement('p');
        daily_message.textContent=DAILY_MESSAGES[Math.floor(Math.random()*DAILY_MESSAGES.length)];
        message_box.appendChild(message_title);
        message_box.appendChild(daily_message);
        data.appendChild(message_box);
    }
})(document);