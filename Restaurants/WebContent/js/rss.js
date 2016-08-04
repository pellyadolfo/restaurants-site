function formatDate(date){
  var year = date.getYear()
  if(year < 1900){
    year += 1900
  }
  var month = date.getMonth()+1
  var day = date.getDate()
  var hour = date.getHours()
  var minutes = date.getMinutes()
  if(minutes < 10){
    minutes = '0' + minutes
  }
  //return year + '/' + month + '/' + day + ' ' + hour + ':' +minutes
  return day + '/' + month + '/' + year + ' ' + hour + ':' +minutes
}

function loadEntries(url,id,callback){
  var blogDiv = document.getElementById(id)
  feednami.load(url,function(res){
    blogDiv.removeChild(blogDiv.querySelector('.loading'))
    var entries = res.feed.entries
    var added = 0;
    
    var holderDiv = document.createElement('div')
    holderDiv.setAttribute('class','holder')
    blogDiv.appendChild(holderDiv);
    
    var ul = document.createElement('ul')
    ul.setAttribute('id','entries')
    holderDiv.appendChild(ul);
    
    for(var i = 0; i < entries.length; i++){
      var entry = entries[i]
      if(entry.title.indexOf('PR:') == -1){
        added++
                 
        var li = document.createElement('li')
        var description = entry.description.replace("Last reply by", "Última Respuesta de");
        description = description.substring(0, description.indexOf("on"));
        li.innerHTML = '<p class="title"><a href="'+entry.link+'" target="_blank">'+entry.title+'</a></p><p class="description">'+description+'</p><p class="date">Publicada el día '+ formatDate(new Date(entry.pubdate_ms))+'</p>'
        ul.appendChild(li)
      }
    }
    callback();
  })
}