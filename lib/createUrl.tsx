export   function createUrl(path:string , params:Record<string, string>){
    const url = new URL(path , 'http://localhost:3000/')

    Object.entries(params).forEach( ( [key , value] ) => {
        url.searchParams.set(key, value);
    } )
    
    return url.pathname + url.search;
    
  }