// ===================== 1. 剧情节点总配置 =====================
const storyNodes = {
    // 初始节点
    start: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;晚上九点多，你揉着发酸的眼睛，手指点下手机屏幕上的“晋江评论区”，长长舒了口气——《无限旅游团》最新一章终于更了，又暴露了许多主线剧情！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正当你沉浸在剧情分析中时，指尖突然传来一阵强烈的电流感，屏幕瞬间黑屏，紧接着，一道冰冷又机械的声音，直接在你脑海里响起：“检测到用户为《惊悚旅游团》核心追更者，追更时长x年，累计阅读x天，触发小说连载五周年专属惊喜——穿越至小说世界，绑定‘追更者福利系统’。”<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“请选择你的降落地点：”",
        choices: [
            {
                text: "1.归途旅队驻地",
                nextNode: "guitu_travelteam",
                life: 0,
                san: -2,
                trust: 0,
                complain: 0,
                clue: +3
            },
            {
                text: "2.虚拟大厅",
                nextNode: "afterAlley",
                life: 0,
                san: -1,
                trust: +2,
                complain: 0,
                clue: 0
            },
            {
                text: "3.随机降落",
                nextNode: "random_drop",
                life: 0,
                san: -9,
                trust: 0,
                complain: 0,
                clue: 0
            }
        ]
    },

    // 分支1：选择归途旅社
    guitu_travelteam: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你满怀希望地降落在归途旅社驻地，这种莫名其妙的大变活人的出场方式使得归途众人对你满怀戒备，看着他们严肃地盯着你，<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你说：",
        choices: [
            {
                text: "“额……我说我不是故意的，你们信吗？”",
                nextNode: "one_1",
                life: 0,
                san: -2,
                trust: +3,
                complain: +8,
                clue: 0
            },
            {
                text: "“我可以解释的！”于是你尝试用真诚的语言打动他们。",
                nextNode: "one_2",
                life: 0,
                san: -2,
                trust: +2,
                complain: +1,
                clue: +1
            },
            {
                text: "看着书里的人物出现在眼前，你露出满意的笑容，并且秉持着“只要你不尴尬，尴尬的就是别人”的心态，选择直接加入他们今天的团队活动。",
                nextNode: "omplainFullEnd",
                life: +1,
                san: -5,
                trust: +5,
                complain: +10,
                clue: 0
            }
        ]
    },

    // 1.1归途旅社-不是故意的
    one_1: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;旅队驻地里仍然无人理你，又过了几秒，才堪堪有人接话让你不至于太过尴尬。是的，即使是你这样小说妹碰到这么不靠谱的出场方式也会感到十分尴尬。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;率先说话的是汪玉树，听着他还算符合原著小说里的发言口吻讲话，你松了一口气，正当你吐露出自己的来历时，背后传来一阵靠近的脚步声。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是？！",
        choices: [
            {
                text: "旅客打扮的卫洵",
                nextNode: "tourist_weiXun",
                life: 0,
                san: +1,
                trust: +2,
                complain: 0,
                clue: +2
            },
            {
                text: "导游打扮的卫洵",
                nextNode: "guide_weiXun",
                life: 0,
                san: 0,
                trust: -2,
                complain: +1,
                clue: -1
            },
            {
                text: "安雪锋",
                nextNode: "anXueFeng1",
                life: 0,
                san: 0,
                trust: -1,
                complain: +1,
                clue: 0
            }
        ]
    },

    // 1.2归途旅社-可以解释的
    one_2: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你试图用真诚的语言打动他们，但旅队众人似乎并不买账，身为身经百战的大旅客们，你莫名其妙地出现在归途驻地，已经让他们怀疑你是......<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正当你不知所措地站在那里时，你的身后传来一阵靠近的脚步声。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是？！",
        choices: [
            {
                text: "旅客打扮的卫洵",
                nextNode: "tourist_weiXun",
                life: 0,
                san: +1,
                trust: +1,
                complain: 0,
                clue: +1
            },
            {
                text: "导游打扮的卫洵",
                nextNode: "guide_weiXun",
                life: 0,
                san: +1,
                trust: +2,
                complain: 0,
                clue: -1
            },
            {
                text: "安雪锋",
                nextNode: "AnXueFeng1",
                life: 0,
                san: +1,
                trust: +3,
                complain: +1,
                clue: +1
            }
        ]
    },

    tourist_weiXun: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你猛地回头，看到了一个巧克力发色的青年，仔细看，左侧还有一缕纯白的发丝，被他捋到耳侧。纯黑的眼睛弯弯的，带着一丝笑意。你不太确定地喊了声“卫洵？”，他抬头看了你一眼，嘴角微微上扬：“你是？”<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他的发声彻底让你放下惊慌，这次你决定透露一些你在原文里看过的细节，试图获取他们的信任。",
        choices: [
            {
                text: "你选择大声朗读《笑话大全》。",
                nextNode: "bring",
                life: 0,
                san: +3,
                trust: +2,
                complain: +1,
                clue: 0
            },
            {
                text: "你选择尝试按顺序说出他们过的旅程，通过他们的表情判断目前剧情进展到哪里了。",
                nextNode: "bring",
                life: 0,
                san: +1,
                trust: +3,
                complain: +1,
                clue: 0
            }
        ]
    },

    guide_weiXun: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你猛地回头，看到了一个身披斗篷的青年，仔细看，微微露出来的纯白的发丝，已经暴露出了他的身份。你不太确定地喊了声“卫洵？”，他抬头看了你一眼，刚刚轻松的氛围全然消失，在紧张之下，你听到他说：“你是？”<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你突然意识到，或许现在的归途众人并不是都知道卫洵的真实身份！",
        choices: [
            {
                text: "你被安雪锋带走了",
                nextNode: "bring",
                life: 0,
                san: +1,
                trust: +2,
                complain: 0,
                clue: +2
            }
        ]
    },

    anxuefeng1: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你猛地回头，看到了一个男人，他高大挺拔，短发利落，虎背蜂腰，一身黑色作战服，军裤军靴，背着归途刀。你一下子就认出他了，脱口而出就喊出声来“安队！”",
        choices: [
            {
                text: "他看出来了你的手足无措，你被安雪锋带走了",
                nextNode: "bring",
                life: 0,
                san: +1,
                trust: +2,
                complain: 0,
                clue: +2
            }
        ]
    },

    bring: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经过一番交流，卫洵和安雪锋都觉得你这个突然冒出来的“读者”有些可疑，虽然你试图解释，但还是选择相信你的大部分说辞。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他们看出来了你的确不是一个心思深沉的敌人，与其冒着风险让你在旅社里流浪，还不如把你留在驻地里。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“正好我们要在驻地里团建，你也加入我们吧。”卫洵说着，带着你走向驻地的活动区域。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你获得了：",
        choices: [
            {
                text: "一张安洵cp合照",
                nextNode: "anxun_cp_photo",
                life: 0,
                san: +1,
                trust: +2,
                complain: 0,
                clue: +2
            },
            {
                text: "一张归途大合照",
                nextNode: "guitu_photo",
                life: 0,
                san: +1,
                trust: +2,
                complain: 0,
                clue: +2
            },
            {
                text: "一张自己在归途驻地的照片，身后的卫洵和安雪锋都在照片里",
                nextNode: "self_photo",
                life: 0,
                san: +1,
                trust: +2,
                complain: 0,
                clue: +2
            }
        ]
    },

    // 1.3归途旅社-过于沙雕，直接触发沙雕值满10的结局

    // 分支2：选择虚拟大厅
    afterAlley: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;你突然降落在旅社的虚拟大厅里，瞬间就受到了来自四面八方的恶意与好奇。大厅没有因为你的到来而改变什么，但是你能明显地感觉到这里的气氛非常诡异。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在紧张之下，你决定：",
        choices: [
            {
                text: "默不作声地躲在一旁，等待机会离开这里，或者尝试打探消息",
                nextNode: "end1",
                life: +1,
                san: -1,
                trust: +2,
                complain: +1,
                clue: 0
            },
            {
                text: "大胆发声：“原来这就是旅社！”",
                nextNode: "end2",
                life: -1,
                san: 0,
                trust: +3,
                complain: 0,
                clue: +1
            },
            {
                text: "装神弄鬼，故作高深地用着不大不小的音量说：年末庆典了，我也得来凑凑热闹。”",
                nextNode: "end3",
                life: -1,
                san: 0,
                trust: +3,
                complain: 0,
                clue: +1
            }
        ]
    },

    // 分支3：选择随机降落
    random_drop: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;你被随机传送到了一个污染极重的景点，周围环境诡异，还不等你反应过来观察四周，san值狂掉的感觉已然让你无法思考。<br>&nbsp;&nbsp;&nbsp;&nbsp;此时，你看到了：",
        choices: [
            {
                text: "卫洵",
                nextNode: "WeiXun", 
                life: 0,
                san: 0,
                trust: +2,
                complain: 0,
                clue: +3
            },
            {
                text: "安雪锋",
                nextNode: "AnXueFeng", 
                life: 0,
                san: 0,
                trust: +1,
                complain: 0,
                clue: +3
            },
            {
                text: "自家产品",
                nextNode: "happy_end",
                life: -9,
                san: +9,
                trust: +1,
                complain: +10,
                clue: +3
            }
        ]
    },
   

    // ===================== 结局节点 =====================
    anxun_cp_photo: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;你获得了一张安洵的cp照片！你的脸上不自觉地露出姨母笑，内心里的小人正在四处欢乐地撒泼！<br>&nbsp;&nbsp;&nbsp;&nbsp;【结局：你吃了一餐极其丰盛的安洵cp饭，你幸福地沉入梦乡，迷迷糊糊中听到了“‘追更者福利系统’任务圆满达成！”恭喜你获得了“幸福的安洵cp粉”的称号！】",
        choices: []
    },
    guitu_photo: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;你获得了一张归途众人的大合照！你的脸上不自觉地露出姨母笑，内心里的小人正在四处欢乐地撒泼！<br>&nbsp;&nbsp;&nbsp;&nbsp;【结局：你吃了一餐极其丰盛的群像饭，虽然有点遗憾没能看到其他“熟人”，但是你仍然幸福地沉入梦乡，迷迷糊糊中听到了“‘追更者福利系统’任务圆满达成！”恭喜你获得了“幸福的归途粉”的称号！】",
        choices: []
    },
    self_photo: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;你获得了一张自己的大头照！他们都站在你的身后呢！<br>&nbsp;&nbsp;&nbsp;&nbsp;【结局：你获得了此生最难忘记的合照！恭喜达成“梦幻同框”的成就！】",
        choices: []
    },


    end1: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;还没等你发挥聪明才智，你就被人打了一闷棍了。<br>&nbsp;&nbsp;&nbsp;&nbsp;【结局：一觉醒来，你头疼欲裂，只记得做了一个简短的梦，梦里迷迷糊糊听到了“...失败”，你不以为然，醒来还是继续点开晋江文学城app。恭喜获得“执着的追小说妹！”称号！】",
        choices: []
    },
    end2: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;周围诡异的气氛褪去，取而代之的是<br>&nbsp;&nbsp;&nbsp;&nbsp;【结局：一觉醒来，你发现你已经回到了现实，你追悔莫及，但是五周年庆已经结束啦！恭喜获得“绝望的小说妹”称号！】",
        choices: []
    },
    end3: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;你的打扮和故作深沉成功引起了一些旅客的注意，或许你可以借此接触到自家的产品！<br>&nbsp;&nbsp;&nbsp;&nbsp;【结局：未完待续】",
        choices: []
    },



    WeiXun: { 
        text: "&nbsp;&nbsp;&nbsp;&nbsp;理智失控之前，你好像看到了卫洵，但很可惜这不过是你的幻想罢了。【结局：解锁“卫洵的死忠粉”称号】",
        choices: []
    },
    AnXueFeng: { 
        text: "&nbsp;&nbsp;&nbsp;&nbsp;理智失控之前，你好像看到了安雪锋，但很可惜这不过是你的幻想罢了。【结局：解锁“安雪锋的死忠粉”称号】",
        choices: []
    },
    happy_end: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;顿时一种回光返照的感觉侵袭了你的全身！<br>&nbsp;&nbsp;&nbsp;&nbsp;【结局：触发隐藏彩蛋，san值暴涨，沙雕值暴涨，解锁“快乐的同人女！”】",
        choices: []
    },

    // 特殊结局（数值触发）
    deathEnd: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;你的生命值归0，眼前的黑暗迅速吞噬一切，最后只听到周围人焦急的喊声......<br>&nbsp;&nbsp;&nbsp;&nbsp;【结局：意外死亡，游戏结束】",
        choices: []
    },
    sanBreakEnd: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;你看着眼前扭曲的场景，理智彻底崩塌，再也分不清现实和诡异的界限。最后只听到周围人焦急的喊声......<br>&nbsp;&nbsp;&nbsp;&nbsp;【结局：理智崩坏，游戏结束】",
        choices: []
    },
    clueFullEnd: {
        text: "&nbsp;&nbsp;&nbsp;&nbsp;你拥有完美的一次穿书体验，在本次穿书体验的最后时刻，你向他们告别，这次经历让他们感到十分神奇，并真心地向你说了声“再见，后会有期！”<br>&nbsp;&nbsp;&nbsp;&nbsp;【结局：后会有期】",
        choices: []
    },
    complainFullEnd: { 
        text: "&nbsp;&nbsp;&nbsp;&nbsp;你的沙雕值直接拉满了！你真的是天选沙雕人！但很可惜，太过于沙雕也不是一件好事<br>&nbsp;&nbsp;&nbsp;&nbsp;【结局：沙雕使你开心百分百，解锁“天选沙雕人”的称呼！】",
        choices: []
    }
};

