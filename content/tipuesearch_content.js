var tipuesearch = {"pages": [{'title': 'Home', 'text': '', 'tags': '', 'url': 'Home.html'}, {'title': 'stage1', 'text': 'W1 \n \xa0標題:\xa0 2021-協同產品設計實習-stage1-ag12 \n \xa0題目:坦克車車 \n \xa0第一位組員學號: 40823124\xa0 |\xa0 Repository: \xa0 40823124 \xa0 | Site: \xa0 40823124 \n \xa0第二位組員學號: 40823120\xa0 |\xa0 Repository: \xa0 40823120 \xa0 | Site: \xa0 40823120 \n', 'tags': '', 'url': 'stage1.html'}, {'title': 'Group Project', 'text': '', 'tags': '', 'url': 'Group Project.html'}, {'title': 'W1', 'text': '\xa0標題:\xa0 2021-協同產品設計實習-stage1-ag12 \n \xa0題目:坦克車車 \n \xa0第一位組員學號: 40823124\xa0 |\xa0 Repository:  40823124 \xa0 | Site:   40823124 \n \xa0第二位組員學號: 40823120\xa0 |\xa0 Repository:  40823120 \xa0 | Site:   40823120 \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': 'stage1-ag12 平面四桿機構 設計動機:有些物品因擺放過高而無法取的，而想做一個升降梯幫助 \n \n 檔案: https://drive.google.com/drive/folders/1xvnKv8nXoVt-maXw1V-cGuNGGitRA9pT?usp=sharing \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '因W2設置的機構有誤導致 coppeliasim模擬出錯，而修改機構 \n \n \n', 'tags': '', 'url': 'W3.html'}, {'title': '分工部分', 'text': '我負責的是繪製和設計機構，並且使用inventor組合使之約束 \n 圖的分解及動畫: \n 機構影片 \n 圖檔介紹以及爆炸圖分解 \n \n', 'tags': '', 'url': '分工部分.html'}, {'title': 'W4報告', 'text': 'PDF \n', 'tags': '', 'url': 'W4報告.html'}, {'title': '圖片區', 'text': '\n \n \n \n \n \n \n', 'tags': '', 'url': '圖片區.html'}, {'title': 'stage2', 'text': '', 'tags': '', 'url': 'stage2.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}, {'title': 'task1', 'text': '\n with open("stage3_2a.txt") as gp:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = gp.readlines()\n    data = [d.replace(\'4823122\',\'40823122\') for d in data]\n    data = [v.replace(\'\\t\\t\\t\\t\',\'\') for v in data]\n#print(len(data))\nfor p in range(len(data)):\n    group = data[p].rstrip("\\n").split("\\t")\n    print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">網站</a>  <a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">倉儲</a></p>\')\n    for  q in range(2,18,2):\n        try:\n              print(\'<p>\'+group[q]+\' | Website:\'+\'<a href="https://\'+group[q]+\'.github.io/cd2021\'+\'">\'+group[q]+\'</a>\'+\' | Repository:\'+\'<a href="https://github.com/\'+group[q]+\'/cd2021\'+\'">\'+group[q]+\'</a>\'+\' | Group Website:\'+\'<a href="https://\'+group[q]+\'.github.io/stage3-ag\'+group[0][9]+\'">\'+group[q]+\'</a></p>\' )\n        except:\n            continue\n            \n\n \n stage3_ag1 |  網站   倉儲 \n 40823131 | Website: 40823131  | Repository: 40823131  | Group Website: 40823131 \n a40823112 | Website: a40823112  | Repository: a40823112  | Group Website: a40823112 \n 40823123 | Website: 40823123  | Repository: 40823123  | Group Website: 40823123 \n 40823145 | Website: 40823145  | Repository: 40823145  | Group Website: 40823145 \n 40823136 | Website: 40823136  | Repository: 40823136  | Group Website: 40823136 \n 40823109 | Website: 40823109  | Repository: 40823109  | Group Website: 40823109 \n 40823116 | Website: 40823116  | Repository: 40823116  | Group Website: 40823116 \n 40823108 | Website: 40823108  | Repository: 40823108  | Group Website: 40823108 \n stage3_ag2 |  網站   倉儲 \n 40823151 | Website: 40823151  | Repository: 40823151  | Group Website: 40823151 \n 40623121 | Website: 40623121  | Repository: 40623121  | Group Website: 40623121 \n 40871106 | Website: 40871106  | Repository: 40871106  | Group Website: 40871106 \n 40823102 | Website: 40823102  | Repository: 40823102  | Group Website: 40823102 \n 40823104 | Website: 40823104  | Repository: 40823104  | Group Website: 40823104 \n 40823106 | Website: 40823106  | Repository: 40823106  | Group Website: 40823106 \n 40823101 | Website: 40823101  | Repository: 40823101  | Group Website: 40823101 \n 40823132 | Website: 40823132  | Repository: 40823132  | Group Website: 40823132 \n stage3_ag3 |  網站   倉儲 \n 40823119 | Website: 40823119  | Repository: 40823119  | Group Website: 40823119 \n 40823150 | Website: 40823150  | Repository: 40823150  | Group Website: 40823150 \n 40823103 | Website: 40823103  | Repository: 40823103  | Group Website: 40823103 \n 40823107 | Website: 40823107  | Repository: 40823107  | Group Website: 40823107 \n 40523252 | Website: 40523252  | Repository: 40523252  | Group Website: 40523252 \n 40823154 | Website: 40823154  | Repository: 40823154  | Group Website: 40823154 \n stage3_ag4 |  網站   倉儲 \n 40823142 | Website: 40823142  | Repository: 40823142  | Group Website: 40823142 \n 40823144 | Website: 40823144  | Repository: 40823144  | Group Website: 40823144 \n 40823127 | Website: 40823127  | Repository: 40823127  | Group Website: 40823127 \n 40823148 | Website: 40823148  | Repository: 40823148  | Group Website: 40823148 \n 40823121 | Website: 40823121  | Repository: 40823121  | Group Website: 40823121 \n 40823135 | Website: 40823135  | Repository: 40823135  | Group Website: 40823135 \n 40823114 | Website: 40823114  | Repository: 40823114  | Group Website: 40823114 \n 40823146 | Website: 40823146  | Repository: 40823146  | Group Website: 40823146 \n stage3_ag5 |  網站   倉儲 \n 40823111 | Website: 40823111  | Repository: 40823111  | Group Website: 40823111 \n 40823115 | Website: 40823115  | Repository: 40823115  | Group Website: 40823115 \n 40823128 | Website: 40823128  | Repository: 40823128  | Group Website: 40823128 \n 40823120 | Website: 40823120  | Repository: 40823120  | Group Website: 40823120 \n 40823140 | Website: 40823140  | Repository: 40823140  | Group Website: 40823140 \n 40823124 | Website: 40823124  | Repository: 40823124  | Group Website: 40823124 \n 40823139 | Website: 40823139  | Repository: 40823139  | Group Website: 40823139 \n 40823126 | Website: 40823126  | Repository: 40823126  | Group Website: 40823126 \n stage3_ag6 |  網站   倉儲 \n 40823152 | Website: 40823152  | Repository: 40823152  | Group Website: 40823152 \n 40823110 | Website: 40823110  | Repository: 40823110  | Group Website: 40823110 \n 40823122 | Website: 40823122  | Repository: 40823122  | Group Website: 40823122 \n 40823125 | Website: 40823125  | Repository: 40823125  | Group Website: 40823125 \n 40823117 | Website: 40823117  | Repository: 40823117  | Group Website: 40823117 \n 40823129 | Website: 40823129  | Repository: 40823129  | Group Website: 40823129 \n 40823149 | Website: 40823149  | Repository: 40823149  | Group Website: 40823149 \n 40823153 | Website: 40823153  | Repository: 40823153  | Group Website: 40823153 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'Week14', 'text': '', 'tags': '', 'url': 'Week14.html'}, {'title': 'Week15', 'text': '', 'tags': '', 'url': 'Week15.html'}, {'title': 'part 1-joint', 'text': "\n \n 原文 \n 1.We saw this simple two-link robot in the previous lecture about forward kinematics. \n 2.The tooltip pose of this robot is discribed simply by two number ,the coordinates x and y with \n respect to the world coordinate frame. \n 3.So, the problem here is that given x and y, we want to determine the joined angles, Q1 and \n Q2. \n 4.The solution that we're going to follow in this particular section is a geometric ONE. We're going to start with a simple piece of construction. \n 5.We're going to overlay the red triangle on top of our robot. \n 6.We know that the end point coordinate is x, y, so the vertical height of the triangle is y,horizontal width is x. \n 7.And, using Pythagoras theorem, we can write thagoras r squared equals x squared plus y squared. \n 8.So far.so easy. Now, we're going to look at this triangle highlighted here in red and we want to determine the angle alpha. \n 9.In order to do that, we need to use the cosine rule. \n 10.And, if you're a little rusty on the cosine rule, here is a bit of a refresher.We have an arbitrary triangle.We don't have to have any right angles in it and we're going to label the length of this edge as A and the angle opposite that edge, we're going to label as little a. And, we do the same for this edge and this angle, and this edge and this angle. \n 11.So, all together, the sides are labelled capitals A, B and C, and the angles are labelled little a, little b, and little c.So, the cosine rule is simply this relationship here. \n 12.It's a bit like Pythagoras' theorem except for this extra term on the end with the cos a in it. \n Now, let's apply the cosine rule to the particular triangle we looked at a moment rul ago. \n 13.It's pretty straightforward to write down this particular relationship. We can isolate the term cos alpha which gives us the angle alpha that we're interested in. And, it's defined in terms of the constant link lengths, A1 and A2 and the position of the end effector,x and y. \n 14.We can write this simple relationship between the angles alpha and Q2. And, we know from the shape of the cosine function that cos of Q2 must be equal to negative of cos alpha. \n 15.This time, let's just write an expression for the cosine of the joined angle Q2. Now, we're going to draw yet another red triangle and we're going apply some simple trigonometry here. \n 16.If we know Q2, then we know this length and this length of the red triangle.We can write this relationship for the sine of the joined angle Q2. \n 17.Now, we can consider this bigger triangle whose angle is beta and this side length of the triangle is given here in blue.And, the length of the other side of the triangle is this. \n 18.So, now we can write an expression for the angle beta in terms of these parameters here. Going back to the red triangle that we drew earlier, we can establish a relationship between Q1 and the angle beta.Introduce yet another angle, this one gamma and we can write a relationship between the angle gamma and the tooltip coordinates x and y. \n 19.Now, we can write a simple relationship between the angles that we've constructed, gamma and beta and the joined angle we're interested in which is Q1.And, the total relationship looks something like this. \n 20.Quite a complex relationship, it gives us the angle of joined one, that's Q1 in terms of the end effector coordinates y and x, and a bunch of constants, a1 and a2, and it's also a function of the second joint angle, Q2.So, let's summarize what it is that we have derived here.1 \n 21.We have an expression for the cosine of Q2 and we have an expression for Q1.Now, the cosine function is symmetrical about 0.So, if we know the value of the cosine of Q2, then there are two possible solutions, a positive angle and a negative angle \n 22.We're going to explicitly choose the positive angle, which means that I can write this expression here.And now, we have what we call the inverse kinematic solution for this two-link robot. We have an expression for the two joined angles, Q1 and Q2 in terms of the end effector pose x and y, and a bunch of constants. \n 23.You notice that the two equations are not independent.The equation for Q1, in fact, depends on the solution for Q2.In this case, Q2 is negative and we're going to write the solution for Q2 with a negative sign in front of the inverse cosine. \n \n 24.Now, we need to solve for Q1, so we're going to introduce this particular red triangle, the angle beta that we solved previously, and the angle gamma which is defined in terms of y and x.Now, we write a slightly different relationship between q1, gamma and beta, different to what we had before. There’s a change of sign involved.Then, we can substitute all that previous equation and come up with this expression for q1.Again, there is a change of sign here. \n 25.Previously, this was a negative sign.And, here in summary form is the solution for the inverse kinematics of our two-link robot when it is in this particular configuration, where q2 is negative. Let’s compare the two solutions, the case where q2 is positive and the case where q2 is negative. \n \n 中文翻譯 \n 1.我們在上一堂關於正向運動學的講座中看到了這個簡單的雙連桿機器人 2.這個機器人的工具提示位姿簡單地由兩個數字來描述，坐標 x 和 y 與相對於世界坐標系。 3.所以，這裡的問題是給定 x 和 y，我們想要確定連接角 Q1 和 Q2。 4.我們將在本節中遵循的解決方案是幾何一。 我們將從一個簡單的結構開始。 5.我們將在我們的機器人頂部覆蓋紅色三角形。 6.我們知道終點坐標是x，y，所以三角形的垂直高度是y，水平寬度是x。 7.並且，使用畢達哥拉斯定理，我們可以寫出 畢氏定理 r 平方等於 x 平方加 y 平方。 8.到目前為止，很容易。 現在，我們將查看此處以紅色突出顯示的三角形，我們要確定角度α。 9.為了做到這一點，我們需要使用 cos 規則。 10.而且，如果你對 cos 規則有點生疏，這裡有一點複習。我們有一個任意三角形。我們不必在其中有任何直角，我們將這條邊的長度標記為 A，而與該邊相對的角度，我們將標記為小 a。並且，我們對這條邊和這個角，以及這條邊和這個角做同樣的事情。 11.因此，所有邊都標記為大寫字母 A、B 和 C，角標記為小 a、小 b 和小 c。所以，cos 規則就是這裡的這種關係。 12.它有點像畢達哥拉斯的定理，除了最後一個額外的術語，其中有 cos a。現在，讓我們將 cos 規則應用於我們剛才看到的特定三角形。 13.寫下這種特殊關係非常簡單。我們可以分離出術語 cos α，它為我們提供了我們感興趣的角度 α。而且，它是根據恆定連桿長度 A1 和 A2 以及末端執行器的位置 x 和 y 定義的。 14.我們可以寫出角度 α 和 Q2 之間的這種簡單關係。而且，我們從餘弦函數的形狀知道，Q2 的 cos 必須等於 cos α 的負值。 15.這一次，讓我們為連接角 Q2 的cos寫一個表達式。現在，我們將繪製另一個紅色三角形，並在此處應用一些簡單的三角函數。 16.如果我們知道 Q2，那麼我們就知道這個長度和這個紅色三角形的長度。我們可以為連接角 Q2 的 sin 寫出這種關係。 17.現在，我們可以考慮這個更大的三角形，它的角是β，三角形的這條邊長在這裡用藍色給出。並且，三角形另一邊的長度是這個。 18.所以，現在我們可以在此處根據這些參數編寫角度 β 的表達式。回到我們之前畫的紅色三角形，我們可以建立 Q1和角度 β 之間的關係。引入另一個角度，這個 ɣ，我們可以寫出角度 ɣ 和工具提示坐標 x 和 y 之間的關係。 19.現在，我們可以在我們構建的角度 ɣ 和 β 與我們感興趣的連接角度 Q1 之間寫出一個簡單的關係。而且，整個關係看起來像這樣。 20.相當複雜的關係，它為我們提供了連接的角度，即根據末端執行器坐標 y 和 x 的 Q1，以及一系列常量 a1 和 a2，它也是第二個關節角度 Q2 的函數。所以，讓我們總結一下我們在這裡得出的結論。1 21.我們有 Q2 的 cos 表達式和 Q1 的表達式。現在，cos 函數關於 0 對稱。所以，如果我們知道 Q2 的 cos 值，那麼有兩種可能的解，一個正角和一個負角 22.我們將明確選擇正角，這意味著我可以在這裡寫這個表達式。現在，我們有了這個雙連桿機器人的逆運動學解決方案。我們有兩個連接角 Q1 和 Q2 的表達式，根據末端執行器姿勢 x 和 y 以及一系列常數。 23.你注意到這兩個方程不是獨立的。事實上，Q1 的方程取決於 Q2 的解。在這種情況下，Q2 是負數，我們將在反 cos 前用負號編寫 Q2 的解。 24.現在，我們需要求解 Q1，因此我們將介紹這個特定的紅色三角形、我們之前求解的角度 β 以及根據 y 和 x 定義的角度 ɣ。現在，我們在 q1、ɣ 和 β 之間寫出略有不同的關係，與我們之前的關係不同。涉及到符號的變化。然後，我們可以替換之前的所有等式，並得出 q1 的這個表達式。同樣，這裡的符號發生了變化。以前，這是一個負面信號。 25.並且，這裡總結性地是我們的雙連桿機器人在這種特定配置下的逆運動學的解決方案，其中 q2 是負數。讓我們比較兩個解決方案，q2 為正的情況和 q2 為負的情況。 \n", 'tags': '', 'url': 'part 1-joint.html'}, {'title': 'Week16', 'text': 'MTB_robot 的取放方塊流程規劃 (Process Planning): \n 1. Onshape 零組件繪製 (20%) \n 零組件必須在 \xa0 Onshape \xa0 繪圖, 並提供可公開分享之零組件連結於頁面及回報區中. \n 2. 建立 CoppeliaSim 4.1.0 MTB robot 場景 (20%) \n 請以自行繪製之零件輸入 CoppeliaSim 後, 組合為 MTB robot 模型, 並利用 Leo Editor 以 require 導入 Lua 程式運作, 分別控制各軸轉動示範, 所完成的所有檔案請存入 W16_exam 後壓縮為 W16_exam.7z 後送至個人 @gm 帳號下的 Google Drive 後將連結設為任何人皆可下載, 並將連結與操作嵌入影片放在 W16 頁面與回報區中 . \n 3. 手臂末端加入 components-gripper-suction pad 吸盤 (20%) \n 請接續上述 MTB robot, 在其末端接上 force sensor 後接上標準 suction pad 後, 分別導入 W15 週線上課程之鍵盤控制程式後, 拍攝影片示範 W15 線上課程中之操作與示範過程. \n 4. 逆向運動學函式 (20%) \n 請根據 W15 線上課程內容之 Inverse Kinematics 方程式 ( 影片1 \xa0 或 影片2 ), 以程式指定方塊取放之兩個位置 - (0.2, 0.7, 0.05) 與 (-0.3, -0.55, 0.05), 以前述 Leo Editor Lua 程式編寫方法, 分別採鍵盤控制與程式迴圈方式執行 W15 兩個指定位置之方塊取放. \n 5. Python remote API 逆向運動學函式 (20%) \n 請利用 Python remote API 程式重現以迴圈方式執行 W15 兩個指定位置之方塊取放. \n \n', 'tags': '', 'url': 'Week16.html'}, {'title': 'Week17', 'text': '1.Onshape 零組件繪製 \n 零件連結 \n Base \n Link1 \n Link2 \n Link3 \n 操作影片 \n \n 2.建立 CoppeliaSim 4.1.0 MTB robot 場景 \n 操作影片 \n 檔案下載 \n function sysCall_init()\n    -- do some initialization here\n        #int是為了宣告對應的節點好讓後面的程式好寫一點\n    joint_hanld1=sim.getObjectHandle(\'joint1\')\n    joint_hanld2=sim.getObjectHandle(\'joint2\')\n    joint_hanld3=sim.getObjectHandle(\'joint3\')\n    joint_hanld4=sim.getObjectHandle(\'joint4\')\n    suctionPad=sim.getObjectHandle(\'suctionPad\')\n    angle=math.pi/180\n    angle1=0\n    angle2=0\n    d=0\n    a1=0.8\n    a2=0.8\n    x=0.2\n    y=0.7\nend\n\nfunction sysCall_actuation()\n    -- put your actuation code here\n    message, auxiliaryData=sim.getSimulatorMessage()\n        while message ~= -1 do\n            key=auxiliaryData[1]\n            sim.addStatusbarMessage(\'????? key:\'..key)\n            if (message==sim.message_keypress) then\n                if (auxiliaryData[1]==100) then --d\n                    #當按d的時候節點1就會左轉\n                    -- if key a pressed joint1 left\n                    angle1=angle1+angle\n                    sim.setJointPosition(joint_hanld1,angle1)\n                end -- if d\n                if (auxiliaryData[1]==97) then --a \n                     #當按a的時候節點1就會右轉\n                    -- if key d pressed joint1 right\n                    angle1=angle1-angle\n                    sim.setJointPosition(joint_hanld1,angle1)\n                end -- if a\n                if (auxiliaryData[1]==101) then --e\n                    #當按e的時候節點2就會左轉\n                    -- if key e pressed joint2 left\n                    angle2=angle2+angle\n                    sim.setJointPosition(joint_hanld2,angle2)\n                end -- if d\n                if (auxiliaryData[1]==113) then --q \n                    #當按q的時候節點1就會左轉\n                    -- if key q pressed joint2 right\n                    angle2=angle2-angle\n                    sim.setJointPosition(joint_hanld2,angle2)\n                end -- if a\n                if (auxiliaryData[1]==56) then --8\n                    #當按8的時候我們設置的吸盤就會上升\n                    -- if key 8 pressed suctionpad up and active=ture\n                    d=d-0.05\n                    sim.setJointPosition(joint_hanld3,d)\n                    sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),\'active\',\'ture\')\n                end -- if 8\n                if (auxiliaryData[1]==53) then --5\n                    -- if key 8 pressed suctionpad down \n                        #當按5的時候吸盤會下降並吸住方塊\n                    sim.setJointPosition(joint_hanld3,0.084)\n                end -- if 5\n                if (auxiliaryData[1]==115) then --s\n                    -- if key s pressed active=false\n                    sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),\'active\',\'false\')\n                end -- if 5\n                message, auxiliaryData=sim.getSimulatorMessage()\n            end\n        end  \nend\n \n 3.手臂末端加入 components-gripper-suction pad 吸盤\xa0 操作影片 \n 吸盤程式碼: \n function sysCall_init() \n    s=sim.getObjectHandle(\'suctionPadSensor\')\n    l=sim.getObjectHandle(\'suctionPadLoopClosureDummy1\')\n    l2=sim.getObjectHandle(\'suctionPadLoopClosureDummy2\')\n    b=sim.getObjectHandle(\'suctionPad\')\n    suctionPadLink=sim.getObjectHandle(\'suctionPadLink\')\n\n    infiniteStrength=sim.getScriptSimulationParameter(sim.handle_self,\'infiniteStrength\')\n    maxPullForce=sim.getScriptSimulationParameter(sim.handle_self,\'maxPullForce\')\n    maxShearForce=sim.getScriptSimulationParameter(sim.handle_self,\'maxShearForce\')\n    maxPeelTorque=sim.getScriptSimulationParameter(sim.handle_self,\'maxPeelTorque\')\n\n    sim.setLinkDummy(l,-1)\n    sim.setObjectParent(l,b,true)\n    m=sim.getObjectMatrix(l2,-1)\n    sim.setObjectMatrix(l,-1,m)\nend\n\nfunction sysCall_cleanup() \n--[[\n    sim.setLinkDummy(l,-1)\n    sim.setObjectParent(l,b,true)\n    m=sim.getObjectMatrix(l2,-1)\n    sim.setObjectMatrix(l,-1,m)\n]]--\nend \n\nfunction sysCall_sensing() \n    parent=sim.getObjectParent(l)\n    if (sim.getScriptSimulationParameter(sim.handle_self,\'active\')==false) then\n        if (parent~=b) then\n            sim.setLinkDummy(l,-1)\n            sim.setObjectParent(l,b,true)\n            m=sim.getObjectMatrix(l2,-1)\n            sim.setObjectMatrix(l,-1,m)\n        end\n    else\n        if (parent==b) then\n            -- Here we want to detect a respondable shape, and then connect to it with a force sensor (via a loop closure dummy dummy link)\n            -- However most respondable shapes are set to "non-detectable", so "sim.readProximitySensor" or similar will not work.\n            -- But "sim.checkProximitySensor" or similar will work (they don\'t check the "detectable" flags), but we have to go through all shape objects!\n            index=0\n            while true do\n                shape=sim.getObjects(index,sim.object_shape_type)\n                if (shape==-1) then\n                    break\n                end\n                if (shape~=b) and (sim.getObjectInt32Parameter(shape,sim.shapeintparam_respondable)~=0) and (sim.checkProximitySensor(s,shape)==1) then\n                    -- Ok, we found a respondable shape that was detected\n                    -- We connect to that shape:\n                    -- Make sure the two dummies are initially coincident:\n                    sim.setObjectParent(l,b,true)\n                    m=sim.getObjectMatrix(l2,-1)\n                    sim.setObjectMatrix(l,-1,m)\n                    -- Do the connection:\n                    sim.setObjectParent(l,shape,true)\n                    sim.setLinkDummy(l,l2)\n                    break\n                end\n                index=index+1\n            end\n        else\n            -- Here we have an object attached\n            if (infiniteStrength==false) then\n                -- We might have to conditionally beak it apart!\n                result,force,torque=sim.readForceSensor(suctionPadLink) -- Here we read the median value out of 5 values (check the force sensor prop. dialog)\n                if (result>0) then\n                    breakIt=false\n                    if (force[3]>maxPullForce) then breakIt=true end\n                    sf=math.sqrt(force[1]*force[1]+force[2]*force[2])\n                    if (sf>maxShearForce) then breakIt=true end\n                    if (torque[1]>maxPeelTorque) then breakIt=true end\n                    if (torque[2]>maxPeelTorque) then breakIt=true end\n                    if (breakIt) then\n                        -- We break the link:\n                        sim.setLinkDummy(l,-1)\n                        sim.setObjectParent(l,b,true)\n                        m=sim.getObjectMatrix(l2,-1)\n                        sim.setObjectMatrix(l,-1,m)\n                    end\n                end\n            end\n        end\n    end\n    if (sim.getSimulationState()==sim.simulation_advancing_lastbeforestop) then\n        sim.setLinkDummy(l,-1)\n        sim.setObjectParent(l,b,true)\n        m=sim.getObjectMatrix(l2,-1)\n        sim.setObjectMatrix(l,-1,m)\n    end\nend \n \n 4.逆向運動學函式 操作影片 \n 檔案下載 \n function sysCall_threadmain()\n    -- do some initialization here\n    joint_hanld1=sim.getObjectHandle(\'joint1\')\n    joint_hanld2=sim.getObjectHandle(\'joint2\')\n    joint_hanld3=sim.getObjectHandle(\'joint3\')\n    suctionPad=sim.getObjectHandle(\'suctionPad\')\n    angle=180/math.pi\n    angle1=math.pi/180\n    d=0\n    a1=0.8\n    a2=0.8\n    x=0.7\n    y=0.2\n    print(a)\n    function round(x, n)\n    n = math.pow(10, n or 0)\n    x = x * n\n    if x >= 0 then x = math.floor(x + 0.5) else x = math.ceil(x - 0.5) end\n    return x / n\nend\n  \n-- radian to degree\ndeg = 180/math.pi\n-- link 1 length\na1 = 0.8\n-- link 2 length\na2 = 0.8\n-- derivated based upon https://www.youtube.com/watch?v=IKOGwoJ2HLk&t=311s\nfunction ik(x, y)\n    -- (x, y) need to be located inside the circle with radius a1+a2\n    if (x^2 + y^2) <= (a1+ a2)^2 then\n        q2 = -math.acos((x^2+y^2-a1^2-a2^2)/(2*a1*a2))\n        q1 = math.atan2(y, x) + math.atan2((a2*math.sin(q2)), (a1+a2*math.cos(q2)))\n        return {round(q1*deg, 4), round(q2*deg, 4)}\n    else\n        print("Over range!")\n    end\nend\n  \ntheta = ik(0.7, 0.2)\n  \nprint(theta[1], theta[2])\n            sim.setJointTargetPosition(joint_hanld1,-theta[1]*angle1)\n            sim.setJointTargetPosition(joint_hanld2,theta[2]*angle1)\n            sim.wait(3)\n    while(true)\n        do  \n            sim.wait(3)\n            sim.setJointTargetPosition(joint_hanld3,0.06)\n            sim.wait(3)\n            sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),\'active\',\'ture\')\n            sim.wait(3)\n            sim.setJointTargetPosition(joint_hanld3,-0.06)\n            sim.wait(3)\n            theta = ik(-0.55, -0.3)\n            sim.wait(3)\n            sim.setJointTargetPosition(joint_hanld1,-theta[1]*angle1)\n            sim.setJointTargetPosition(joint_hanld2,theta[2]*angle1)\n            sim.wait(10)\n            sim.setJointTargetPosition(joint_hanld3,0.06)\n            sim.wait(3)\n            sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),\'active\',\'false\')\n            sim.wait(3)\n            sim.setJointTargetPosition(joint_hanld3,-0.06)\n            sim.wait(3)\n            sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),\'active\',\'ture\')\n            sim.wait(3)\n            sim.setJointTargetPosition(joint_hanld3,0.06)\n            sim.wait(3)\n            sim.setJointTargetPosition(joint_hanld3,-0.06)\n            sim.wait(3)\n            theta = ik(0.7, 0.2)\n            sim.setJointTargetPosition(joint_hanld1,-theta[1]*angle1)\n            sim.setJointTargetPosition(joint_hanld2,theta[2]*angle1)\n            sim.wait(10)\n            sim.setJointTargetPosition(joint_hanld3,0.06)\n            sim.wait(3)\n            sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),\'active\',\'false\')\n            sim.wait(3)\n            sim.setJointTargetPosition(joint_hanld3,-0.06)\n    end   \nend \n \xa0 \n 5.Python remote API 逆向運動學函式 操作影片 \n 檔案 \n # File created by Thibaut Royer, Epitech school\n# thibaut1.royer@epitech.eu\n# It intends to be an example program for the "Two wheels, one arm" educative project.\nimport sim as vrep\nimport math\nimport random\nimport time\n#如果發生錯誤可到小黑框輸入pip install keyboard\nimport keyboard\n\n\nprint (\'Start\')\n\n# Close eventual old connections\nvrep.simxFinish(-1)\n# Connect to V-REP remote server\nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\n\nif clientID != -1:\n    print (\'Connected to remote API server\')\n    \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "40823120",\n        vrep.simx_opmode_oneshot)\n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n\n    \n    opmode = vrep.simx_opmode_oneshot_wait\n    angle1=math.pi/180\n    \n    # radian to degree\n    deg = 180/math.pi\n    # link 1 length\n    a1 = 0.8\n    # link 2 length\n    a2 = 0.8\n    # derivated based up https://www.youtube.com/watch?v=IKOGwoJ2HLk&t=311s\n     \n    def ik(x, y):\n        # (x, y)  need to be located inside the circle with radius a1+a2\n        if (x**2 + y**2) <= (a1+ a2)**2:\n            q2 = -math.acos((x**2+y**2-a1**2-a2**2)/(2*a1*a2))\n            q1 = math.atan2(y, x) + math.atan2((a2*math.sin(q2)), (a1+a2*math.cos(q2)))\n            # The decimal point of number is rounded to the 4th place\n            return [round(q1*deg, 4), round(q2*deg, 4)]\n        else:\n            print("Over range!")\n            # end the script execution\n \n    theta = ik(0.7, 0.2)\n \n    print(theta[0], theta[1])\n    \n    vrep.simxStartSimulation(clientID, opmode)\n    ret,joint_hanld1=vrep.simxGetObjectHandle(clientID,"joint1",opmode)\n    ret,joint_hanld2=vrep.simxGetObjectHandle(clientID,"joint2",opmode)\n    ret,joint_hanld3=vrep.simxGetObjectHandle(clientID,"joint3",opmode)\n    ret,suctionPad=vrep.simxGetObjectHandle(clientID,"suctionPad",opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint_hanld1,-theta[0]*angle1,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint_hanld2,theta[1]*angle1,opmode)\n    time.sleep(0.5)\n    while True:\n            time.sleep(0.5)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,0.06,opmode)\n            time.sleep(0.5)\n            vrep.simxSetIntegerSignal(clientID,"pad_switch",1,opmode)\n            time.sleep(0.5)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,-0.06,opmode)\n            time.sleep(0.5)\n            theta = ik(-0.55, -0.3)\n            time.sleep(0.5)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld1,-theta[0]*angle1,opmode)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld2,theta[1]*angle1,opmode)\n            time.sleep(2)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,0.06,opmode)\n            time.sleep(0.5)\n            vrep.simxSetIntegerSignal(clientID,"pad_switch",0,opmode)\n            time.sleep(0.5)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,-0.06,opmode)\n            time.sleep(0.5)\n            vrep.simxSetIntegerSignal(clientID,"pad_switch",1,opmode)\n            time.sleep(0.5)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,0.06,opmode)\n            time.sleep(0.5)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,-0.06,opmode)\n            time.sleep(0.5)\n            theta = ik(0.7, 0.2)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld1,-theta[0]*angle1,opmode)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld2,theta[1]*angle1,opmode)\n            time.sleep(2)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,0.06,opmode)\n            time.sleep(0.5)\n            vrep.simxSetIntegerSignal(clientID,"pad_switch",0,opmode)\n            time.sleep(0.5)\n            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,-0.06,opmode)\n    end\n        \nelse:\n    print (\'Failed connecting to remote API server\')\n    print (\'End\') \n \xa0 \n', 'tags': '', 'url': 'Week17.html'}, {'title': '心得', 'text': 'Week16的作業對我自己來說真的很難，我比較擅長的是偏向畫圖所以在第一部分onshape那操作得很順手 \n 而到第二階段以後卡了很久，與小組的組員開metting後和參考了別人的影片才把第二階段的程式看懂，第三階段的吸盤一開始看不太懂如何操作後來發現他需要打開第二個節點那的程式，逆向那很複雜，一開始也不懂逆向是什麼意思，後來查完資料才知道，本來是我們要主動地去操作，需要把它變成自己去捕捉，API的部分丟小白框的時候他一start就馬上exit後來發現我少了keyboard所以我需要到小黑框裡輸入pip install keyboard接著去修改小白框裡的IP位址然後就可以使用API了。 \n 非常感謝每個組員對我的幫忙和包容，組員的互動都很好，希望自己可以學到更多。', 'tags': '', 'url': '心得.html'}]};