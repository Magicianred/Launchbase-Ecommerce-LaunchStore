function post(req, res, next) {
  try {
    const keys = Object.keys(req.body);

    for (let key of keys) {
      if (req.body[key] == "") return res.send("Please go back and fill out all fields!");
    }

    if (!req.files ||req.files.length == 0)
      return res.send("Please, send at least one image");

    next();
  } catch (error) {
    console.log(error);
  }
}

function put(req, res, next){

  try{

    const keys = Object.keys(req.body)
      
      for (let key of keys) {
        if (req.body[key] == "" && key != "removed_files") {
          return res.send("Please go back and fill out all fields!.");
        }
      }
      next()

    }catch(error){

      console.error(error)
    }
  }

module.exports = {
  post,
  put
};
