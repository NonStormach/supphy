// const imageList = [ 
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1764px-Epic_Games_logo.svg.png',
//     'https://img.freepik.com/premium-vector/illustration-anti-virus-logo-design-combination-of-virus-or-bacteria-with-security-shield-logo-des_629524-777.jpg?w=2000',
//     'https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHev-hgNrFdcOEpwBsJD8-2REMO2BPCmLWXg&usqp=CAU',
//     'https://play-lh.googleusercontent.com/52_DMY5417awaEgJf3_9mWgEuO2t1JfkGab8kM-LD6l5u6cGm_1-GsoQ_IyWFHdbkA',
//     'https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1683566799'
// ]

//   const img = document.querySelector('#img12')
//   const next = document.getElementById('next')
//   var numImage = 0
//   img.src = imageList[numImage]
  
//   next.addEventListener('click', () => {
//     numImage++
//     if (numImage >= imageList.length) {
//       numImage = 0
//     }
//     console.log(numImage >= imageList.length)
//     console.log(numImage)
//     img.src = imageList[numImage]
//   })
  
  
  
  
  
//   const imageList1 = [
//     'https://w7.pngwing.com/pngs/630/871/png-transparent-heart-eyes-emoji-emoji-heart-iphone-love-emoji-smiley-sticker-emoticon-thumbnail.png',
//     'https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png',
//     'https://www.pngfind.com/pngs/m/238-2383371_sad-emoticon-png-new-iphone-emojis-transparent-png.png',
//   ]
//   const img1 = document.querySelector('.img')
//   const next2 = document.getElementById('next2')
//   var numImage2 = 0
//   img1.src = imageList1[numImage2]
  
//   next2.addEventListener('click', () => {
//     numImage2++
//     if (numImage2 >= imageList1.length) {
//       numImage2 = 0
//     }
//     console.log(numImage2 >= imageList1.length)
//     console.log(numImage2)
//     img1.src = imageList1[numImage2]
//   })
  
const imageList = [
    'https://w7.pngwing.com/pngs/630/871/png-transparent-heart-eyes-emoji-emoji-heart-iphone-love-emoji-smiley-sticker-emoticon-thumbnail.png',
    'https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png',
    'https://www.pngfind.com/pngs/m/238-2383371_sad-emoticon-png-new-iphone-emojis-transparent-png.png'
  ]
  const img = document.querySelector('#img')
  const next = document.getElementById('next')
  var numImage = 0
  img.src = imageList[numImage]
  
  next.addEventListener('click', () => {
    numImage++
    if (numImage >= imageList.length) {
      numImage = 0
    }
    console.log(numImage >= imageList.length)
    console.log(numImage)
    img.src = imageList[numImage]
  })
  