// ===================== 2. 游戏状态变量 =====================
let currentNode = "start";
let life = 10;     // 生命值 开局满格 10
let san = 10;      // 理智值 开局满格 10
let trust = 0;     // 信任值 开局0，最高10
let complain = 0;  // 沙雕值 开局0，最高10
let clue = 0;      // 线索值 开局0，最高10

// ===================== 3. 初始化游戏 =====================
function initGame() {
    renderNode(currentNode);
    updateStats();
}

// ===================== 4. 渲染剧情节点 =====================
function renderNode(nodeId) {
    const node = storyNodes[nodeId];
    const storyText = document.getElementById("storyText");
    const choiceButtons = document.getElementById("choiceButtons");

    // 容错：防止节点不存在导致报错
    if (!node) {
        storyText.innerHTML = "⚠️ 剧情节点加载失败，请重新开始游戏";
        choiceButtons.innerHTML = "";
        return;
    }

    storyText.innerHTML = node.text;
    choiceButtons.innerHTML = "";

    node.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = choice.text;
        btn.onclick = () => makeChoice(choice);
        choiceButtons.appendChild(btn);
    });

    if (node.choices.length === 0) {
        choiceButtons.innerHTML = "<p style='color:#666; margin: 20px 0;'>游戏结束，可点击下方按钮重新开始</p>";
    }
}

