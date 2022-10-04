import Link from '../model/Link.js';



export const addLink = async (request,response)=>{
  try{
      const newLink = await Link.create({
        data:request.body.data,
        createdAt:Date.now()
      })
      await newLink.save();

      return response.status(200).json(newLink);
  }catch(error){
    return response.status(500).json(error.message);
  }
}


export const getAllLinks = async (request,response)=>{
  try{
    const links = await Link.find({}).sort({'createdAt':-1})

    return response.status(200).json(links);
  }catch(error){
  return response.status(500).json(error.message);
}
}

export const toggleLinkVisited = async (request,response)=>{
  try{
    const linkRef = await Link.findById(request.params.id);
    const link = await Link.findOneAndUpdate(
      {_id:request.params.id},
      {visited: !linkRef.visited}
    )
    await link.save();
    return response.status(200).json(link);
  }catch(error){
  return response.status(500).json(error.message);
}
}

export const updateLink = async (request,response)=>{
  try{
    await Link.findOneAndUpdate(
      {_id:request.params.id},
      {data: request.body.data}
    )
    const link = await Link.findById(request.params.id)
    return response.status(200).json(link);
  }catch(error){
  return response.status(500).json(error.message);
}
}

export const deleteLink = async (request,response)=>{
  try{
    const link =await Link.findByIdAndDelete(request.params.id)
    return response.status(200).json(link);
  }catch(error){
  return response.status(500).json(error.message);
}
}