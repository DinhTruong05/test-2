let samsung = new mobile();
let iphone = new mobile();

samsung.writemsg(" xin chao!")
samsung.sendmsg(iphone)

iphone.writemsg(" xin chao!")
iphone.sendmsg(samsung)

iphone.writemsg("nice to meet you!")
iphone.sendmsg(samsung)

samsung.readoutbox()