// ===================== 5. 处理玩家选择 =====================
function makeChoice(choice) {
    life += choice.life || 0;
    san += choice.san || 0;
    trust += choice.trust || 0;
    complain += choice.complain || 0;
    clue += choice.clue || 0;
    
    currentNode = choice.nextNode;
    renderNode(currentNode);
    updateStats();
}

// ===================== 6. 更新数值和进度条 =====================
function updateStats() {
    // 限制所有数值在0-10之间
    life = Math.max(0, Math.min(life, 10));
    san = Math.max(0, Math.min(san, 10));
    trust = Math.max(0, Math.min(trust, 10));
    complain = Math.max(0, Math.min(complain, 10));
    clue = Math.max(0, Math.min(clue, 10));

    // 更新数值显示
    document.getElementById("lifeValue").textContent = life;
    document.getElementById("sanValue").textContent = san;
    document.getElementById("trustValue").textContent = trust;
    document.getElementById("complainValue").textContent = complain;
    document.getElementById("clueValue").textContent = clue;

    // 更新进度条
    document.getElementById("lifeBar").style.width = (life * 10) + "%";
    document.getElementById("sanBar").style.width = (san * 10) + "%";
    document.getElementById("trustBar").style.width = (trust * 10) + "%";
    document.getElementById("complainBar").style.width = (complain * 10) + "%";
    document.getElementById("clueBar").style.width = (clue * 10) + "%";

    // 检查所有特殊结局
    checkSpecialEnding();
}

// ===================== 7. 检查特殊结局 =====================
function checkSpecialEnding() {
    // 生命值归0 → 死亡结局
    if (life <= 0 && currentNode !== "deathEnd") {
        renderNode("deathEnd");
    }
    // 理智值归0 → 理智崩坏结局
    else if (san <= 0 && currentNode !== "sanBreakEnd") {
        renderNode("sanBreakEnd");
    }
    // 线索值满10 → 解锁真相结局
    else if (clue >= 10 && currentNode !== "clueFullEnd") {
        renderNode("clueFullEnd");
    }
    // 新增：吐槽值满10 → 沙雕结局
    else if (complain >= 10 && currentNode !== "complainFullEnd" && currentNode !== "happy_end") {
        renderNode("complainFullEnd");
    }
}

// ===================== 8. 重新开始游戏 =====================
function restartGame() {
    currentNode = "start";
    life = 10;
    san = 10;
    trust = 0;
    complain = 0;
    clue = 0;
    initGame();
}

// ===================== 启动游戏 =====================
window.onload = initGame;