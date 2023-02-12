function changeInfo(){
  const image = document.getElementsByClassName('productImage')
  const w = image.item("").width
  const h = image.item("").height
  image.item("").src.includes("normal") ? image.item("").src =image.item("").src.replace("normal", "360").replace("png", "gif") : image.item("").src =image.item("").src.replace("360", "normal").replace("gif", "png")
  image.item("").width = w
  image.item("").height = h
  const icon = document.getElementsByClassName('switch')
  console.log(document.getElementsByClassName('switch').item(""))
  icon.item("").src.includes("360") ? icon.item("").src = icon.item("").src.replace("360", "close") : icon.item("").src = icon.item("").src.replace("close", "360")
}

document.getElementsByClassName('switch').item("").addEventListener("click", changeInfo, false)