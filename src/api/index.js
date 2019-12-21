const express = require('express');
const http = require('http');

const app = express();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    next();
});
const imgURL = "https://picsum.photos/150/100"
const avURL = "https://picsum.photos/25"
const tutorials = [
    {author: "Loockeeer", likeCount: 1, name: "Comment se faire manger :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 1, name: "Comment se faire manger :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 1, name: "Comment se faire manger :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 1, name: "Comment se faire manger :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 1, name: "Comment se faire manger :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL},
    {author: "Loockeeer", likeCount: 5, name: "Comment bannir :yay:", commentCount: 59, description: "Un truc ptetre cool enfin je sais pas mais bon voilà YEAH", imageURL: imgURL, avatarURL: avURL}
]

app.get('/tutorials', (req,res)=>{
    console.log("request")
    const from = Number(req.query.from)
    const to = Number(req.query.to)
    if(!tutorials[from] )return res.send(400)
    if(!tutorials[to]) return res.send(400)
    const select = []
    for(let i = from; i<to;i++) select.push(tutorials[i])
    res.send(select)
})
app.listen(8081, ()=>{
    console.log('=> Ready !')
});