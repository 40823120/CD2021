var tipuesearch = {"pages": [{'title': 'Home', 'text': '', 'tags': '', 'url': 'Home.html'}, {'title': 'stage1', 'text': 'W1 \n \xa0標題:\xa0 2021-協同產品設計實習-stage1-ag12 \n \xa0題目:坦克車車 \n \xa0第一位組員學號: 40823124\xa0 |\xa0 Repository: \xa0 40823124 \xa0 | Site: \xa0 40823124 \n \xa0第二位組員學號: 40823120\xa0 |\xa0 Repository: \xa0 40823120 \xa0 | Site: \xa0 40823120 \n', 'tags': '', 'url': 'stage1.html'}, {'title': 'Group Project', 'text': '', 'tags': '', 'url': 'Group Project.html'}, {'title': 'W1', 'text': '\xa0標題:\xa0 2021-協同產品設計實習-stage1-ag12 \n \xa0題目:坦克車車 \n \xa0第一位組員學號: 40823124\xa0 |\xa0 Repository:  40823124 \xa0 | Site:   40823124 \n \xa0第二位組員學號: 40823120\xa0 |\xa0 Repository:  40823120 \xa0 | Site:   40823120 \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': 'stage1-ag12 平面四桿機構 設計動機:有些物品因擺放過高而無法取的，而想做一個升降梯幫助 \n \n 檔案: https://drive.google.com/drive/folders/1xvnKv8nXoVt-maXw1V-cGuNGGitRA9pT?usp=sharing \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '因W2設置的機構有誤導致 coppeliasim模擬出錯，而修改機構 \n \n \n', 'tags': '', 'url': 'W3.html'}, {'title': '分工部分', 'text': '我負責的是繪製和設計機構，並且使用inventor組合使之約束 \n 圖的分解及動畫: \n 機構影片 \n 圖檔介紹以及爆炸圖分解 \n \n', 'tags': '', 'url': '分工部分.html'}, {'title': 'W4報告', 'text': 'PDF \n', 'tags': '', 'url': 'W4報告.html'}, {'title': '圖片區', 'text': '\n \n \n \n \n \n \n', 'tags': '', 'url': '圖片區.html'}, {'title': 'stage2', 'text': '', 'tags': '', 'url': 'stage2.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}, {'title': 'task1', 'text': '\n with open("stage3_2a.txt") as gp:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = gp.readlines()\n    data = [d.replace(\'4823122\',\'40823122\') for d in data]\n    data = [v.replace(\'\\t\\t\\t\\t\',\'\') for v in data]\n#print(len(data))\nfor p in range(len(data)):\n    group = data[p].rstrip("\\n").split("\\t")\n    print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">網站</a>  <a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">倉儲</a></p>\')\n    for  q in range(2,18,2):\n        try:\n              print(\'<p>\'+group[q]+\' | Website:\'+\'<a href="https://\'+group[q]+\'.github.io/cd2021\'+\'">\'+group[q]+\'</a>\'+\' | Repository:\'+\'<a href="https://github.com/\'+group[q]+\'/cd2021\'+\'">\'+group[q]+\'</a>\'+\' | Group Website:\'+\'<a href="https://\'+group[q]+\'.github.io/stage3-ag\'+group[0][9]+\'">\'+group[q]+\'</a></p>\' )\n        except:\n            continue\n            \n\n \n stage3_ag1 |  網站   倉儲 \n 40823131 | Website: 40823131  | Repository: 40823131  | Group Website: 40823131 \n a40823112 | Website: a40823112  | Repository: a40823112  | Group Website: a40823112 \n 40823123 | Website: 40823123  | Repository: 40823123  | Group Website: 40823123 \n 40823145 | Website: 40823145  | Repository: 40823145  | Group Website: 40823145 \n 40823136 | Website: 40823136  | Repository: 40823136  | Group Website: 40823136 \n 40823109 | Website: 40823109  | Repository: 40823109  | Group Website: 40823109 \n 40823116 | Website: 40823116  | Repository: 40823116  | Group Website: 40823116 \n 40823108 | Website: 40823108  | Repository: 40823108  | Group Website: 40823108 \n stage3_ag2 |  網站   倉儲 \n 40823151 | Website: 40823151  | Repository: 40823151  | Group Website: 40823151 \n 40623121 | Website: 40623121  | Repository: 40623121  | Group Website: 40623121 \n 40871106 | Website: 40871106  | Repository: 40871106  | Group Website: 40871106 \n 40823102 | Website: 40823102  | Repository: 40823102  | Group Website: 40823102 \n 40823104 | Website: 40823104  | Repository: 40823104  | Group Website: 40823104 \n 40823106 | Website: 40823106  | Repository: 40823106  | Group Website: 40823106 \n 40823101 | Website: 40823101  | Repository: 40823101  | Group Website: 40823101 \n 40823132 | Website: 40823132  | Repository: 40823132  | Group Website: 40823132 \n stage3_ag3 |  網站   倉儲 \n 40823119 | Website: 40823119  | Repository: 40823119  | Group Website: 40823119 \n 40823150 | Website: 40823150  | Repository: 40823150  | Group Website: 40823150 \n 40823103 | Website: 40823103  | Repository: 40823103  | Group Website: 40823103 \n 40823107 | Website: 40823107  | Repository: 40823107  | Group Website: 40823107 \n 40523252 | Website: 40523252  | Repository: 40523252  | Group Website: 40523252 \n 40823154 | Website: 40823154  | Repository: 40823154  | Group Website: 40823154 \n stage3_ag4 |  網站   倉儲 \n 40823142 | Website: 40823142  | Repository: 40823142  | Group Website: 40823142 \n 40823144 | Website: 40823144  | Repository: 40823144  | Group Website: 40823144 \n 40823127 | Website: 40823127  | Repository: 40823127  | Group Website: 40823127 \n 40823148 | Website: 40823148  | Repository: 40823148  | Group Website: 40823148 \n 40823121 | Website: 40823121  | Repository: 40823121  | Group Website: 40823121 \n 40823135 | Website: 40823135  | Repository: 40823135  | Group Website: 40823135 \n 40823114 | Website: 40823114  | Repository: 40823114  | Group Website: 40823114 \n 40823146 | Website: 40823146  | Repository: 40823146  | Group Website: 40823146 \n stage3_ag5 |  網站   倉儲 \n 40823111 | Website: 40823111  | Repository: 40823111  | Group Website: 40823111 \n 40823115 | Website: 40823115  | Repository: 40823115  | Group Website: 40823115 \n 40823128 | Website: 40823128  | Repository: 40823128  | Group Website: 40823128 \n 40823120 | Website: 40823120  | Repository: 40823120  | Group Website: 40823120 \n 40823140 | Website: 40823140  | Repository: 40823140  | Group Website: 40823140 \n 40823124 | Website: 40823124  | Repository: 40823124  | Group Website: 40823124 \n 40823139 | Website: 40823139  | Repository: 40823139  | Group Website: 40823139 \n 40823126 | Website: 40823126  | Repository: 40823126  | Group Website: 40823126 \n stage3_ag6 |  網站   倉儲 \n 40823152 | Website: 40823152  | Repository: 40823152  | Group Website: 40823152 \n 40823110 | Website: 40823110  | Repository: 40823110  | Group Website: 40823110 \n 40823122 | Website: 40823122  | Repository: 40823122  | Group Website: 40823122 \n 40823125 | Website: 40823125  | Repository: 40823125  | Group Website: 40823125 \n 40823117 | Website: 40823117  | Repository: 40823117  | Group Website: 40823117 \n 40823129 | Website: 40823129  | Repository: 40823129  | Group Website: 40823129 \n 40823149 | Website: 40823149  | Repository: 40823149  | Group Website: 40823149 \n 40823153 | Website: 40823153  | Repository: 40823153  | Group Website: 40823153 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'Week14', 'text': '', 'tags': '', 'url': 'Week14.html'}, {'title': 'Week15', 'text': '', 'tags': '', 'url': 'Week15.html'}, {'title': 'Week16', 'text': '1.Onshape 零組件繪製 \n 零件連結Base: https://cad.onshape.com/documents/843fb717d04f27307ea280c0/w/2cf76146c4f1d667965c0a5c/e/ef4510bf3623eae9bf71912b \n Link1: \n https://cad.onshape.com/documents/c8c4dc012c0e802c76936bee/w/cebb8498f8f7a79c8044ee95/e/9bc9c8794c8e2785c3194735 \n Link2: \n https://cad.onshape.com/documents/77c1a7b82517091069897d57/w/514530f5709bbcfd334d078b/e/b57a2f020187ababef4a7beb \n Link3: \n https://cad.onshape.com/documents/6f31fa22f2283f34c94762f1/w/00b180f4eed255420ed99fc9/e/faecfe3e2494f9e3eb38a16c \n 影片連結: https://youtu.be/i83v90JjU4k \n', 'tags': '', 'url': 'Week16.html'}]};