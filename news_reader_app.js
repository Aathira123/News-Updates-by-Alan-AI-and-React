// Use this sample to create your own voice commands
intent('What does this app do?','What can i do here?',
      reply('This is news project')
      );

const API_KEY='77bfd209b7d048bab2b9fa95ed66bcac';
let savedArticles=[];
//NEWS BY SOURCE
intent('Give me the news from $(source* (.*))',(p)=>{
    let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    if(p.source.value){
        NEWS_API_URL=`${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`

    }
    
    
    api.request(NEWS_API_URL,(error,response,body)=>{
        const {articles}=JSON.parse(body);
        if(!articles.length){
            p.play('Sorry, check from another source')
           return;
        }
        savedArticles=articles;
      
    p.play({command:'newHeadlines',articles});
    p.play(`Here are the {latest|recent} ${p.source.value} news`)
    
})
        
    })
//News By term

intent('What \'s up with $(term* (.*))',(p)=>{
    let NEWS_API_URL=`https://newsapi.org/v2/everything?apiKey=${API_KEY}`;
    if(p.term.value){
        NEWS_API_URL=`${NEWS_API_URL}&q=${p.term.value}`

    }
    
    
    api.request(NEWS_API_URL,(error,response,body)=>{
        const {articles}=JSON.parse(body);
        if(!articles.length){
            p.play('Sorry Please try something else')
           return;
        }
        savedArticles=articles;
      
    p.play({command:'newHeadlines',articles});
    p.play(`Here are the {latest|recent} news about ${p.term.value}`)
    
})
        
    })
//news by category
const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const CATEGORIES_INTENT = `${CATEGORIES.map((category) => `${category}~${category}`).join('|')}|`;
 
intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(C~ ${CATEGORIES_INTENT})`,
  `(read|show|get|bring me|give me) (the|) (recent|latest) $(C~ ${CATEGORIES_INTENT}) $(N news|headlines)`,(p)=>{
    let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=in`;
    if(p.C.value){
        
        NEWS_API_URL=`${NEWS_API_URL}&category=${p.C.value}`

    }
   
    
    api.request(NEWS_API_URL,(error,response,body)=>{
        const {articles}=JSON.parse(body);
        if(!articles.length){
            p.play('Sorry Please try Search for some other category')
           return;
        }
        savedArticles=articles;
      
    p.play({command:'newHeadlines',articles});
        if(p.C.value){
              p.play(`Here are the {latest|recent} articles about ${p.C.value}`)
        }
        else{
            p.play("here are latest news")
        }
  
    
})
        
    })


