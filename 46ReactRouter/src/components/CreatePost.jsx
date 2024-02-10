import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  //const { addPost } = useContext(PostList);

  return (

    // react form router is router with less work 

    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          // name attrubute is used for input purpose 
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          name="body"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          name="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

//action function get a data attribut on submission data attribute  as method ="POSt "
export async function createPostAction(data) {
  const formData = await data.request.formData();  //it collect overall data asyncronasly or use .then syntax 
  const postData = Object.fromEntries(formData); //it collect the data in onject 
  postData.tags = postData.tags.split(" ");
  console.log(`Collecting data from the form ${postData}`);
  console.log(postData)

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(`send request to server to add data from the form ${postData}`);
      console.log(postData)

    });

    //redirect is from the router to page redirectin of the page 
  return redirect("/"); 
}

export default CreatePost;