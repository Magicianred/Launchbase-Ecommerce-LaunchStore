
<h1 align="center">Rocketseat</h1>

<h1 align="center"><b>E-commerce - Launchstore</b></h1>


<h1 align="center">
    <img src="https://ik.imagekit.io/cnbmdh4b9w/ecommerce_HhknSzNHC.png">
</h1>


## About
Launchstore is a project about building an E-commerce.


## Learning 
The first part:
- Created page **Product creation**, so new products along with its **category** can be input into the **Front-end**.
- Created **edit** page, so a product can be edited.
- Data is being stored on Postgres.
- Concepts of DBML using dbdiagram.io
- Asynchronous Functions, callbacks and Promise.
- Input Mask

The second part:
- Created Image manager on Frontend. 
- Limited up to 6 images upload.
- From each File on Filelist(uploaded), created and array of files = []. Then, used DataTransfer Constructor(for Chrome) and Clipboard(for FireFox) on this array. After that, replaced the browser Filelist with this array . 

The third part:
-  Installed and configured middleware "multer" - Node tool - as it allows to send files to the Backend. "npm install multer"
- On the FORMS to create and update products, added "enctype="multipart/form-data" , so files can be sent to Backend.
- On POST route at the time to save a PRODUCT, validated if req.files is not empty. 
    - Got the files(images coming on req.files). Treated the file.path with method **replace** to replace "2 backslash bars " to "/". Got the product_id and created/saved the files in the Database. 
 
- On the Edit page, retrieved all files related to a product and displayed them on the Edit page. 
- On PUT/update route, created an array coming from backend with all the images that were set to be deleted. Then, created a promise to delete them in the backend. 

## Languages used
- Html5 (Hypertext)
- Css3 (Cascading Style Sheet)
- Javascript
- Postgres



