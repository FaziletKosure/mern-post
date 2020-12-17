import postMessage from '../models/postMessage.js'


export const getPosts=async(req,res)=>{
    // res.send('THIS WORKS!')  
    try{
      const postMessages = await postMessage.find();
      console.log(postMessages);
      res.status(200).json(postMessages)

    } catch(error){
      res.status(404).json({message:error.message})

    }
  }



  export const createPost=async(req,res)=>{
    // res.send('Post Creation')
    const post = req.body;

    const newPost = new postMessage(post)

    try{
      await newPost.save()

      res.status(201).json(newPost)
     
    }catch(error){
      res.status(404).json({message:error.message})
    }

  }