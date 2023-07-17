define(['pipAPI','https://lhn814.github.io/IAT/source.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();
  
  //Randomly choose the attribute words from a larger list of attribute words.
  //Internal studies in Project Implicit found no difference in performance between the words.
  var posWords = API.shuffle([
            '友谊', '振奋', '温柔', '健康', 
            '爱恋', '愉悦', '贡献', '快乐', 
            '完美', '珍贵', '发达', '和平', 
            '振奋', '伟大', '欢笑', '光荣', 
            '强大', '梦幻', '可爱', '庆祝', 
            '积极', '富裕', '胜利', '壮观']);
  var negWords = API.shuffle([
            '痛苦', '毒害', '悲观', '失落', 
            '落后', '鄙夷', '失败', '肮脏', 
            '愤怒', '恐怖', '消极', '邪恶', 
            '丑陋', '反胃', '邋遢', '腐朽', 
            '灾难', '仇恨', '战乱', '羞辱',  
            '创伤', '疾病', '自私', '暴力']);
  
    return iatExtension({
        category1 : {
            name : '黑人的头像', //Will appear in the data.
            title : {
                media : {word : '黑人的头像'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'bm1_nc.jpg'},
                {image: 'bm2_nc.jpg'},
                {image: 'bm3_nc.jpg'},
				{image: 'bf1_nc.jpg'},
                {image: 'bf2_nc.jpg'},                 
				{image: 'bf3_nc.jpg'}     
    	    ],
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 :    {
            name : '白人的头像', //Will appear in the data.
            title : {
                media : {word : '白人的头像'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'wm1_nc.jpg'},
                {image: 'wm2_nc.jpg'},
                {image: 'wm3_nc.jpg'},
				{image: 'wf1_nc.jpg'},
            	{image: 'wf2_nc.jpg'},
            	{image: 'wf3_nc.jpg'}
            ],
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
		attribute2 :
		{
			name : '负面词汇',
			title : {
				media : {word : '负面词汇'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: negWords[0]},
				{word: negWords[1]},
				{word: negWords[2]},
				{word: negWords[3]},
				{word: negWords[4]},
				{word: negWords[5]},
				{word: negWords[6]},
				{word: negWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute1 :
		{
			name : '正面词汇',
			title : {
				media : {word : '正面词汇'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: posWords[0]},
				{word: posWords[1]},
				{word: posWords[2]},
				{word: posWords[3]},
				{word: posWords[4]},
				{word: posWords[5]},
				{word: posWords[6]},
				{word: posWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
        base_url : {//Where are your images at? You might want to copy the photos to your own server
            image : 'https://baranan.github.io/minno-tasks/images/'
        }
    });
});

